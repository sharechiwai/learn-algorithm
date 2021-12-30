import advance from './advance.js';
console.time('full');
console.time('50');
console.log(advance.fob(100));
console.timeEnd('50')

console.timeEnd('full')

// if the current pile has at most M boxes, you can carry it as is
// otherwise you split it into P parts as equally as possible 
// (i.e. so that the sizes of the parts differ at most by 1) and apply the same algorithm to each of the parts.
// algorithm to split pile into parts
// if pile is empty, return empty array
// if pile has 1 box, return pile
// if pile has more than 1 box, split pile into parts
// if pile has more than 1 box and more than M boxes, split pile into parts
function fob(M, P) {
  if (M === 0) {
    return 0;
  }
}