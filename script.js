function alterarQtd(produto, acao) {
    const qtd = document.getElementById(`qtd_` + produto);
    const valor = document.getElementById(`valor_` + produto);
    const total = document.getElementById(`total_` + produto);

    if (acao == `-` && qtd.innerHTML == 0) {
        return;
    } else {
        acao == `+` ? qtd.innerHTML++ : qtd.innerHTML--;
        
        // Convertemos o texto para número real (ex: 129.90)
        const valorUnitario = converterParaNumero(valor.innerHTML);
        const valorTotal = qtd.innerHTML * valorUnitario;
        
        total.innerHTML = formatarValor(valorTotal);
        soma();
    }
}

function soma() {
    let somaTotal = 0;

    for (let i = 1; i <= 3; i++) {
        let textoTotal = document.getElementById(`total_` + i).innerHTML;
        somaTotal += converterParaNumero(textoTotal);
    }

    document.getElementById(`totalEstimado`).innerHTML = formatarValor(somaTotal);
}

// NOVA FUNÇÃO: Transforma "R$ 129,90 BRL" em 129.90
function converterParaNumero(texto) {
    // Remove tudo que não é número, vírgula ou ponto
    let limpo = texto.replace(/[^\d,]/g, '').replace(',', '.');
    return parseFloat(limpo) || 0;
}

// MELHORIA: Usa as opções de estilo do toLocaleString para garantir os centavos
function formatarValor(n) {
    return n.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }) + " BRL";
}