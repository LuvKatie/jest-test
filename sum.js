function sum(a, b) {
    return a + b;
}

function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

function reverse(str) {
    let strSplit = str.split("");
    let newStr = "";
    for (let i = (strSplit.length - 1); i >= 0; i--) {
        newStr += strSplit[i]
    }
    
    return newStr;
}

const calculator = {
    add: function(a, b ) {
        return a + b;
    },
    subtract: function(a, b) {
        return a - b;
    },
    divide: function(a, b) {
        return a / b;
    },
    multiply: function (a, b) {
        return a * b;
    }
}

let caesarStr = "";

function caesarCipher(str) {
    let newStr = str.split("");

    for (let i = 0; i < 27; i++) {
        let random = Math.floor(Math.random() * newStr.length);
        let random2 = Math.floor(Math.random() * newStr.length);
        let randomChar1 = newStr[random];
        let randomChar2 = newStr[random2];

        if(randomChar1 == randomChar2) {
            continue;
        } else {
            newStr[random] = randomChar2;
            newStr[random2] = randomChar1;
        }
    }
    caesarStr = newStr.join();
    checkCaesar(newStr.join());
}

function checkCaesar(str) {
    str == caesarStr ? str : false;
}

module.exports = {
    sum,
    capitalize,
    reverse,
    calculator,
    caesarCipher,
    checkCaesar
}