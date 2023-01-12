const strings = ['Alex', 'Donald', 'Bob', 'alex', 'юрий', 'Игорь', 1, '1']

console.log(strings.sort()); // [1, '1', 'Alex', 'Bob', 'Donald', 'alex', 'Игорь', 'юрий']

//1. сортирует строки из коробки, т.е. без доп параметров
//2. сортирует строки типа по алфавиту (в порядке таблицы юникода)
//3. работает мутабельно (сортирует на месте)
//4. возвращает ссылку на исходный массив

const numbers = [1000, 12, 254, 42]
console.log(numbers.sort()); //сортирует как строки -> [1000, 12, 254, 42]

//5. для остальных случаев, необходимо передать функцию сравнения (callback)
// "-1" не надо переставлять элементы, либо => a - b (сортирует по возрастанию)
//  "1" надо менять местами элементы, либо => b - a  (сортирует по убыванию)
const compareFunction = (a, b) => b - a
console.log(numbers.sort(compareFunction));


// reverse  - разворачивает массив

const students = [
    {
        name: 'Bob',
        age: 22,
        isMarried: true,
        scores: 89,
        isStudents: false,
    },
    {
        name: 'alex',
        age: 21,
        isMarried: true,
        scores: 89,
        isStudents: false,
    },
    {
        name: 'Nick',
        age: 20,
        isMarried: false,
        scores: 75,
        isStudents: false,
    },
    {
        name: 'john',
        age: 20,
        isMarried: false,
        scores: 100,
        isStudents: false,
    },
    {
        name: 'Helga',
        age: 24,
        isMarried: false,
        scores: 98,
        isStudents: false,
    },
];


// console.log(students.sort((a, b) => a.age - b.age));

console.log(students.sort((a, b) => //регистрозависимая функция
    a.name < b.name ? -1 : 1
));

console.log(students.sort((a, b) => //регистроНЕзависимая функция
    a.name.localeCompare(b.name)
));


//вложенная сортировка (по возрасту и по успеваемости)
console.log(students.sort((a, b) => {
    if (a.age < b.age)
        return -1
    else if (a.age > b.age)
        return 1
    else {
        a.scores < b.scores ? -1 : 1
    }
}
));


const nums = [23, 24, 1, 56, 67, 12, 3, 24, 1, 56, 67, 12,] //по возрастанию

for (let i = 0; i < nums.length-1; i++) {
    let isSorted = true
    for (let j = 0; j < nums.length -1 -i; j++) {
        if (nums[j] > nums[j+1]) {
            isSorted = false; //обязательно нужно ставит ; перед []
            [nums[j + 1], nums[j]] = [nums[j], nums[j +1]] //дестректуризрующее присваивание
            // const tmp = nums[j]
            // nums[j] = nums[j+1]
            // nums[j+1] = tmp
        }
    }
    if (isSorted) break
}

console.log(nums);


