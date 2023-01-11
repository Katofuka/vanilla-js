const students = [
    {
        name: 'Bob',
        age: 22,
        isMarried: true,
        scores: 85,
        isStudents: false,
    },
    {
        name: 'Alex',
        age: 21,
        isMarried: true,
        scores: 89,
        isStudents: false,
    },
    {
        name: 'Nick',
        age: 20,
        isMarried: false,
        scores: 120,
        isStudents: false,
    },
    {
        name: 'John',
        age: 19,
        isMarried: false,
        scores: 100,
        isStudents: false,
    },
];

const todoListId1 = 'qe22-das2'
const todoListId2 ='jg21-afa5'
const todoLists = [
    {
        id: todoListId1,
        title: 'What to learn',
        folter: 'all',
    },
    {
        id: todoListId2,
        title: 'What to by',
        folter: 'all',
    },
]

//ассоциативный массив (объект)
const tasks = {
    [todoListId1]: [                //'qe22-das2'
        { name: 'HTML', isDone: true },
        { name: 'CSS', isDone: true },
    ],
    [todoListId2]: [                //'jg21-afa5'
        { name: 'Beer', isDone: false },
        { name: 'Fish', isDone: false },
    ],
}

const tasks1 = tasks[todoListId1]
console.log(tasks1);


//reduce (свёртывание, скукоживание)

const numbers = [1, 2, 12, 12, 312, 6]
console.log(numbers.reduce((acc, el)=>{         //накий аккумулятор, елемент массива
    
    return acc + el

}, ));         //стартовое значение аккумулятора (по умолчанию - первый элемент массива)

console.log(numbers.reduce((acc, el)=>{         //накий аккумулятор, елемент массива
    
    return acc > el ? acc : el

}, ));         //стартовое значение аккумулятора (по умолчанию - первый элемент массива)


//аналог метода filter
console.log(students.reduce((acc, el) => {
    if(el.scores >= 100){
        console.log(el.scores);
        acc.push(el)
    }
    return acc
}, [] )); 

//аналог метода map
console.log(students.reduce((acc, el) => {
    const copyStudents = {...el}
    copyStudents.scores = copyStudents.scores+10
    acc.push(copyStudents)
    return acc
    
}, [])); 


const selfMadeReduce = (array, func, startValue) => {
    let acc = startValue
    for(let i = 0 ; i <  array.length ; i++) {
        acc = func(acc, array[i])
    }
    return acc
}

console.log(selfMadeReduce(numbers, (acc, el) => acc * el, 1));


console.log(selfMadeReduce(students, (acc, el) => {
    const copyStudents = {...el}
    copyStudents.scores = copyStudents.scores+10
    acc.push(copyStudents)
    return acc
    
}, []));

