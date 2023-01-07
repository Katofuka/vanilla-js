//types of data in js
//string, number, boolean, null, undefined, NaN
//Bigint, Symbol, Infinity
//object (object, array, function)

//ПРИМИТИВЫ
//Объект в отличии от примитива представляет собой ссылочный тип данных
const num1 = 5
const num2 = num1



//ОБЪЕКТЫ (ссылочный тип данных)
//Литерал - набор печатных символов
//это не объект, это команда на создание объекта . Объект будет создан в оперативной памяти
//ссылка "user1" будет хранить адрес ячейки памяти (ссылку на объект)
const user1 = {
    name: 'Bob',
    age: 14
}

//'user2' будет хранить ссылку на 'user1'
const user2 = user1

//ОПРЕДЕЛЕНИЕ ТИПОВ ДАННЫХ
console.log(typeof 'string');

console.log(typeof null);   //object

console.log(typeof NaN);    //number
console.log(Number.isNaN(15));    //false
console.log(Number.isNaN(NaN));    //true

console.log('is array: ', Array.isArray([]));
console.log(typeof {});
console.log('is Infinity: ', Number.isFinite(Infinity) ); //бесконечность - isFinite (оно конечно?) 


//immutability - иммутабельный тип данных
//если есть объект - 
// 1) создать копию, 
// 2) вносим изменения в копию
// 3) используем копию

const copyUser = {...user1} //sprad operator - распределяющий оператор
console.log(copyUser);
console.log(copyUser === user1); //false


const array = [1, 2, 3, 4, 5]
console.log([...array, 6]);



//глубокое копирование
const student = {
    name: 'Bob',
    age: 23,
    friends: ['Ann', 'Helge', 'Versavia']
}

const deepCopyStudent = {...student, name: 'Samuel', friends: [...student.friends, 'Lera']}
console.log(student);
console.log(deepCopyStudent);





