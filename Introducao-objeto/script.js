let amigo = {
    nome: 'Guil',
    idade: 23,
    sexo: 'M',
    peso: 51.0,
    engordar(p=0){
        console.log('Engordou');
        this.peso += p;
    }
}

amigo.engordar(0.8);
console.log(`${amigo.nome} pesa ${amigo.peso}Kg`);