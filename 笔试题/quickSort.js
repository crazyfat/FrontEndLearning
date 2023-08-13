// function quickSort(nums){
//     if(nums.length<=1) return nums
//     const pivot = nums[0]
//     let left = [], right = []
//     for(let i = 1; i<nums.length; i++){
//         if(nums[i]<pivot) left.unshift(nums[i])
//         else right.push(nums[i])
//     }
//     return quickSort(left).concat([pivot], quickSort(right))
// }
// let arr = [9,5,7,2,37,788,6]
// console.log(quickSort(arr))
//
//
// function quickSort2(arr, left, right){
//     let index
//     index = partition(arr, left, right)
//     if(left < index-1)
//         quickSort2(arr, left, index-1)
//     if(index < right)
//         quickSort2(arr, index, right)
// }
// function partition(arr, left, right){
//     let pivot = arr[Math.floor((left+right)/2)]
//     while(left <= right){
//         while(arr[left]<pivot) left++
//         while(arr[right]>pivot) right--
//         if(left<=right){
//             [arr[left], arr[right]] = [arr[right], arr[left]]
//             left++
//             right--
//         }
//     }
//     //console.log(left)
//     return left
// }
// let arr = [9,5,7,2,37,788,6]
// quickSort2(arr, 0, arr.length-1)
// console.log(arr)

// function qs(arr, left, right){
//     let index = partition(arr, left, right)
//     if(left<index-1) qs(arr, left, index-1)
//     if(index+1<right) qs(arr, index+1, right)
// }
// function partition(arr, left, right){
//     let pivot = arr[Math.floor(left/2+right/2)]
//     while(left<=right){
//         while(arr[left]<pivot) left++
//         while (arr[right]>pivot) right--
//         if(left<=right){
//             [arr[left], arr[right]] = [arr[right], arr[left]]
//             left++
//             right--
//         }
//     }
//     return left
// }
// let arr = [9,5,7,2,37,788,6]
// qs(arr, 0, arr.length-1)
// console.log(arr)

function qs(arr, left, right){
    let index = partition(arr, left, right)
    if(left<index-1) qs(arr, left, index-1)
    if(index<right) qs(arr, index, right)//这个地方格外注意
}
function partition(arr, left, right){
    let pivot = arr[Math.floor(left/2+right/2)]
    while(left<=right){
        while(arr[left]<pivot) left++
        while(arr[right]>pivot) right--
        if(left<=right){
            [arr[left], arr[right]] = [arr[right], arr[left]]
            left++
            right--
        }
    }
    return left
}
let arr = [3,5,78,213,4,3,1,32,23,4,2,7,34]
qs(arr, 0, arr.length-1)
console.log(arr)