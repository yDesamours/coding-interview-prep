/*
The mathematical term symmetric difference (△ or ⊕) of two sets is the set of elements which are in either of the two sets but not in both. 
For example, for sets A = {1, 2, 3} and B = {2, 3, 4}, A △ B = {1, 4}.

Create a function that takes two or more arrays and returns an array of their symmetric difference.
The returned array must contain only unique values (no duplicates).
*/

function sym(...args) {
  return args.reduce(diff, [])
}

function diff(a1, a2){
  let result1 = [], result2 = []

  result1 = a1.reduce((acc, cur)=>{
    if(!acc.includes(cur) && !a2.includes(cur))
      return acc.concat(cur)
    else
      return acc
  },
  []
  ) 

  result2 = a2.reduce((acc, cur)=>{
    if(!acc.includes(cur) && !a1.includes(cur))
      return acc.concat(cur)
    else
      return acc
  },
  []
  ) 

  return [...result1, ...result2]
}
