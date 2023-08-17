# sql-parser

Just an experimental lexer (and parser in the future) for SQL because I'm learning about Lexical and Syntax Analysis.

## Usage

```ts
import { Lexer } from 'sql-parser';
const tokens = Lexer.lex('SELECT * FROM table where id = :id');
console.log(tokens)
```

## Development

```bash
yarn
yarn test
yarn build
```
