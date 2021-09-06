function runProgram(input) {
    // Write code here
    input = input.trim().split('\n')
    const t = +input[0]
    for ( let x = 0, l = 1; x < t; x++ ) {
        const [ n, k ] = input[l++].trim().split(' ').map(Number)
        const w = input[l++].trim().split(' ').map(Number)

        w.sort( (a,b) => a-b )
        let i = 0, j = n-1, count = 0

        while ( i < j ) {
            if ( w[i] + w[j] <= k ){
                i++
                j--
                count++
            }
            else {
                j--
                count++
            }
        }

        if ( i === j ) count++
        console.log( count )
    }
   
  }
  if (process.env.USERNAME === "sy3dy") {
    runProgram(`2
    4 5
    3 5 3 4
    4 3
    1 2 2 3`);
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