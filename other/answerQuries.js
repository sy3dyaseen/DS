/*
Answer Queries
-21:17:17

Description

You are given an integer array arr of size n. This array is queried q times. In each query, an element x is given. 
For each query, you have to print "YES" if the element exists in the array or "NO" if it doesn't exist

Input

Input Format

First line contains n the number of elements in the array

Second line contains n space separated integers, the elements of the array

Third line contains q, the number of queries

Fourth line contains q space separated integers


Constraints

1 <= n <= 10e5

1 <= arr[i] <= 10e5

1 <= q <= 10e5

1 <= query[i] <= 10e5

Output

For each query, print on a new line, "YES" if the element exists in the array, "NO" otherwise

Sample Input 1

5
1 2 3 4 5
3
3 5 7

Sample Output 1

YES
YES
NO

*/



function runProgram(input) {
    // Write code here
    input = input.trim().split('\n')
    const arr = input[1].trim().split(' ').map(Number)
    const q = input[3].trim().split(' ').map(Number)
    const s = {}
    let ans = ''

    for ( i of arr ) s[i] = 1

    for ( i of q ) {
        ans += s.hasOwnProperty(i) ? 'YES' + '\n' : 'NO' + '\n'
    }
    
    console.log( ans )
   
  }
  if (process.env.USERNAME === "sy3dy") {
    runProgram(`5
    1 2 3 4 5
    3
    3 5 7`);
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