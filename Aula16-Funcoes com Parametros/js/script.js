function parimp(n) {
    if (n % 2 == 0) {
        return `${n} > par`;
    } else {
        return `${n} > impar`;
    }
}

// console.log(parimp(10));

function soma(n1=0, n2=0) {
    let res = n1 + n2;
    return `${n1} + ${n2} = ${res}`;
}

// console.log(soma(3, 5));

let funct = function(x) {
    return x*2;
}

console.log(funct(2));