function runProgram(input) {
    // Write code here
    input = input.trim().split('\n')
    const n = +input[0]
    const arr = input[1].trim().split(' ').map(Number)
    
    const total = arr.reduce( (acc, el) => acc + el )
    let sum = 0, i

    for ( i = 0; i < n; i++ ) {
        if ( total - sum === sum + arr[i] ) {
            console.log( i+1 )
            break
        }
        sum += arr[i]
    }
    
    i === n && console.log( -1 )
   
  }
  if (process.env.USERNAME === "sy3dy") {
    runProgram(`5
    3 3 9 7 1`);
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