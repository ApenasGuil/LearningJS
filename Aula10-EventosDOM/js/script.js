var a = window.document.querySelector('div#area');
a.addEventListener('click', clicar)
a.addEventListener('mouseenter', entrar)
a.addEventListener('mouseout', saiu)

function clicar() {
    a.innerText = 'Clicou!';
    a.style.background = 'red';
}

function entrar() {
    a.innerText = 'Entrou!';
}

function saiu() {
    a.innerText = 'Saiu!';
    a.style.background = 'green';
}

function somar() {
    var tn1 = window.document.getElementById('txtn1');
    var tn2 = window.document.getElementById('txtn2');
    var res = window.document.getElementById('res');
    var n1 = Number(tn1.value);
    var n2 = Number(tn2.value);
    var s = n1 + n2;
    res.innerText = `Resultado: A soma é ${s}`;
}