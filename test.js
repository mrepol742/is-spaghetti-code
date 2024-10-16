const isSpaghettiCode = require('./index');

const codeSample = `
    function doSomething() {
        if (true) {
            for (let i = 0; i < 10; i++) {
                while (i < 5) {
                    // Nested too deeply
                    console.log(i);
                }
            }
        }
    }
`;

const result = isSpaghettiCode(codeSample);
console.log('Is Spaghetti Code:', result.isSpaghetti);
console.log('Max Nesting Level:', result.maxNestingLevel);
console.log('Long Function Count:', result.longFunctionCount);
