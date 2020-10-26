const { createMathOperation } = require("./internal/createMathOperation");

const add = createMathOperation((augend, addend) => augend + addend, 0);

let result = add( 1, 4);

console.log('result:', result, typeof result);

