let selecionados = {
    prato: null,
    bebida: null,
    sobremesa: null
};

function atualizarBotao() {
    const botao = document.getElementById('FinalizarButton');
    if (selecionados.prato && selecionados.bebida && selecionados.sobremesa) {
        botao.classList.add('ativo');
    } else {
        botao.classList.remove('ativo');
    }
}

document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.item_prato').forEach(item => {
        item.addEventListener('click', function() {
            document.querySelectorAll('.item_prato').forEach(el => el.classList.remove('selecionado'));
            this.classList.add('selecionado');
            selecionados.prato = this.querySelector('#tituloPrato h1').innerText;
            atualizarBotao();
        });
    });

    document.querySelectorAll('.item_Bebida').forEach(item => {
        item.addEventListener('click', function() {
            document.querySelectorAll('.item_Bebida').forEach(el => el.classList.remove('selecionado'));
            this.classList.add('selecionado');
            selecionados.bebida = this.querySelector('#tituloBebidas h1').innerText;
            atualizarBotao();
        });
    });

    document.querySelectorAll('.item_Sobremesa').forEach(item => {
        item.addEventListener('click', function() {
            document.querySelectorAll('.item_Sobremesa').forEach(el => el.classList.remove('selecionado'));
            this.classList.add('selecionado');
            selecionados.sobremesa = this.querySelector('#tituloSobremesa h1').innerText;
            atualizarBotao();
        });
    });

    document.getElementById('FinalizarButton').addEventListener('click', function() {
        if (this.classList.contains('ativo')) {
            document.getElementById('popup').style.display = 'block';
            document.getElementById('resumo').innerHTML = `
                <strong>Prato:</strong> ${selecionados.prato} <br>
                <strong>Bebida:</strong> ${selecionados.bebida} <br>
                <strong>Sobremesa:</strong> ${selecionados.sobremesa} <br>
                <strong>Total:</strong> R$ 52,97
            `;
        }
    });

    document.getElementById('fecharPopup').addEventListener('click', function() {
        document.getElementById('popup').style.display = 'none';
    });
});
