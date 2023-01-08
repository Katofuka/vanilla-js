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

const getStudentsNames = (array) => {
    return array.map(el => el.name)
}

const getStudentsScores = (array) => {
    return array.map(el => el.scores)
}

const getStudents = (array) => {
    return array.map(el => { return { ...el, isStudents: true } })
}

const getOldStudents = (array) => {
    return array.filter(el => el.age >= 21)
}

const addElToEndOfArray = (arr, num) => {    
    arr[arr.length] = num    
    return arr.length
}
//map
console.log(getStudentsNames(students));
console.log(getStudentsScores(students));
console.log(getStudents(students));

//filter
console.log(getOldStudents(students));

console.log(students);

const arr = [2,4,8]


console.log(addElToEndOfArray(arr, 10));

