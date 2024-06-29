let inputNovoContato = document.querySelector('#inputNovoContato');
let botaoadicionar = document.querySelector('#botaoadicionar');
let listacontatos = document.querySelector('#listacontatos');

inputNovoContato.addEventListener('keypress', (e) => {
    if (e.keyCode === 13) {
        adicionarContato();
    }
});

botaoadicionar.addEventListener('click', (e) => {
    adicionarContato();
});

function gerarId() {
    return Math.floor(Math.random() * 3000);
}

function adicionarContato() {
    let contato = {
        nome: inputNovoContato.value,
        id: gerarId()
    };
    if (contato.nome.trim() !== '') {
        let li = criarTagLi(contato);
        listacontatos.appendChild(li);
        inputNovoContato.value = '';
    } else {
        alert("Por favor, adicione um nome para o contato.");
    }
}

function criarTagLi(contato) {
    let li = document.createElement('li');
    li.id = contato.id;

    let span = document.createElement('span');
    span.classList.add('textocontato');
    span.innerHTML = contato.nome;

    let div = document.createElement('div');

    let btnEditar = document.createElement('button');
    btnEditar.classList.add('btnAcao');
    btnEditar.innerHTML = '<i class="fa fa-pencil"></i>';
    btnEditar.addEventListener('click', () => editarContato(contato.id));

    let btnExcluir = document.createElement('button');
    btnExcluir.classList.add('btnAcao');
    btnExcluir.innerHTML = '<i class="fa fa-trash"></i>';
    btnExcluir.addEventListener('click', () => excluirContato(contato.id));

    div.appendChild(btnEditar);
    div.appendChild(btnExcluir);

    li.appendChild(span);
    li.appendChild(div);
    return li;
}

function editarContato(id) {
    let li = document.getElementById(id);
    let span = li.querySelector('.textocontato');
    let novoNome = prompt('Editar contato:', span.innerHTML);
    if (novoNome !== null && novoNome.trim() !== '') {
        span.innerHTML = novoNome;
    }
}

function excluirContato(id) {
    let li = document.getElementById(id);
    listacontatos.removeChild(li);
}
