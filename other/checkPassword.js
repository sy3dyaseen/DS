/*
Check Your Password

Description

You are given the password of your Cryptolocker, and you have to find if the password is strong or not.

    The password contains small case English Characters, and integers between [0 - 9]
    A password is considered strong, if more than half of the characters in the password are English characters.
    Find that the password given to you, is strong or not

Note: The length of the string will always be even

Input

The first line of the input containsT, the number of test cases

The first line of each test case containsn, the length of the string

The next line contains the string itself

1 <= T <= 10

1 <= N <= 10^6

Output

For each test case, printStrong, if the password is strong, else, printWeak, if the password is not strong

Sample Input 1

2
6
aa1234
6
abcd12

Sample Output 1

Weak
Strong

Hint

In the first test case, the password isaa1234. The number of characters in the string is 2, which is less than half the length of the string. Therefore, the password isWeak

In the second test case, the password isabcd12. The number of characters in the string is 4, which is more than half the length of the string. Therefore, the password isStrong

*/

function runProgram(input) {
    // Write code here
    input = input.trim().split('\n')
    const t = +input[0]
    const a = 'a'.charCodeAt(0)
    const z = 'z'.charCodeAt(0)
    const _0 = '0'.charCodeAt(0)
    const _9 = '9'.charCodeAt(0)

    for ( let k = 0, l = 1; k < t; k++ ) {
        const n = +input[l++]
        const s = input[l++].trim()
        let letters = 0, digits = 0
        
        for ( i of s ) {
            if ( i.charCodeAt(0) >= a && i.charCodeAt(0) <= z ) {
                letters++
            }
            else if ( i.charCodeAt(0) >= _0 && i.charCodeAt(0) <= _9 ) {
                digits++
            }
        }

        console.log( digits == 0 ? 'Weak' : letters > digits ? 'Strong' : 'Weak' )
    }
   
  }
  if (process.env.USERNAME === "sy3dy") {
    runProgram(`2
    6
    aa1234
    6
    abcd12
    `);
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