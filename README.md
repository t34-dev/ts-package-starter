[![ISC License](http://img.shields.io/badge/license-ISC-blue.svg)](http://copyfree.org)
![TypeScript](https://img.shields.io/badge/TypeScript-5.5.3-blue?logo=typescript&ver=1722633465)
![Node.js](https://img.shields.io/badge/Node.js-%3E%3D20-green?logo=node.js&ver=1722633465)
![GitHub release (latest by date)](https://img.shields.io/github/v/release/t34-developereloper/ts-package-starter?ver=1722633465)
![GitHub tag (latest by date)](https://img.shields.io/github/v/tag/t34-developereloper/ts-package-starter?sort=semver&style=flat&logo=git&logoColor=white&label=Latest%20Version&color=blue&ver=1722633465)

# ts-package-starter

A universal TypeScript package template for creating libraries that can be used in React, Node.js, and web projects.

## Features

- TypeScript support
- Compatible with browser and Node.js environments
- Easy to use and extend
- Includes example functions
- Configured with ESLint, Prettier, and Husky for code quality
- Uses Rollup for building and bundling
- Vitest for testing

## Demo

You can see a live demo of this package in action at our [GitHub Pages demo site](https://t34-developereloper.github.io/ts-package-starter/).

This demo showcases the basic functionality of the package, including:
- Greeting function
- Number doubling function
- Package name retrieval

Feel free to inspect the source code of the demo page for an example of how to integrate this package into your web projects.

## Installation

```bash
npm install @t34-developer/ts-package-starter
```

## Usage

### In a TypeScript/JavaScript project

```typescript
import { greet, doubleNumber, getMyName } from '@t34-developer/ts-package-starter';

console.log(greet('World')); // Output: Hello, World!
console.log(doubleNumber(5)); // Output: 10
console.log(getMyName()); // Output: Well Do It Too
```

### In a browser

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Universal Package Demo</title>
</head>
<body>
    <h1>Universal Package Demo</h1>
    <div id="result"></div>

    <script src="https://unpkg.com/@t34-developer/ts-package-starter"></script>
    <script>
        const resultDiv = document.getElementById('result');
        const greeting = welldoittoo.greet('Browser');
        const doubledNumber = welldoittoo.doubleNumber(21);
        const name = welldoittoo.getMyName();

        resultDiv.innerHTML = `
            <p>${greeting}</p>
            <p>Double of 21 is: ${doubledNumber}</p>
            <p>Name: ${name}</p>
        `;
    </script>
</body>
</html>
```

## Integration Guide

### React Project

1. Install the package:
   ```bash
   npm install @t34-developer/ts-package-starter
   ```

2. Import and use in your React component:
   ```jsx
   import React from 'react';
   import { greet, doubleNumber } from '@t34-developer/ts-package-starter';

   function MyComponent() {
     return (
       <div>
         <h1>{greet('React')}</h1>
         <p>Double of 10 is: {doubleNumber(10)}</p>
       </div>
     );
   }

   export default MyComponent;
   ```

### Node.js Project

1. Install the package:
   ```bash
   npm install @t34-developer/ts-package-starter
   ```

2. Use in your Node.js script:
   ```javascript
   const { greet, doubleNumber } = require('@t34-developer/ts-package-starter');

   console.log(greet('Node.js'));
   console.log(`Double of 7 is: ${doubleNumber(7)}`);
   ```

### Web Project (via CDN)

You can include the package directly in your HTML file using a CDN:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Web Project Demo</title>
</head>
<body>
    <div id="result"></div>

    <script src="https://unpkg.com/@t34-developer/ts-package-starter"></script>
    <script>
        const { greet, doubleNumber } = welldoittoo;
        
        const resultDiv = document.getElementById('result');
        resultDiv.innerHTML = `
            <h1>${greet('Web')}</h1>
            <p>Double of 15 is: ${doubleNumber(15)}</p>
        `;
    </script>
</body>
</html>
```

## Examples

You can find example usage of this package in the `example/` directory of this repository. This includes:

- Basic HTML usage
- Node.js script example
- React component example

To run the examples locally:

1. Clone the repository
2. Navigate to the `example/` directory
3. Open the HTML file in a browser or run the Node.js script

## Development

1. Clone the repository:
   ```bash
   git clone https://github.com/t34-developer/ts-package-starter.git
   cd ts-package-starter
   ```

2. Install dependencies:
   ```bash
   pnpm install
   ```

3. Run tests:
   ```bash
   pnpm test
   ```

4. Build the package:
   ```bash
   pnpm build
   ```

5. Run pre-commit checks:
   ```bash
   pnpm pre-commit
   ```

### Using Make commands

Run these commands with `make <command>`:

- `make` or `make help`: Shows all available Make commands.
- `make rmdist`: Removes the dist folder.
- `make build`: Builds the project (includes removing dist folder).
- `make test`: Runs the test suite.
- `make version-up`: Updates the project version.
- `make pre`: Runs pre-commit checks.

#### Git Tag Management

The project includes additional commands for managing Git tags:

- `make tag`: Displays the latest Git tag.
- `make tag-new`: Displays the next Git tag that would be created.
- `make tag-up`: Creates and pushes a new Git tag. Note: This command can only be run from the 'main' branch.


## Scripts

- `pnpm clean`: Remove node_modules and pnpm-lock.yaml
- `pnpm rmdist`: Remove the dist folder
- `pnpm build`: Build the package
- `pnpm test`: Run tests
- `pnpm lint`: Run ESLint
- `pnpm format`: Format code with Prettier
- `pnpm check`: Run linter and Prettier checks
- `pnpm version-up`: Update package version
- `pnpm pre-commit`: Run pre-commit checks

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the ISC License.

## Links

- [GitHub Repository](https://github.com/t34-developer/ts-package-starter)
- [npm Package](https://www.npmjs.com/package/@t34-developer/ts-package-starter)
- [Demo](https://t34-developer.github.io/ts-package-starter/)

---

Developed with ❤️ by [t34-developer](https://github.com/t34-developer)
