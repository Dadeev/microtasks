const names = ['Bob', 'Donald', 'Alex', 'alex', '007']
console.log(names.sort())

const nums = [100, 9, 66, 1000]
console.log(nums.sort())

// const compareFn = (a, b) => { // по возрастанию
// //     if (a > b) {
// //         return 1000
// //     } else {
// //         return -10
// //     }
// // }

const compareFn = (a, b) => a - b

console.log(compareFn(nums).reverse())

const students = [
    {
        name: 'Bob',
        age: 23,
        isOnline: false
    },
    {
        name: 'Alex',
        age: 23,
        isOnline: false
    },
    {
        name: 'Helge',
        age: 23,
        isOnline: false
    },
    {
        name: 'Nick',
        age: 23,
        isOnline: false
    },
    {
        name: 'John',
        age: 23,
        isOnline: false
    },
    {
        name: 'alex',
        age: 23,
        isOnline: false,
        scores: 89
    },
]
// console.log(students.sort((a,b)=> b.scores - a.scores))
// console.log(students.sort((a, b)=> a.name.localeCompare(b.name)))
console.log(students.sort((a, b) => a.name.toUpperCase() > b.name.toUpperCase() ? 1 : -1))

// bubble sort

const nums = [54, 11, 36, 323, 32, 21]

for (let j = 0; j < nums.length - 1; j++) {
    let isSorted = true;
    for (let i = 0; i < nums.length - 1 - j; i++) {
        if (nums[i] > nums[i + 1]) {
            let isSorted = false;
            // const temp = nums[i]
            // nums[i] = nums[i + 1]
            // nums[i + 1] = temp
            [nums[i + 1], nums[i]] = [nums[i], nums[i + 1]]
        }
    }
    if (isSorted) break
}

//On2