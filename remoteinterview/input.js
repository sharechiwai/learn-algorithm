//You are given an integer N where 0 <= N <= 100, 
// followed by another line of input which has a word W with length L where 1 <= L <= 50. 
// Your task is to print N lines with the word W. 
// The lines of your output should not have any trailing or leading spaces.
// Your output lines should not have any trailing or leading whitespaces

process.stdin.resume();
process.stdin.setEncoding('utf8');
//var util = require('util');
var input = "";


process.stdin.on('data', function (text) {
  input += text;
});

process.stdin.on('end', function () {
  //do your processing here.
  var ks = input.split(/\r?\n/);
  let n = ks[0];
  let word = ks[1];
  
   if(n < 1 || n > 100) {
    return "";
  }
  if(word.length < 1 || word.length > 50) {
    return "";
  }

  for (var i = 0; i < n; i++) {
    console.log(word);
  }
});


function solution(n, word) {
  if(n < 1 || n > 100) {
    return "";
  }
  if(word.length < 1 || word.length > 50) {
    return "";
  }

  for (var i = 0; i < n; i++) {
    console.log(word);
  }
  return '';
} 

//solution(5, "hello");