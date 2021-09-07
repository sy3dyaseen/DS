function runProgram(input) {
    // Write code here
    input = input.trim().split('\n')
    const n = +input[0]
    const arr = input[1].trim().split(' ').map(Number)

    console.log( uniqueArr( arr, n ))

    function uniqueArr( arr, n ) {
        if ( n === 1) return arr[0]

        let s = 0, i

        for ( i = 1; i < n; i++ ) {
            if ( arr[s] !== arr[i] ) {
                arr[++s] = arr[i]
            }
            console.log( arr[s] )
        }

        while ( arr.length > s + 1 ) {
            arr.pop()
        }

        return arr.join(' ')
    }
   
  }
  if (process.env.USERNAME === "sy3dy") {
    runProgram(`5
    2 2 2 7 9
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