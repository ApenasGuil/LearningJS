let num = [5, 8, 2, 9, 3];
num.push(1);
num.sort();
console.log(num);
//console.log(`O vetor tem ${num.length} posições.`);
//console.log(`O primeiro valor do vetor é ${num[0]}.`);

/*for(let i = 0; i <= num.length; i++){
    console.log(`Vetor[${i}] é ${num[i]}`);
}

for(let i in num){
    console.log(`Vetor[${i}] é ${num[i]}`);
}*/

// Buscar valores num Vetor

let index = num.indexOf(2);
console.log(index);