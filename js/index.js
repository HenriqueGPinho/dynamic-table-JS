let transacao = new Formulario(1, true, 'Pagamento', 15, 150.50);
let i = 0;

console.log(transacao);

function geraLinha(auto, descricao, vencimento, valor) {

    let tabela = document.querySelector('#tabela-principal');

    let linhaTabela = `
        <tr>
            <td class="tr-numero">${contador()}</td>
            <td class="tr-pago"><input type="checkbox" name="pago"></td>
            <td class="tr-auto">${automatico(auto)}</td>
            <td class="tr-descricao">${descricao}</td>
            <td class="tr-vencimento">${vencimento}</td>
            <td class="tr-valor">${valor}</td>
        </tr>
    `
    tabela.insertAdjacentHTML('beforeend', linhaTabela);

    console.log(tabela);
}

function contador() {

    i += 1;
    return i;
}

function automatico(valorBool) {
    
    if(valorBool) return '<input type="checkbox" name="auto" checked>'
    else return '<input type="checkbox" name="auto"></input>'
}