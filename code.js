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
        for (let i=0; i< (array.length- numSort; i++){
            if (array[i] > high) {
                high = array[i];
            }
        }
        if (high != array[0]){
            n = 0;
            while (n <= array.indexOf(high)){
                n+= 1;
                }
            flip (array, n);
            if (numSort == 0){
                flip (array, (array.length + 1));
                numSort += 1;
                }
            else {
                flip (array, (array.length - numSort));
                numSort += 1;
                }
            }
        else {
            if (numSort == 0){
                flip (array, (array.length + 1));
                numSort += 1;
            }
            else {
                flip (array, (array.length - numSort));
                numSort += 1;
            }
        }
    }
    return array;
}
