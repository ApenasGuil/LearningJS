> Usarei este Readme como caderno de anotações sobre todo o curso e meu aprendizado de JavaScript, sempre mantendo padrões e seguindo o máximo de boas práticas possíveis. Sintam-se livres para me corrigir caso algo ou alguma descrição esteja incorreto. :grin:

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
        item.text = `${n} x ${i} = ${n*i}`;
        item.value = `tab${i}`;
        tab.appendChild(item);
        // .appendChild = Associa uma propriedade à uma tag
    }
```

