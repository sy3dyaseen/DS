function runProgram(input) {
    // Write code here
    input = input.trim().split('\n')
    const n = +input[0]
    const arr = input[1].trim().split(' ').map(Number)
    const s = [arr[0]]
    let ans = '-1'

    for ( let i = 1; i < n; i++ ) {
        while ( s.length != 0 && arr[i] <= s[s.length-1] ) {
            s.pop()
        }

        ans += s[s.length-1] < arr[i] ? ` ${s[s.length-1]}` : ` -1`
        
        s.push( arr[i] )
    }
    console.log( ans )
   
  }
  if (process.env.USERNAME === "sy3dy") {
    runProgram(`8
    39 27 11 4 24 32 32 1`);
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