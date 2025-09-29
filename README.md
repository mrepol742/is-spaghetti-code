# is-spaghetti-code

A simple npm package that detects characteristics of spaghetti code by analyzing JavaScript code snippets. It checks for deep nesting and long functions, giving you insights into your code's structure.

## Installation

You can install `is-spaghetti-code` using npm:

```bash
npm install is-spaghetti-code
```

## Usage

To use the package, require it in your JavaScript file and pass a code string to the `isSpaghettiCode` function:

```javascript
// import isSpaghettiCode from "is-spaghetti-code"
const isSpaghettiCode = require('is-spaghetti-code');

const codeSample = `
    function doSomething() {
        if (true) {
            for (let i = 0; i < 10; i++) {
                while (i < 5) {
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
```

### Parameters

- **code**: A string containing the JavaScript code to analyze.

### Returns

The function returns an object with the following properties:

- **isSpaghetti**: Boolean indicating if the code has spaghetti characteristics.
- **maxNestingLevel**: The maximum nesting level found in the code.
- **longFunctionCount**: The number of functions that exceed the defined length threshold.

## Example

```javascript
const result = isSpaghettiCode(codeSample);
console.log(result);
// Output:
// {
//   isSpaghetti: true,
//   maxNestingLevel: 3,
//   longFunctionCount: 0
// }
```

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
```

Feel free to customize it further to fit your style or any additional details you'd like to include!
