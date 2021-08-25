function runProgram(input) {
    // Write code here
    input = input.trim().split('\n')
    const t = +input[0]

    for ( let k = 0, l = 1; k < t; k++ ) {
        const [ n, g ] = input[l++].trim().split(' ').map(Number)
        const arr = input[l++].trim().split(' ').map(Number)

        console.log( shortestRoute( arr, n, g ) )

    }

    function shortestRoute( arr, n, g ) {
        let s = 0, e = n+1
        let sum = arr[0], b = 0

        for ( let i = 1; i <= n; i++ ) {
            while ( sum - arr[b] >= g && b < i ) {
                sum -= arr[b]
                b++
            }

            if ( sum >= g ) {
                if ( i - b < e - s ) {
                    e = i
                    s = b
                }
            }

            if ( i < n ) sum += arr[i]
        }
        return e - s === n+1 ? -1 : e - s 
    }
   
   
  }
  if (process.env.USERNAME === "sy3dy") {
    runProgram(`2
    5 13
    5 1 2 3 4 
    1 10
    1
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