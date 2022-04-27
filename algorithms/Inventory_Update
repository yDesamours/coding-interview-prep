

function updateInventory(arr1, arr2) {
    const curInv = arrayToObject(arr1)
    const newInv = arrayToObject(arr2)
    let result = {}

    result = objectToArray(merge(curInv, newInv))

    return sort(result)
}

//this function converts an array wich elements are 2 dimensional array into an object
function arrayToObject(arr){
    let obj = {}

    obj = arr.reduce((acc, cur) => {
        acc[cur[1]] = cur[0]
        return acc
    },
    {}
    )
    return obj
}

//this function converts an objet into an array wich elements are 2 dimensional arrays
function objectToArray(obj){
    let entries = Object.entries(obj), result = [];

    result= entries.map(c => {
        const [first, second] = c

        return [second, first]
    })

    return result
}

/*this function merge 2 object. If the two objects have common keys, it sums their values. Finally, it adds entry that are present into the second
object but are missing into the first*/
function merge(obj1, obj2){
    const keys1 = Object.keys(obj1)
    const keys2 = Object.keys(obj2)

    const result = {...obj1}

    keys2.forEach(c => {
        if(keys1.includes(c))
            result[c] += obj2[c]
        else
            result[c] = obj2[c]
    })

    return result
}

//this function sort the array based on the second value of each element
function sort(arr){
    return arr.sort((a, b)=> a[1] < b[1] ? -1 : 1)
}
