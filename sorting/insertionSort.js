const arr = [ 2, 1, 9, 76, 4 ]

// console.log( arr )


console.log(insertionSort( arr ))

function insertionSort ( arr ) {

    for ( let i = 1; i < arr.length; i++ ) {

        let currentVal = arr[i]
        for ( var j = i-1; j >= 0 && arr[j] > currentVal; j-- ) {
            arr[j+1] = arr[j]
        }
        // console.log( 'j : ' + j + ' j + 1 : ' + (j+1) )
        arr[j+1] = currentVal
        // console.log( arr )
    }

    return arr 
}
