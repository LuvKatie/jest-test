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

module.exports = {
    sum,
    capitalize,
    reverse,
    calculator,
}