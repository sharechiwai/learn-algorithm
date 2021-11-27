// You are given an integer N, followed by at least N lines of input (1 <= N <= 100).
// Each line of input contains one or several words separated with single spaces.
// Each word is a sequence of letters of English alphabet containing between 1 and 10 characters, inclusive.
// The total number of words in a line of input is between 1 and 100, inclusive.

// Your task is to process only N lines of input and reverse the order of words in each line of input,
// while keeping the first and last word in their original position.
// The lines of your output should not have any trailing or leading spaces.

function solution(str) {
  // split input into array of lines
  const lines = str.split('\n');
  // first line is the number of lines
  const n = parseInt(lines.shift());
  // check if n is NaN
  // check if n is between 1 and 100
  if (isNaN(n) || n < 1 || n > 100) {
    console.error('error: number of lines should between 1 to 100');
    return;
  }

  // loop through each line
  for (let i = 0; i < n && i < lines.length; i++) {
    // check input should only contain letters space and single space and line break
    if (!/^[a-zA-Z\s]+$/.test(lines[i])) {
      console.error('error: input should only contain letters space and single space and line break');
      return;
    }
    console.log(splitWords(lines[i]));
  }
}

function splitWords(str) {
  // trim the string
  str = str.trim();
  const words = str.split(' ');
  if (words.length <= 3) {
    return str;
  } else {
    // take first item from array
    const first = words.shift();
    // take last item from array
    const last = words.pop();

    // reverse the array
    const reversed = words.reverse();
    // join first and last items
    const joined = [first, ...reversed, last].join(' ');
    return joined;
  }
}

//splitWords('hello abc 123 cde world');
//test.assertEquals(splitWords('hello abc 123 cde world'), 'hello world cde 123 abc ');
solution('3 \n abc cde erf \n abc cde efg hig klm mop end');
