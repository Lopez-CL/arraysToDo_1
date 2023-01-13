// Push Front
// Given an array and an additional value, insert this value at the beginning of the array. You may use .push(), you are able do this without it though!

// With built in function
// const pushFront = (arr,newNum) =>{
//     arr.unshift(newNum);
//     return arr;
// }

// Sans builtin function
function pushFront(arr, newNum) {
    for (let i = arr.length; i >= 0; i--) {
        arr[i] = arr[i - 1]
    }

    arr[0] = newNum

    return arr
}
console.log(pushFront([5, 7, 2, 3], 8))


// Min to Front
// Given an array of comparable values, move the lowest element to array’s front, shifting backward any elements previously ahead of it. Do not otherwise change the array’s order. Given [4,2,1,3,5], change it to [1,4,2,3,5] and return it. As always, do this without using built-in functions.

const minToFront = (arr) =>{
    let min = arr[0]
    let idx = 0
    // let swapVal = 0
    for(let i = 0; i < arr.length; i++){
        if(min > arr[i]){
            min = arr[i]
            idx = i
        }
    }
    for(let x = idx; x > 0; x--){
        arr[x] = arr[x - 1];
        arr[x-1] = min
    }
    return arr
    // swapVal = arr[0]
    // arr[idx] = swapVal
    // arr[0] = min
}

console.log(minToFront([4,2,1,3,5]))

// // // Pop Front
// // // Given an array, remove and return the value at the beginning of the array. Prove the value is removed from the array by printing it. You may use .pop(), you are able do this without it though!

// With built in function
// // const popFront = (arr) => {
// //     let removedValue = arr.shift()
// //     console.log(arr)
// //     return removedValue;
// // }

// // console.log(popFront([0,5,10,15]))

// Sans builtin function
const popFront = (arr) => {
    const val = arr[0]
    for (let i = 0; i < arr.length; i++) {
        arr[i] = arr[i + 1]
    }
    arr.length = arr.length - 1
    console.log(arr)
    return val
}
console.log(popFront([0, 5, 10, 15]))
console.log(popFront([4, 5, 7, 9]))


// // Insert At
// With built in function
// // Given an array, index, and additional value, insert the value into array at given index. You can think of pushFront(arr,val) as equivalent to insertAt(arr,0,val). You may use .push(), you are able do this without it though!

// const insertAt = (arr,idx,val) => {
//     arr.splice(idx,0,val)
//     // console.log(arr)
//     return arr
// }
// console.log(insertAt([100,200,5], 2, 311))

// Sans builtin function
const insertAt = (arr, idx, val) => {
    for (i = arr.length; i >= idx; i--) {
        // if(i === idx){
        //     arr[i] = val
        //     return arr
        // }
        arr[i] = arr[i - 1]
        console.log(arr)
    }
    arr[idx] = val
    return arr
}
console.log(insertAt([100, 200, 5], 2, 311))


// // BONUS: Remove At
// // Given an array and an index into array, remove and return the array value at that index. Prove the value is removed from the array by printing it. Think of popFront(arr) as equivalent to removeAt(arr,0).
// With built in function
// const removeAt = (arr,idx) =>{
//     let removedValue = arr.splice(idx,1)
//     console.log(arr)
//     return removedValue;
// }

// console.log(removeAt([1000,3,204,77], 1))

// Sans builtin function
const removeAt = (arr, idx) => {
    val = arr[idx]
    for (i = idx; i < arr.length; i++) {
        arr[i] = arr[i + 1]
    }
    arr.length = arr.length - 1
    console.log(arr)
    return val
}
console.log(removeAt([1000, 3, 204, 77], 1))
console.log(removeAt([8, 20, 55, 44, 98], 3))


// // BONUS: Swap Pairs

// // Swap positions of successive pairs of values of given array. If length is odd, do not change the final element.
const swapAt = (arr) => {
    if (arr.length % 2 == 0) {
        for (let i = 0; i < arr.length; i += 2) {
            let idx1 = arr[i]
            let idx2 = arr[i + 1]
            arr[i] = idx2
            arr[i + 1] = idx1
        }
        return arr
    }
    else {
        for (let i = 0; i < arr.length - 1; i += 2) {
            let idx1 = arr[i]
            let idx2 = arr[i + 1]
            arr[i] = idx2
            arr[i + 1] = idx1
        }
        return arr
    }
}
console.log(swapAt([1, 2, 3, 4, 5, 6]))
console.log(swapAt(["Brendan", true, 42]))

// BONUS: Remove Duplicates
// Given a sorted array, remove duplicate values. Because array elements are already in order, all duplicate values will be grouped together. If you already made the Remove At function, you are welcome to use that! If you solved this using nested loops, for an extra challenge, try to do it without any nested loops!

//I'm not sure how to get this one without built in functions...

// Examples:

// removeDupes([-2,-2,3.14,5,5,10]) => [-2,3.14,5,10]
// removeDupes([9,19,19,19,19,19,29]) => [9,19,29]

const removeDupes = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i], i)
        console.log(arr[i + 1], i + 1)
        if (arr[i] === arr[i + 1]) {
            console.log(`${arr[i + 1]} is a duplicate!`)
            for (let j = i + 1; j < arr.length; j++) {
                arr[j] = arr[j + 1]
            }
            arr.length = arr.length - 1
            console.log(arr)
        }
    }
    return arr
}

// console.log(removeDupes([-2,-2,3.14,5,5,10]))
console.log(removeDupes([9, 19, 19, 19, 19, 19, 29]))