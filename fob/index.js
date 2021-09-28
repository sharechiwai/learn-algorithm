import advance from './advance.js';
console.time('full');
console.time('50');
console.log(advance.fob(100));
console.timeEnd('50')

console.timeEnd('full')