function runProgram(input) {
    // Write code here
    input = input.trim().split('\n')
    const n = +input[0]
    
    for ( let i = 1; i <= n; i++ ) {
      console.log( nicksHacks( +input[i], 1 ) ? 'Yes' : 'No')
    }

    function nicksHacks( n )  {
       
        return n == 1 ? true :
               n < 1 ? false :
               nicksHacks( n / 10 ) || nicksHacks( n / 20)
    }

  }
  if (process.env.USERNAME === "sy3dy") {
    runProgram(`5
    1
    2
    10
    25
    200`);
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