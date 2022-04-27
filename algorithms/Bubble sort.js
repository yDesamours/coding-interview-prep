/*
  The bubble sort method starts at the beginning of an unsorted array and 'bubbles up' unsorted values towards the end, 
  iterating through the array until it is completely sorted. It does this by comparing adjacent items and swapping them if they are out of order. 
  The method continues looping through the array until no swaps occur at which point the array is sorted.
*/

function bubbleSort(array) {
  let len = array.length

  let result = [...array]

  for(let i = 0 ; i < len ; i++){
      for(let j = 0 ; j < len - 1 - i ; j++)
        if(result[j]>result[j+1]){
          [ result[j], result[j+1]]= [result[j+1], result[j]]
        }
    }
  
  return result
}
