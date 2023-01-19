// Callback Queue
setTimeout(() => {console.log('1' , 'is the lonliest number')}, 0);
setTimeout(() => {console.log('2', 'is not that much lonely')}, 10);

//Job Queue
Promise.resolve('hi').then((data) => console.log('2', data));

//3
console.log('3', 'is a crowd');





