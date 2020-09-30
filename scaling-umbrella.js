function unfold2DArray(array){
  let sorted = [];
	
  while(array.length){
	  
	// take the first row/array in the 2d array  
    sorted.push(...array.shift())
	  
	// take the last column in each array
    for(let i=0; i<array.length; i++){
      sorted.push(array[i].pop())
    }
	  
	// taking the last row, but from the right, thus using reverse()  
    sorted.push(...(array.pop() || []).reverse())
	  
	// taking the first column in each array
    for(let i=array.length-1; i>=0; i--){
      sorted.push(array[i].shift())
    }
  }
	
  return sorted
}