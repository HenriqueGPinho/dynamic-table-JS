function adicionar() {
    var descricao = document.getElementById('descricao').value;
    var vencimento = parseInt(document.getElementById('venc').value);
    var automatico = document.getElementById('auto').checked;
    var valor = parseFloat(document.getElementById('valor').value);

    console.log(descricao, vencimento, automatico, valor);

}