//declaração das variáveis globais, assim como os tokens iniciais
var colecaoPalavras = [];
var Tabela = [];
var palavraDigitada = $(".palavra-digitada");
var inputPalavra = $(".input-palavra");
var campo = $("#campo-validacao");

// Função para incluir as palavras na colecaoPalavras
function adicionaColecaoPalavras () {
  if ($(".input-palavra").val() > '') {
    colecaoPalavras.push(inputPalavra.val());
    $('#lista-palavras').append('<div class="chip">'+$(".input-palavra").val()+'<i class="close material-icons">close</i></div> ');
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
    if(Tabela.length > 0){
      inicializaMarcadores(event);
    }
  });
}

function inicializaMarcadores(event) {
  var campoValidacao = $('#campo-validacao').val();
  var a = 'a';
  var z = 'z'
  var estado = 0;
  var errado = false;

  atualizaClassInputValidacao();

  for (var i = 0; i < campoValidacao.length; i++) {
		if(campoValidacao && errado == false){

			marcaTabela(estado, campoValidacao[i]);
      console.log(Tabela[estado][campoValidacao[i]]);
			if(Tabela[estado][campoValidacao[i]] != '-') {
				estado = Tabela[estado][campoValidacao[i]];
			} else {
				errado = true;
			}
		}
	}
}

function atualizaClassInputValidacao(){
  var campoValidacao = $('#campo-validacao').val();

  if(campo.length == 1) {
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

function marcaTabela(linha, coluna){
	$('#tabela tr').removeClass('estado_selecionado');
	$('#tabela td').removeClass('letra_selecionada');
	$('#tabela .estado_' + linha).addClass('estado_selecionado');
	$('#tabela .caracter_' + coluna).addClass('letra_selecionada');
}
