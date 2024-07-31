# My Universal Package

This is a universal TypeScript package that can be used in both browser and Node.js environments.

## Installation

```bash
npm install ts-universal-package
```

## Usage

### In a TypeScript/JavaScript project

```typescript
import { greet, doubleNumber } from 'ts-universal-package';

console.log(greet('World')); // Output: Hello, World!
console.log(doubleNumber(5)); // Output: 10
```

### In a browser

```html
<script src="path/to/ts-universal-package/dist/index.js"></script>
<script>
    console.log(MyUniversalPackage.greet('Browser'));
    console.log(MyUniversalPackage.doubleNumber(5));
</script>
```

## Development

1. Clone the repository
2. Install dependencies: `npm install`
3. Build the package: `npm run build`
4. Run tests: `npm test`

## License

MIT
