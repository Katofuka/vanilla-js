//promise - объект с ключевым свойством- обещание
//у propmise (объекта) есть три status: panding(fullfield), resolved, rejected
//new Promise
// let a = {} //new Object()
// let b = [] //new Array
//<User /> // new User({props})
// let c = () => {} // new Function

let pr = new Promise((resolve, reject) => {
    setTimeout(() => { resolve(5 + 3); }, 3000)


}); //обязательна callback function

// pr
// .then(val => console.log(val))


// const axios = {
//     get() {
//         return new Promise((resolve, reject) => {
//             setTimeout(() => {
//                 resolve({
//                     d: 14,
//                     js: 23,
//                     message: 'yopta'
//                 });
//                 // reject('yoyooy')
//             }, 3000)
//         });
//     }
// }

// axios.get()
// .then((val) => val.message )
// .then((val) => console.log(val))


const fetch = (url) => new Promise((res, rej) => {
        switch (url) {
            case 'google': {
                setTimeout(() => {
                    res({ data: 'from Google' })
                }, 3000)
                break;
            }
            case 'microsoft': {
                setTimeout(() => {
                    res({ data: 'from Microsoft' })
                }, 1000)
                break;
            }
            case 'it-kamasutra': {
                setTimeout(() => {
                    res({ data: 'from it-kamasutra' })
                }, 500)
                break;
            }
        }
    })



// fetch('microsoft')
//     .then((data) => {
//         console.log('first then: ', data)
//         return fetch('google')
//     })
//     .then((data) => {
//         console.log('second then: ', data)
//         return fetch('it-kamasutra')
//     })
//     .then((data) => {
//         console.log('third then: ', data)
//     })


///await дожидается когда придёт ответ и возвращает resolve-результат
let makeRequests = async () => {
    let data = await fetch('microsoft')
    console.log('async-await: ', data);
    data = await fetch('google')
    console.log('async-await: ', data);
    data = await fetch('it-kamasutra')
    console.log('async-await: ', data);

}

// makeRequests()

let makeRequestsAtTheOneMoment = async() => {
    // const p1 = fetch('microsoft')
    // const p2 = fetch('google')
    // const p3 = fetch('it-kamasutra')
    //Promise.all([p1, p2, p3])

    const promises = [
        fetch('microsoft'),
        fetch('google'),
        fetch('it-kamasutra')
    ]
    // Promise.all(promises)
    //     .then((data) => {
    //         console.log('that good ')
    //         data.map(val => console.log(val.data))
    //     })
    const data = await Promise.all(promises)
    data.map(val => console.log(val.data))
}
makeRequestsAtTheOneMoment()