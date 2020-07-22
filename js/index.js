let transacao = new Formulario(1, true, 'Pagamento', 15, 150.50);

console.log(transacao);

function geraTabela(conteudo) {

    let tabela = document.querySelector('#tabela-principal');

    tr = document.createElement('tr');
    td = document.createElement('td');
    td.textContent = conteudo;

    tr.appendChild(td);
    tabela.appendChild(tr);

    console.log(tabela);
}

