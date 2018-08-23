const Benchmark = require('benchmark');
const stringify = require('../');

// const suite = new Benchmark.Suite;

const simple = { string: 'string' };

const medium = { string: 'string', number: 10, bool: true };

const complex = {
  string: 'string',
  obj: {
    test: 'test'
  },
  array: [1,2,3]
};

new Benchmark.Suite()
  .add('sonic-stringify [simple]', () => {
    stringify(simple);
  })
  .add('JSON.stringify  [simple]', () => {
    JSON.stringify(simple);
  })
  // add listeners
  .on('cycle', event => {
    console.log(String(event.target));
  })
  .on('complete', function() {
    console.log('Fastest is ' + this.filter('fastest').map('name'), '\n');
    mediumBenchmark();
  })
  // run async
  .run({ 'async': true });

const mediumBenchmark = () => {
  new Benchmark.Suite()
    .add('sonic-stringify [medium]', () => {
      stringify(medium);
    })
    .add('JSON.stringify  [medium]', () => {
      JSON.stringify(medium);
    })
    // add listeners
    .on('cycle', event => {
      console.log(String(event.target));
    })
    .on('complete', function() {
      console.log('Fastest is ' + this.filter('fastest').map('name'), '\n');
      complexBenchmark();
    })
    // run async
    .run({ 'async': true });
}

const complexBenchmark = () => {
  new Benchmark.Suite()
    .add('sonic-stringify [complex]', () => {
      stringify(complex);
    })
    .add('JSON.stringify  [complex]', () => {
      JSON.stringify(complex);
    })
    // add listeners
    .on('cycle', event => {
      console.log(String(event.target));
    })
    .on('complete', function() {
      console.log('Fastest is ' + this.filter('fastest').map('name'));
    })
    // run async
    .run({ 'async': true });
}