function runProgram(input) {
    // Write code here
    input = input.trim().split('\n');
    const t = +input[0];
    let l = 1;
    
    for ( let k = 0; k < t; k++ ) {
        
        const n = +input[l++];
        const arr = input[l++].trim().split(' ').map(Number)
        const stack = [arr[n-1]]
        let ans = "-1";

        for ( let i = n-2; i >=0; i-- ) {

            ans = greaterNeighbour( stack, arr[i] ) ? `${stack[stack.length-1]} ${ans}` : `-1 ${ans}`
            stack.push( arr[i] );

        }

        console.log( ans )

    }

    function greaterNeighbour( stack, num ) {

        items = stack.length

        while ( items > 0 ) {
            if ( stack[ --items ] > num ) {
                return true
            }
            else {
                stack.pop()
            }
        }
        return false
    }
   
  }
  if (process.env.USERNAME === "sy3dy") {
    runProgram(`1
    4
    1 3 2 4`);
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