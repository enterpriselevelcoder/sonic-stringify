[![Build Status](https://travis-ci.org/enterpriselevelcoder/sonic-stringify.svg?branch=master)](https://travis-ci.org/enterpriselevelcoder/sonic-stringify) [![Coverage Status](https://coveralls.io/repos/github/enterpriselevelcoder/sonic-stringify/badge.svg?branch=master)](https://coveralls.io/github/enterpriselevelcoder/sonic-stringify?branch=master)


# Lightining fast JSON stringify library

A lightning fast JSON serializer for Javascript Objects.

# Performance Comparison

We ran 3 different benchmarks comparing to JSON.stringify and our library serialization is `150 times` faster for simple objects, `20 times` faster for medium complexity objects and similar results for complex objects.

## Benchmark times

```bash
$ npm run benchmarks

sonic-stringify [simple] x 7,869,445 ops/sec ±0.52% (89 runs sampled)
JSON.stringify   [simple] x 3,113,250 ops/sec ±0.87% (85 runs sampled)
Fastest is sonic-stringify [simple]

sonic-stringify [medium] x 3,712,153 ops/sec ±0.75% (89 runs sampled)
JSON.stringify  [medium] x 2,111,787 ops/sec ±1.00% (88 runs sampled)
Fastest is sonic-stringify [medium]

sonic-stringify [complex] x 1,286,822 ops/sec ±2.73% (84 runs sampled)
JSON.stringify  [complex] x 1,280,452 ops/sec ±3.41% (81 runs sampled)
Fastest is sonic-stringify [complex]
```

## Install

```bash 
$ npm install sonic-stringify
```

## Usage

``` js
const stringify = require('sonic-stringify');

const jsonString = stringify({ string: 'string' });
```

## Tests

```bash
$ npm test
```

## Benchmarks

```bash
$ npm run benchmarks
```

## Contributing

We would love you to contribute to `@enterpriselevelcoder/sonic-stringify`, pull requests are very welcomed!

## Credits

`@enterpriselevelcoder/sonic-stringify` was created as [`node-github`](https://www.npmjs.com/package/github)
in 2018 by Juliano Teixeira.

## LICENSE

[MIT](LICENSE)
