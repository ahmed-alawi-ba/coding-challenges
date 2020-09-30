
function findNextBiggerNumber(num){
    
    let ar = num.toString().split('').map(Number);
    let i;
    let n = ar.length;
    let result = [];
    
	// search from the right, for the smaller number next to its right, we will call it 's'
    for (i = n - 1; i > 0; i--) {
        if (ar[i] > ar[i - 1]) {
            break;
        }
    }
    
    if (i == 0) {
        return -1;
    }
    else{
        
        let x = ar[i - 1];
        let min = i;


		// next, we search to the right side of the previous found digit, we look for the smallest number greater than that number 's'. we will // call it 'f'
        for (let j = i + 1; j < n; j++) {
            if (ar[j] > x && ar[j] < ar[min]) {
                min = j;
            }
        }

		// swap the previous found digits, 's' and 'f'
        swap(ar, i - 1, min);


		// we sort the digits to the right side of 'f'
        ar = sortInAscending(ar, i, n);
    }
        
    result = ar.join('');
    return result;
    
}

// swap two digits in an array
// [ar = array containing the  numbers, i = 1st number to swap, j = 2nd number to swap]
function swap(ar, i, j) {
    let temp = ar[i];
    ar[i] = ar[j];
    ar[j] = temp;
}



// to sort a sub-array in an ascending order.
//  [ar = array to sort, begin = beginning index, end = ending index]
function sortInAscending(ar, begin, end){
    let subArray = [];
    let mainArray = [];
    ar.forEach(function(item, index){
        if(index >= begin){
            subArray.push(item);
        }else{
            mainArray.push(item);
        }
    })
    
    subArray.sort((a,b)=>a-b);
    mainArray = mainArray.concat(subArray);
    return mainArray;
}











