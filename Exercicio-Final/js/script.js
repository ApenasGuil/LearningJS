let num = document.querySelector('input#fnum');
let lista = document.querySelector('select#flista');
let res = document.querySelector('div#res');
let valores = [];

function isNumero(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true;
    } else {
        return false;
    }
}

function inLista(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true;
    } else {
        return false;
    }
}

function adicionar() {
    if (isNumero(num.value) && !inLista(num.value, valores)) {
        valores.push(Number(num.value));
        let item = document.createElement('option');
        item.text = `Valor ${num.value} adicionado.`;
        lista.appendChild(item);
        res.innerHTML = '';
    } else {
        window.alert('Valor inválido ou já encontrado na lista.');
    }

    num.value = '';
    num.focus();
}

function finalizar() {
    if (!valores.length == 0) {
        let tot = valores.length;
        let maior = valores[0];
        let menor = valores[0];
        let soma = 0;
        let media = 0;
        let ordem = valores.sort();

        for(let i in valores) {
            soma += valores[i];
            media = soma / tot;
            if (valores[i] > maior) {
                maior = valores[i];
            }
            if (valores[i] < menor) {
                menor = valores[i];
            }
        }

        res.innerHTML = '';
        res.innerHTML += `<p>Ao todo, temos <strong>${tot}</strong> números cadastrados.</p>`;
        res.innerHTML += `<small>Números: ${ordem}.</small>`;
        res.innerHTML += `<p>O maior valor informado foi <strong>${maior}</strong>.</p>`;
        res.innerHTML += `<p>O menor valor informado foi <strong>${menor}</strong>.</p>`;
        res.innerHTML += `<p>Somando todos os valores, temos <strong>${soma}</strong>.</p>`;
        res.innerHTML += `<p>A média dos valores é <strong>${media}</strong>.</p>`;

    } else {
        window.alert('Nenhum número foi adicionado.');
    }
}