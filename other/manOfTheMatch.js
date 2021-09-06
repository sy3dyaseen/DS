function runProgram(input) {
    // Write code here
    input = input.trim().split('\n')
    const t = +input[0]

    for ( let k = 0, l = 1; k < t; k++ ) {
        
        const n = +input[l++]
        const runs = input[l++].trim().split(' ').map(Number)
        let virat = 0, ab = 0, batting = true
    
        for ( let i = 0; i < 6*n; i++ ) {

            batting ? ab += runs[i] : virat += runs[i]
            
            if ( runs[i] % 2 !== 0 ) batting = !batting
            if ( (i+1) % 6 === 0 ) batting = !batting
           
        }
        console.log( ab === virat ? 'Tie' : ab > virat ? 'AB de Villiers' : 'Virat Kohli' )
    }
   
  }
  if (process.env.USERNAME === "sy3dy") {
    runProgram(`3
    2
    1 2 0 0 1 1 6 6 4 1 6 1
    3
    0 0 0 0 0 1 0 0 0 0 1 1 6 6 6 1 4 4
    1
    0 1 0 1 0 0`);
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