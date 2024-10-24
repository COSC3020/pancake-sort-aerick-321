function flip(array, n) {
    var tmp = [];
    if (n > array.length){
        array.reverse();
        return array;
    }
    else{
        for(let i = 0; i < n; i++){
            tmp.push(array[i]);
        }
        tmp.reverse();
        
        for(i = 0; i < n; i++){
            array[i] = tmp[i];
        }
    return array;
    }
}

// Use only flip() here to manipulate the array
function pancakeSort(array) {
    var numSort = 0;
    while(numSort != array.length){
       var high = array[0];
        var highIndex = 0;
        
        // Find the highest value in the unsorted part
        for (let i = 0; i < array.length - numSort; i++) {
            if (array[i] > high) {
                high = array[i];
                highIndex = i;
            }
        }
        
        // Flip the highest value to the front, if not already at front
        if (highIndex != 0) {
            flip(array, highIndex + 1);
        }
        
        // Now flip it into its correct position
        flip(array, array.length - numSort);
        
        numSort += 1;
    }
    return array;
}
