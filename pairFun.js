function runProgram(input) {
    // Write code here
    input = input.trim().split('\n')
    const t = +input[0]

    for ( let k = 0, l = 1; k < t; k++ ) {
        l++
        const arr = input[l++].trim().split(' ').map(Number)
        const occ = {}
        const set = {}
        let pairs = 0

        for ( i of arr ) {
            occ[i] = ++occ[i] || 1
        }

        for ( i in occ ) {

            if ( i === '0' ) {
                
                if ( occ['0'] > 1 ) {
                    if ( occ['0'] == 2 ) {
                        pairs += 1
                    }
                    else {
                        pairs += ( occ['0'] * ( occ['0'] - 1) ) / 2
                    }
                }
            }
            else {

                let x = (5/4)*( +i )
                let y = (4/5)*( +i )
    
                if ( set.hasOwnProperty(x) ) {
                    pairs += occ[i] * occ[x]
                }
                else if ( set.hasOwnProperty(y) ) {
                    pairs += occ[i] * occ[y]
                }
                else {
                    set[i] = 1
                }
            }
        }
        
        console.log( pairs )
    }
   
  }
  if (process.env.USERNAME === "sy3dy") {
    runProgram(`2
    6
    5 5 5 4 4 4
    3
    0 0 0`);
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