# uuid

Serialize, deserialize and generate UUIDs in JavaScript

# Documentation

## Installation

Install the package:

```bash
$ npm install @minecraft-js/uuid
```

And then import it in your JavaScript/TypeScript file

```ts
const { UUID } = require('@minecraft-js/uuid'); // CommonJS

import { UUID } from '@minecraft-js/uuid'; // ES6
```

## Generating an UUID

To generate an UUID use the `generateV4` function that you can import from the package.

```ts
const uuid = generateV4();

console.log(uuid); // 'UUID <7ed9e77e-34b8-400e-b684-9093c550b4f9>'
```

## Parsing an UUID

If you need to parse UUIDs easily from a string (with dashes or not, both are supported) use the `parseUUID` function.

```ts
const parsed = parseUUID('7ed9e77e-34b8-400e-b684-9093c550b4f9');

console.log(uuid); // 'UUID <7ed9e77e-34b8-400e-b684-9093c550b4f9>'
```

The parseUUID runs a check to see whether or not the string is a valid UUID before parsing it. If you are 100% sure that the string is a valid UUID you could set the `disableTypeCheck` argument to true to skip that check and makes the function very fast.

```ts
const parsed = parseUUID('7ed9e77e-34b8-400e-b684-9093c550b4f9', true);

console.log(uuid); // 'UUID <7ed9e77e-34b8-400e-b684-9093c550b4f9>'
```

See more here: https://minecraftjs.github.io/uuid/
