
const multiplyBy = function(num1) {
    return function(num2) {
        return num1 * num2;
    }
}

const multiplyByTwo = multiplyBy(2);
multiplyByTwo(6);

const multiply = (num1) => (num2) => num1 * num2;
const multiplyFive = multiply (5);
multiplyFive(6);


const boo = (string) =>(name) =>(name2) =>
        console.log(` ${string} ${name} ${name2} `);

boo("Hi ")("Tim")("Becca");    

function callMeMaybe() {
    let callMe = "Hi, there! Call me now!";
    setTimeout(function() {
        console.log(callMe);
    }, 4000);
}

callMeMaybe();

const makeNucButton = () => {
    let timeWithoutDestruction = 0;
    const passTime = () => timeWithoutDestruction++;
    const totalPieceTime = () => timeWithoutDestruction;
    const  launch = () => {
        timeWithoutDestruction = -1;
        return "BigBoom"};
    setInterval(passTime, 1000);

    return {
        totalPieceTime: totalPieceTime,
    }
}
const ohno = makeNucButton();
ohno.totalPieceTime;