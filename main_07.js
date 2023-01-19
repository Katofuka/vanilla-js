//1. Реализуйте функцию, которая принимает параметром подсторку, число повторов и разделитель, а возвращает сторку, состоящую из указанного количества повторов подстроки с использованием разделителя.
const repeatString = (strng, num, subStr) => {
    let newStr = strng
    for (let i = 0; i < num - 1; i++) {
        newStr += subStr + strng
    }
    return newStr
}

console.log('1 ', repeatString("yo", 3, " "));//=> "yo yo yo"
console.log('1 ', repeatString("yo", 3, ",")); //=> "yo,yo,yo"
// for или str.repeat()


//**2. Реализуйте функцию, которая принимает параметром сторку и подстроку, а возвращает true, если строка начинается с указанной подстроки, в противном случае - false. Регистр не учитывается.
const checkStart = (strng, subStr) => {
    return strng.toLowerCase().startsWith(subStr)
}
console.log('2 ', checkStart("Incubator", "inc")); // => true
console.log('2 ', checkStart("Incubator", "yo")); // => false
//console.log(str.startWith()); // slice indexOF


//**3. Реализуйте функцию, которая принимает параметром строку и число (количество символов), а возвращает строку из параметров, обрезанную до указанного количества символов и завершает её многоточием.
const truncateString = (strng, col) => {
    return strng.substr(0, col) + '...'
}
console.log('3 ', truncateString("Всем студентам инкубатора желаю удачи!", 10)); //=> "Всем студе..."

//**4. Реализуйте функцию, которая принимает параметром сторку (предложение) и возвращает самое короткое слово в предложении, если в параметрах пустая строка, то возвращает null.
const getMinLengthWord = (strng) => {
    if (strng) {
        const arr = strng.split(" ").sort((a, b) => a.length < b.length ? -1 : 1)
        return arr[0]
    }
    return null
}

console.log('4 ', getMinLengthWord("Всем студентам инкубатора желаю удачи!")) //=> "Всем"
console.log('4 ', getMinLengthWord("")) //=> null
// split()


//5. Реализуйте функцию, которая принимает параметром сторку (предложение) и возвращает то же предложение, где все слова написаны строчными, но начинаются с заглавных букв.
const setUpperCase = (strng) => {
    const newStr1 = strng.toLowerCase().split(" ");
    const newStr2 = newStr1.map(it => it.charAt(0).toUpperCase() + it.slice(1)).join(' ')
    return newStr2
}
console.log('5 ', setUpperCase("всем стУдентам инкуБатора Желаю удачИ!")); //=> "Всем Студентам Инкубатора Желаю Удачи!"

// !!!!!!!!!!!!!!!!!!После решения 5 задач - поднимаем руку!!!!!!!!

//6. Реализуйте функцию, котрая принимает параметрами строку и подстроку. Если все
// символы подстроки содержаться в стороке - возвращает true, если нет -
// возвращает false. Проверка проводится без учёта регистра и без учётом
// повторяющихся символов.
//* попробовать учитывать повтор символов в подстроке
const isIncludes = (string, subString) => {
    const newSubString = Array.from(new Set(subString.toLowerCase().split(''))).sort()
    const newString = Array.from(new Set(string.toLowerCase().split(''))).sort()
    let iter = 0
    for (let it = 0; it < newSubString.length; it++) {
        for (let i = 0; i < newString.length; i++) {            
            newSubString[it] === newString[i] ? iter = iter + 1 : iter
        }
    }
    return iter === newSubString.length



}
// isIncludes("Incubator", "Cut") // => true
// isIncludes("Incubator", "table") // => false
// isIncludes("Incubator", "inbba") // => true
// isIncludes("Incubator", "inba") // => true
// isIncludes("Incubator", "Incubatorrr") //=> true

console.log('6 ', isIncludes("Incubator", "Cut"))// => true
console.log('6 ', isIncludes("Incubator", "table")) // => false
console.log('6 ', isIncludes("Incubator", "inbba")) // => true
console.log('6 ', isIncludes("Incubator", "inba")) // => true
console.log('6 ', isIncludes("Incubator", "Incubatorrr")) //=> true