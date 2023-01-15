let age = 18            //примитив
let age2 = age          //копия примитива тоже примитив, содержит значение 18

let a = {
    name: 'it-kamasutra',
    protocol: 'https',
    isOnline: true,
    students: ['ivan', 'andrey','farid'] ,
    classRoom: {
        teacher: {
            name: 'new',
            age: 18
        }
    }
}

//{}, [] - объекты

let b = a // а - является ссылкой на объект, b - содержит ссылку на объект a
console.log(a === b); true
console.log( b.name === a.name);    true

//скопировать объект 
//ПОВЕРХНОСТНОЕ КОПИРОВАНИЕ
var d = {...a}; //копируется структура объекта, и его примитивы, вложенные объекты "d" всё также ссылаются на вложенные объекты "a"
d.name = 'it-incubator'
console.log(a.name, d.name); //it-kamasutra, it-incubator

d.students.push('anna')
console.log(a.students, d.students); //['ivan', 'andrey','farid', 'anna'] ['ivan', 'andrey','farid', 'anna']

//ГЛУБОКОЕ КОПИРОВАНИЕ
d.students = [...a.students]
d.classRoom = {...a.classRoom}
d.classRoom.teacher = {...a.classRoom.teacher}

d.students.push('leonid')
console.log(a.students, d.students); //['ivan', 'andrey','farid', 'anna'] ['ivan', 'andrey','farid', 'anna', 'leonid']


console.log( d === a);    //false
//примитивы сравниваются по значению
console.log( d.isOnline === a.isOnline);    //true
