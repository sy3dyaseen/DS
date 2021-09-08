/*
Digit Mania
-21:5:34

Description

Given an array A with n positive integers and a single-digit k. Find the element with the maximum occurrence of the digit k.

If the two elements have the same number of frequency of digit k, then the answer is the maximum of the two elements.

If the digit k doesn't appear in any element, simply print -1.

Input

The first line of the input contains one integer t (1 ≤ t ≤ 10) — the number of test cases. Then t test cases follow.

The first line of each test case contains 2 integers n (1 ≤ n ≤ 100) and k (1 ≤ k ≤ 9).

The second line of each test case contains n integers (1 ≤ Ai ≤ 10000) - The elements of the array A.

Output

For each test case, print the answer.

Sample Input 1

2
5 2
222 2221 12221 2222 12
5 2
222 2221 12221 2212 12

Sample Output 1

2222
12221

Hint

In the second testcase, 4 elements have digit 2 with frequency 3 so then 12221 is the answer according to the problem.

*/

function runProgram(input) {
    // Write code here
    input = input.trim().split('\n')
    const t = +input[0]

    for ( let x = 0, l = 1; x < t; x++ ) {
        const [ n, k ] = input[l++].trim().split(' ').map(Number)
        const arr = input[l++].trim().split(' ')

        let max = -1
        let num = -1


        for ( let i = 0; i < n; i++ ) {
            let count = 0
            for ( j of arr[i] ) if ( j == k ) count++

            if ( count > max ) {
                max = count 
                num = +arr[i]
            }
            else if ( count == max ) {
                if ( +arr[i] > num ) {
                    num = +arr[i]
                }
            }
        }

        console.log( num )
    }
   
  }
  if (process.env.USERNAME === "sy3dy") {
    runProgram(`2
    5 2
    222 2221 12221 2222 12
    5 2
    222 2221 12221 2212 12`);
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