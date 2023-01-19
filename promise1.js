//promise

const promise = new Promise((resolve, reject) => {
    if (true) {
    resolve('Stuff work');
    } else {
    reject('Errow!!!');
    }
});

const promise2 = new Promise((resolve, reject) => {
    setTimeout(resolve, 100, 'Hiii');
})

const promise3 = new Promise((resolve, reject) => {
    setTimeout(resolve, 1000, 'Pookie');
})

const promise4 = new Promise((resolve, reject) => {
    setTimeout(resolve, 3000, 'Hi, is it me you are looking for?');
})

Promise.all([promise, promise2, promise3, promise4])
.then(values => {
    console.log(values);
})

promise
.then(resul => resul + '!')
.then(resul2 => resul2 + '?')
.catch (() => console.log('Errrror!'))
.then(resu => {
    console.log(resu + '!');
})