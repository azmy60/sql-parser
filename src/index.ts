import assert from "assert";

interface Pos {
    line: number;
    cursor: number;
}

interface TokenTypeToValueType {
    IDENTIFIER: string;
    DELIMETER: string;
    KEYWORD: string;
    OPERATOR: string;
    PARAMETER: string;
}

interface Token<
    T extends keyof TokenTypeToValueType = keyof TokenTypeToValueType,
> {
    type: T;
    value: TokenTypeToValueType[T];
    whitespace: boolean;
}

const ALPHA_NUMERIC = /^[a-zA-Z_0-9]$/;
const CAPTURE_ALPHA_NUMERIC = /^[a-zA-Z_0-9]+/;
const KEYWORD = /^(SELECT|FROM|WHERE|AND)$/i;
const DELIMETER = /^[*=:]$/;
const QUOTE = /^['"`]$/;
const CAPTURE_DELIMITED_STRING = /^(["'`])(.*?)\1/;

export class Lexer {
    private pos: Pos = { line: 1, cursor: 0 };
    private src: string = "";
    private tokens: Token[] = [];

    static lex(src: string) {
        return new Lexer().lex(src);
    }

    lex(src: string): Token[] {
        this.src = src;
        let token = this.nextToken();
        while (token) {
            this.tokens.push(token);
            token = this.nextToken();
        }
        return this.tokens;
    }

    private nextToken(): Token | undefined {
        const cursor = this.pos.cursor;
        const src = this.src;
        const char = src[cursor];

        if (cursor >= src.length) return;

        if (char === "\n") {
            this.pos.line++;
            this.pos.cursor++;
            return this.nextToken();
        }

        if (char === " ") {
            const lastToken = this.lastToken();
            if (lastToken) lastToken.whitespace = true;
            this.pos.cursor++;
            return this.nextToken();
        }

        if (ALPHA_NUMERIC.test(char)) {
            const lastToken = this.lastToken();
            const identifier = this.readIdentifier();
            if (lastToken && !lastToken.whitespace && lastToken.value === ':') {
                return this.createParameter(this.tokens.pop()!.value + identifier);
            }
            if (KEYWORD.test(identifier)) {
                return this.createKeyword(identifier);
            }
            return this.createIdentifier(identifier);
        }

        if (DELIMETER.test(char)) {
            this.pos.cursor++;
            return this.createDelimeter(char);
        }

        if(QUOTE.test(char)) {
            const string = this.readDelimitedIdentifier();
            return this.createIdentifier(string);
        }

        throw new Error(`Unexpected character: ${JSON.stringify(src[cursor])}`);
    }

    private lastToken() {
        return this.tokens.at(-1);
    }

    private readIdentifier(): string {
        const src = this.readCursor();
        const identifier = CAPTURE_ALPHA_NUMERIC.exec(src)?.[0];
        assert(identifier, `Unexpected identifier: ${JSON.stringify(src)}`);
        this.pos.cursor += identifier.length;
        return identifier;
    }

    private readDelimitedIdentifier(): string {
        const src = this.readCursor();
        const string = CAPTURE_DELIMITED_STRING.exec(src)?.[2];
        assert(string, `Unexpected string: ${JSON.stringify(src)}`);
        this.pos.cursor += string.length + 2;
        return string;
    }

    private readCursor(): string {
        return this.src.substring(this.pos.cursor);
    }

    private createIdentifier(value: string): Token<"IDENTIFIER"> {
        return {
            type: "IDENTIFIER",
            value,
            whitespace: false,
        };
    }

    private createKeyword(value: string): Token<"KEYWORD"> {
        return {
            type: "KEYWORD",
            value: value.toUpperCase(),
            whitespace: false,
        };
    }

    private createDelimeter(value: string): Token<"DELIMETER"> {
        return {
            type: "DELIMETER",
            value,
            whitespace: false,
        };
    }

    private createParameter(value: string): Token<"PARAMETER"> {
        return {
            type: "PARAMETER",
            value,
            whitespace: false,
        };
    }
}
