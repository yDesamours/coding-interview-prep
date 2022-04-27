/*Return the number of total permutations of the provided string that don't have repeated consecutive letters. 
Assume that all characters in the provided string are each unique.

For example, aab should return 2 because it has 6 total permutations (aab, aab, aba, aba, baa, baa), 
but only 2 of them (aba and aba) don't have the same letter (in this case a) repeating.*/

function permute(str) {
  let a = []

  if(str.length === 1)
    return str
  else{
    [...str].forEach((c, i) => {
      let others = str.slice(0, i) + str.slice(i+1) 
       a.push(distribute(c , permute(others)))

      }
    )
  }  
  return deep(a)
}

function distribute(char, str){
  if(Array.isArray(str))
    return str.map(c => char + c)

  return char + str
}

function deep(arr){
  let c = []  

  function go(arr){
    arr.map(e => {
    if(Array.isArray(e))
      go(e)
    else
      c.push(e)
  })
  }

  go(arr)

  return c
}

function check(str){
  return str.split('').every((c, i)=> c !== str[i+1])
}

function permAlone(str){
  let allPerm = permute(str)
  
  if(allPerm.length == 1 )
    return 1

  let noRepeat = allPerm.filter(check)

  return noRepeat.length
}

let b = permute('a');
