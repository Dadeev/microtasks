const todolistId_1 = '12sfq-asda2'
const todolistId_2 = 'ds6-as86'

const todolist = [
    {
        id: todolistId_1,
        title: 'What to lear',
        filter: 'all',
        // tasks: [
        //     {id: 12, title: 'JS', isDone: false},
        //     {id: 13, title: 'TS', isDone: false},
        //     {id: 14, title: 'HTML', isDone: false},
        // ]
    },
    {
        id: todolistId_2,
        title: 'What to buy',
        filter: 'all',
        // tasks: [
        //     {id: 22, title: 'Beer', isDone: false},
        //     {id: 23, title: 'Meat', isDone: false},
        //     {id: 24, title: 'Fish', isDone: false},
        // ]
    },
]

const tasks = {
    [todolistId_1]: [
        {id: 12, title: 'JS', isDone: false},
        {id: 13, title: 'TS', isDone: false},
        {id: 14, title: 'HTML', isDone: false},
    ],
    [todolistId_2]: [
        {id: 22, title: 'Beer', isDone: false},
        {id: 23, title: 'Meat', isDone: false},
        {id: 24, title: 'Fish', isDone: false},
    ]
}

// console.log(task[todolistId_1].find(t=> t.id === 12).title)  expect JS
//console.log([...tasks[todolistId_2], {id: 25, title: 'Water', isDone: false}])
//console.log(tasks[todolistId_1].map(t => t.title))

// let nums = [10, 20, 30]
// console.log(nums.reduce((acc, el) => acc + el, 0))  sum
// console.log(nums.reduce((acc, el)=> acc > el ? acc : el))  max value
// console.log(nums.reduce((acc, el)=> acc < el ? acc : el))  min value

const sts = {
    '1': {
        name: 'Bob',
        age: 32,
        isMarried: true,
        scores: 85
    },
}
// console.log(students.reduce((acc, el)=> {
//     acc[el.id] = {...el}
//     delete acc[el.id].id
//     return acc
// }), {})
// console.log(students.reduce((acc, el) => acc + el.scores), 0)