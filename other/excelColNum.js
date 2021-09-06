function runProgram(input) {
    // Write code here
    input = input.trim().split('\n')
    const t = +input[0]
    const A = 'A'.charCodeAt(0) -1
    let ans
    
    for ( let i = 1; i <= t; i++ ) {
      const s = input[i].trim()
      ans = 0
  
      for ( let j = s.length-1; j >= 0; j-- ) {
        ans += ( s[j].charCodeAt(0) - A ) * 26**(s.length-1-j)
      }
      console.log( ans )
    }

   
  }
  if (process.env.USERNAME === "sy3dy") {
    runProgram(`3
    A
    AB
    ZY`);
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