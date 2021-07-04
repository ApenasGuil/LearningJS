//window.alert('Aula 09');

var corpo = window.document.body;

window.document.body.style.backgroundColor = '#aaa222';

var text = window.document.getElementsByTagName('small')[1];

//window.document.write(text.innerText);

//window.alert(text.innerHTML)

// var d = window.document.getElementById('maritaca');
// d.style.background = 'green';
// d.innerText = 'Outro texto';

var d = window.document.querySelector('div#msg');
d.style.background = 'green';
d.innerText = 'Outro texto';

