/*
Given an array arr, find element pairs whose sum equal the second argument arg and return the sum of their indices.

You may use multiple pairs that have the same numeric elements but different indices. Each pair should use the lowest possible available indices. 
Once an element has been used it cannot be reused to pair with another element. For instance,
pairwise([1, 1, 2], 3) creates a pair [2, 1] using the 1 at index 0 rather than the 1 at index 1, because 0+2 < 1+2.

For example pairwise([7, 9, 11, 13, 15], 20) returns 6. The pairs that sum to 20 are [7, 13] and [9, 11]. We can then write out the array 
with their indices and values.
*/

function pairwise(arr, arg) {
  const used = []

  arr.forEach((_, i) => {
    console.log(i)
    if(used.includes(i))
      return 

    let match = firstIndexNotUsed(used, arr, arg, i)

    if(match){
        used.push(+match, i)
      }
  })

  return used.reduce((acc, cur) => acc + Number(cur), 0)
} 

function firstIndexNotUsed(used, arr, arg, cur){
  for(let i in arr){
    if(i == cur)
      continue

    if((arr[i] + arr[cur]) == arg)
      if(!used.includes(Number(i)))
        return i
        
  }
  return null

}   
