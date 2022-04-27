/*
Selection sort works by selecting the minimum value in a list and swapping it with the first value in the list. 
It then starts at the second position, selects the smallest value in the remaining list, and swaps it with the second element. 
It continues iterating through the list and swapping elements until it reaches the end of the list.
*/
function selectionSort(array) {
  const result = [...array], len = array.length

  for(let i = 0 ; i < len - 1 ; i++ ){
    let min = result[i]

    for(let j = i + 1; j < len; j++ ){
      if(result[j] < min){
        min = result[j]
        result[j] = result[i]
        result[i] = min
        
      }
    }
  }
  return result
}
