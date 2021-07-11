> Usarei este Readme como caderno de anotações sobre todo o curso e meu aprendizado de JavaScript, sempre mantendo padrões e seguindo o máximo de boas práticas possíveis. Sintam-se livres para me corrigir caso algo ou alguma descrição esteja incorreto. :grin:

#### Básico

```javascript
var n1 = Number(window.prompt('Digite um número: '));
var n2 = Number(window.prompt('Digite outro número: '));
var s = n1 + n2;

window.alert(`Soma entre ${n1} e ${n2} é igual a ${s}`);
```

#### DOM

DOM -> Modelo de Documento para Objetos
Conjunto de objetos dentro do navegador que dá acesso aos componentes internos do website

Árvore DOM:
window (janela do navegador)
document (itens dentro da página)

Child -> tags que estão um nível abaixo do Parent (e.g. body é child de html)


```javascript
var corpo = window.document.body;
corpo.style.backgroundColor = '#aaa222';

var text = window.document.getElementsByTagName('p')[1];
// [x] especifica a posição dentro os múltimos elementos p

window.document.write(text.innerText);

// window.alert(text.innerHTML)
// .innerHTML = recebe a estrutura HTML pura, não apenas o texto
// .innetText sim, recebe apenas o texto do requisitado

var d = window.document.getElementById('msg');
// Armazena o elemento com Id especificado na var
d.style.background = 'green'; 
// Altera a cor do fundo
d.innerText = 'sexoooooooooooo';
// Altera o texto interior

var d = window.document.querySelector('div#msg');
// Recomenda-se utilizar o .querySelector
```

#### Eventos DOM

Eventos do mouse: mouseenter, mousemove, mousedown, mouseup, click, mouseout

* Listeners *

```javascript
var a = window.document.querySelector('div#area');
a.addEventListener('click', clicar);
a.addEventListener('mouseenter', entrar);
a.addEventListener('mouseout', saiu);

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
```

#### Utilizar emojis no JS

Acessar [site do Unicode](https://unicode.org/emoji/charts/full-emoji-list.html)

Alterar o código de 'U+1F600' para '\u{1F600}'
(U+ se torna \u{})

#### .appendChild

```javascript
let n = Number(num.value);
for(let i = 0; i <= 10; i++){
    let item = document.createElement('option');
    item.text = `${n} x ${i} = ${n*i}`; //template string
    item.value = `tab${i}`;
    tab.appendChild(item);
    // .appendChild = Associa uma propriedade à uma tag
    }
```

#### Variáveis compostas

##### Exemplos com vetores

Adicionar mais informação num vetor
```javascript
let num = [5,8,4]; //0=5; 1=8; 2=4;
num[3] = 6; //0=5; 1=8; 2=4; 3=6;
num.push(7); //acrescenta valor num vetor não importando a última posição
num.length; //atributo que mostra quantos elementos há em determinado vetor
num.sort(); //reorganiza os elementos em ordem crescente
```

```javascript
let num = [5, 8, 2, 9, 3];
num.push(1); //[5, 8, 2, 9, 3, 1]
num.sort(); //[ 1, 2, 3, 5, 8, 9 ]
console.log(num);
console.log(`O vetor tem ${num.length} posições.`);
console.log(`O primeiro valor do vetor é ${num[0]}.`);
```

```javascript
for(let i = 0; i <= num.length; i++){ ... }
// Maneira simplificada do for() scegundo o EcmaScript
for(let i in num){ ... }
```

```javascript
let index = num.indexOf(2); // Busca o valor no Vetor
console.log(index); // Retorna -1 caso não encontre
```

#### Funções com parâmetro

```javascript
function parimp(n) {
    if (n % 2 == 0) {
        return 'par';
    } else {
        return 'impar';
    }
}

console.log(parimp(10));
```

```javascript
function soma(n1=0, n2=0) { // Define os valores default, caso paramêtro não seja passado
    let res = n1 + n2;
    return `${n1} + ${n2} = ${res}`;
}

console.log(soma(3, 5));
```

```javascript
let funct = function(x) { // Armazenar function dentro de variável
    return x*2;
}

console.log(funct(2));
```