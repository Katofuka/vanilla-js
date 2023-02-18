//Каррирование - метод который позволяет вызывать частями
function sum(a, b, c) {
    return a + b + c
}

function milti(a, b, c) {
    return a * b * c
}

function curry(callback) {
    return function curryed(...args) {
        console.log('args: ', args)
        if (args.length === callback.length) {
            return callback.apply(this, args)
        }
        return curryed.bind(this, ...args)
    }
}

const curryedSum = curry(sum)



// console.log(curryedSum(2,3,4)) //9
// console.log(curryedSum(5,6)(7)) //18
// console.log(curryedSum(8)(1)(2)) //27


const scoreCount = (name) => {
    let score = 0
    return function () {
        console.log('in function score', name, score)
        score++
        return `${name} ${score}`
    }

}

const playerOne = scoreCount('Irina')
const playerTwo = scoreCount('Larisa')

playerOne()
playerOne()
playerOne()
console.log(playerOne())  //4

playerTwo()
playerTwo()
playerTwo()
playerTwo()
playerTwo()
console.log(playerTwo())  //6