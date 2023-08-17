interface TokenTypeToValueType {
    IDENTIFIER: string;
    DELIMETER: string;
    KEYWORD: string;
    OPERATOR: string;
    PARAMETER: string;
}
interface Token<T extends keyof TokenTypeToValueType = keyof TokenTypeToValueType> {
    type: T;
    value: TokenTypeToValueType[T];
    whitespace: boolean;
}
export declare class Lexer {
    private pos;
    private src;
    private tokens;
    static lex(src: string): Token<keyof TokenTypeToValueType>[];
    lex(src: string): Token[];
    private nextToken;
    private lastToken;
    private readIdentifier;
    private readDelimitedIdentifier;
    private readCursor;
    private createIdentifier;
    private createKeyword;
    private createDelimeter;
    private createParameter;
}
export {};
