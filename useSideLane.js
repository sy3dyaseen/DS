function runProgram(input) {
    // Write code here
    input = input.trim().split('\n')
    let l = 0
    let n = 1
    while ( n !== 0 ) {

        let n = +input[l++]
        if ( n == 0 ) break
        const arr = input[l++].trim().split(' ').map(Number)
        let count = 1
        const s = [] 

        for ( let i = 0; i < n; i++ ) {
            
            if ( arr[i] === count ) {
            
                ++count
                while ( s.length != 0 && s[s.length-1] === count ) {
                    s.pop()
                    count++
                }
                
            }
            else {
                s.push( arr[i] )
            }
       
        }
        count--
        console.log( count === n ? 'yes' : 'no' )
    }
   
  }
  if (process.env.USERNAME === "sy3dy") {
    runProgram(`5
    5 1 2 4 3 
    0`);
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