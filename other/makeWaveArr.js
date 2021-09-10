function runProgram(input) {
    // Write code here
    input = input.trim().split('\n')
    const n = +input[0]
    const arr = input[1].trim().split(' ').map(Number)

    arr.sort( (a,b) => a-b )

    for ( let i = 0; i < n; i += 2 ) {
        [ arr[i], arr[i+1] ] = [ arr[i+1], arr[i] ]
    }
    console.log( arr.join(' ') )
   
  }
  if (process.env.USERNAME === "sy3dy") {
    runProgram(`10
    9 8 4 10 3 6 5 7 1 2`);
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