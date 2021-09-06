function runProgram(input) {
    // Write code here
    input = input.trim().split('\n')
    const t = +input[0]
    for ( let i = 1; i <= t; i++ ) {
        const [ a, b ] = input[i].trim().split(' ').map(Number)
        console.log( isaTobPossible( a, b ) ? 'Possible' : 'Not Possible' )
    }

    function isaTobPossible( a, b ) {
        if ( a === b ) return true
        if ( a > b ) return false
        return isaTobPossible( a * 2, b ) || isaTobPossible( Number( a + '1' ), b )
    }
   
  }
  if (process.env.USERNAME === "sy3dy") {
    runProgram(`4
    6 242
    3 3
    6 3
    10 30`);
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