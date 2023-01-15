//создаётся globalLE(ссылка никуда не ссылается ) {name: undefined} --> null

//Замыкания
//лексическое окружение
//напрямую нет доступа, с ним работает движок
const le = {
    someObj: {

    },
    outerLe: null       //ссылка на внешнее лексическое окружение

}
//le {} -> другой объект 
//создаётся для функций  и блоков кода (кроме объектов). Объект не создаёт лексического окружения

// function Declaration -> function () {} - может вызываться до объявления
// function Expression -> const tmp = () => - может вызываться только после объявления

const foo = () => {
    //[[Environment]] -- [[скрытые свойства объекта]] -- ссылка на внешнее лексическое окружение (global LE)
    
}


//рекурсия