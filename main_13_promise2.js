
// //промисифкация
// let doAfter = (sec) => new Promise((resolve, reject) => {

//     setTimeout(() => {
//         resolve('привет, я ответ промиса');
//     }, sec * 1000)

// })

// doAfter(5).then(() => {
//     console.log('я сработал через 5 секунд');
// })

// doAfter(3).then(() => {
//     console.log('я сработал через 3 секунды');
// })

// doAfter(10).then(() => {
//     console.log('я сработал через 10 секунд');
// })


// //промисифкация
// let doAfter = (sec) => new Promise((resolve, reject) => {

//     setTimeout(() => {
//         // resolve('привет, я ответ промиса');
//         //то что первое resolve или reject то и выполнится
//         reject('я выполнился с ошибкой');
//         resolve('ecgtiyjt dsgjkytybt ghjvbcf')        

//     }, sec * 1000)

// })

// const promise3 = doAfter(3)

// promise3
// .then(() => {
//     console.log('и я');
// })
// .catch((err)=>{
//     console.log(err);
// })

// promise3
// .then(() => {
//     console.log('и я');
// })

const vacansies = {
    _microsoftStudents: 15,
    _googleVacancies: 41,
    _itKamasutraVacancies: 0,
    getVacanciesCountFromMicrosoft() {
        return this._microsoftStudents;
    },
    getVacanciesCountFromGoogle() {
        return this._googleVacancies;
    },
    sendStudentsCountToItKamasutra(count = 0) {
        this._itKamasutraVacancies = count
    }
}

let api = {
    _microsoftStudents: 15,
    _googleVacancies: 41,
    _itKamasutraVacancies: 0,
    getVacanciesCountFromMicrosoft() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(this._microsoftStudents)
            }, 3000)
        })
    },
    getVacanciesCountFromGoogle() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(this._googleVacancies)
            }, 2000)

        })
    },
    sendStudentsCountToItKamasutra(count) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(this._itKamasutraVacancies = count)
            }, 1000)

        })
    }
}

const pr1 = async()=>{
    const vM = await api.getVacanciesCountFromMicrosoft()
    const vG = await api.getVacanciesCountFromGoogle()
    const vK = await api.sendStudentsCountToItKamasutra(vM + vG)
    console.log(vK);
}
pr1()

        

// const pr2 = api.getVacanciesCountFromGoogle()
//     .then(data => {
//         console.log('google: ', data);
//         return data
//     });

// Promise.all([pr1, pr2]).then((res) => {
//     api.sendStudentsCountToItKamasutra(res[0] + res[1])
//         .then(data => {
//             console.log('goToKamasutra: ', data);
//         });
// })

