/*
Substrings with K distinct letters
-12:37:27

Description

Given string str of lowercase alphabets of length n and an integer K, the task is to count all substrings 
of length K which have exactly K distinct characters.

Input

Input Format

First line contains n and k separated by space
Second line contains strings of length n.

Constraints

1<=n<=10^6

1<=k<=10^6


Output

Print count of substrings of length k with k distinct letters

Sample Input 1

4 2
abcc

Sample Output 1

2

*/



function runProgram(input) {
    // Write code here
    input = input.trim().split('\n')
    const [ n, k ] = input[0].trim().split(' ').map(Number)
    const s = input[1].trim()

    const set = {}
    let letters = 0, subStrs = 0

    for ( let i = 0; i < k ; i++ ) {
      // if ( !set.hasOwnProperty(s[i]) ) {
      //   set[s[i]] = 1
      //   letters++
      // }
      // else {
      //   ++set[s[i]]
      // }
      occurance( set, i, k, letters )
    }

    if ( letters === k ) subStrs++

    for ( let i = k; i < n; i++ ) {
      if ( set[s[i-k]] === 1 ) {
        delete set[s[i-k]]
        letters--
      }
      else {
        --set[s[i-k]]
      }

      // if ( !set.hasOwnProperty(s[i]) ) {
      //   set[s[i]] = 1
      //   letters++
      // }
      // else {
      //   ++set[s[i]]
      // }
      occurance( set, i, k, letters )

      if ( letters === k ) subStrs++
    }
    console.log( subStrs )

    function occurance ( set, i, k ) {
      if ( !set.hasOwnProperty(s[i]) ) {
        set[s[i]] = 1
        letters++
      }
      else {
        ++set[s[i]]
      }
    }
   
  }
  if (process.env.USERNAME === "sy3dy") {
    runProgram(`4 2
    abcc`);
  } else {
    process.stdin.resume();
    process.stdin.setEncoding("ascii");
    let read = "";
    process.stdin.on("data", function (input) {
      read += input;
    });
    process.stdin.on("end", function () {
      read = read.replace(/\n$/, "");
      read = read.replace(/\n$/, "");
      runProgram(read);
    });
    process.on("SIGINT", function () {
      read = read.replace(/\n$/, "");
      runProgram(read);
      process.exit(0);
    });
  }

//   console.log(process.env.USERNAME);