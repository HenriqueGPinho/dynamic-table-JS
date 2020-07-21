function adicionar() {
    var descricao = document.getElementById('descricao').value;
    var vencimento = parseInt(document.getElementById('venc').value);
    var automatico = document.getElementById('auto').checked;
    var valor = parseFloat(document.getElementById('valor').value);

    console.log(descricao, vencimento, automatico, valor);
    var operacao = new Operacao(descricao, vencimento, automatico, valor);
    console.log(operação);
}

// usar document.querySelector

class Operacao {
    
    constructor(descricao, venc, auto, valor) {
        this.descricao = descricao;
        this.venc = venc;
        this.auto = auto;
        this.valor = valor;
    }
}