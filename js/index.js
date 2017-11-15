var colecaoPalavras = [];
var Tabela = [];
var palavraDigitada = $(".palavra-digitada");
var inputPalavra = $(".input-palavra");
var campo = $("#campo-validacao");

// Função para incluir as palavras na colecaoPalavras
function adicionaColecaoPalavras() {
    if ($(".input-palavra").val() > '') {
        colecaoPalavras.push(inputPalavra.val());
        $('#lista-palavras').append('<div class="chip">' + $(".input-palavra").val() + '<i class="close material-icons">close</i></div> ');
        inserirPalavraNaTabela();
        $(".input-palavra").val('');
    } else {
        Materialize.toast('Palavra não pode ser vazia!', 3000, 'rounded')
    }
}

$('#campo-validacao').keyup(function(e) {
    inicializaMarcadores();
});

function inserirPalavraNaTabela() {
    insereTabela();
    Tabela = linhas();
    montaTabela(Tabela);

    $('#campo-validacao').keyup(function(event) {
        if (Tabela.length > 0) {
            inicializaMarcadores(event);
        }
    });
}

function inicializaMarcadores(event) {
    var campoValidacao = $('#campo-validacao').val();
    var a = 'a';
    var z = 'z'
    var linha = 0;

    atualizaClassInputValidacao();

    for (var i = 0; i < campoValidacao.length; i++) {
        if (campoValidacao) {
            marcaTabela(linha, campoValidacao[i]);
            linha = Tabela[linha][campoValidacao[i]];
        }
    }
}

function atualizaClassInputValidacao() {
    var campoValidacao = $('#campo-validacao').val();

    if (campo.length == 1) {
        $('#tabela tr').removeClass('estado_selecionado');
        $('#tabela td').removeClass('letra_selecionada');
    }

    if (jQuery.inArray(campoValidacao, colecaoPalavras) > -1) {
        campo.addClass("certo");
        campo.removeClass("errado");
    } else {
        campo.addClass("errado");
        campo.removeClass("certo");
    }
}

function marcaTabela(linha, coluna) {
    $('#tabela tr').removeClass('linha_selecao');
    $('#tabela td').removeClass('palavra_selecao');
    $('#tabela .estado_' + linha).addClass('linha_selecao');
    $('#tabela .caracter_' + coluna).addClass('palavra_selecao');
}
