import { expect } from "chai";
import { Lexer } from ".";

function KEYWORD(value: string, whitespace: boolean = true) {
    return {
        type: "KEYWORD",
        value,
        whitespace,
    };
}

function DELIMETER(value: string, whitespace: boolean = true) {
    return {
        type: "DELIMETER",
        value,
        whitespace,
    };
}

function IDENTIFIER(value: string, whitespace: boolean = true) {
    return {
        type: "IDENTIFIER",
        value,
        whitespace,
    };
}

function PARAMETER(value: string, whitespace: boolean = true) {
    return {
        type: "PARAMETER",
        value,
        whitespace,
    };
}

describe("SqlLexer", () => {
    it("test", () => {
        expect(Lexer.lex("")).to.be.deep.equal([]);
        expect(Lexer.lex("SELECT")).to.be.deep.equal([
            {
                type: "KEYWORD",
                value: "SELECT",
                whitespace: false,
            },
        ]);
        const src = "SELECT * from table WHEre id = 123 and 123abc = 'something' and :foo = :bar1";
        console.log(Lexer.lex(src));
        expect(
            Lexer.lex(
                src
            ),
        ).to.be.deep.equal([
            KEYWORD("SELECT"),
            DELIMETER("*"),
            KEYWORD("FROM"),
            IDENTIFIER("table"),
            KEYWORD("WHERE"),
            IDENTIFIER("id"),
            DELIMETER("="),
            IDENTIFIER("123"),
            KEYWORD("AND"),
            IDENTIFIER("123abc"),
            DELIMETER("="),
            IDENTIFIER("something"),
            KEYWORD("AND"),
            PARAMETER(":foo"),
            DELIMETER("="),
            PARAMETER(":bar1", false),
        ]);
    });
});
