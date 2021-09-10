function runProgram(input) {
    // Write code here
    input = input.trim().split('\n')
    const n = +input[0]
    const arr = input[1].trim().split(' ').map(Number)

    const left = new Array(n).fill(false), right = new Array(n).fill(false)
    let max = arr[0], min = arr[n-1], i

    for ( i = 1; i < n-1; i++ ) {
        if ( arr[i] >= max ) {
            left[i] = true
            max = arr[i]
        }
        
        if ( arr[n-1-i] <= min ) {
            right[n-1-i] = true
            min = arr[n-1-i]
        }
    }

    for ( i = 1; i < n-1; i++ ) {
        if ( left[i] && right[i] ) {
            console.log( arr[i] )
            break
        }
    }
    
    i === n-1 && console.log( -1 )
   
  }
  if (process.env.USERNAME === "sy3dy") {
    runProgram(`5
    4 3 9 7 8`);
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