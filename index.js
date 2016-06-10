

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.0 Transitional//EN">
<html>
<head>
<title>Campo Minado</title>
<meta name="generator" content="Vim :)">
<meta http-equiv="content-type" content="text/html; charset=UTF-8">

<style type="text/css">
	body
		{
		font-family	: font-variant: ;
		text-align	: center;
		background-color: #0f8;
		}
	table
		{
		margin		: auto;
		background-color: #fff;
		border-collapse	: separate;
		border-spacing	: 0px;
		}
	td
		{
		width		: 120px; 
		line-height	: 120px;
		border		: 2px outset green;
		text-align	: center;
		
		/* manha de "esconder" o texto */
		background-color: #ccc;
		color		: #ccc;
		}
	td.clicked
		{
		background-color: #ccc;
		color		: black;
		font-size	: 25px;
		border		: 2px solid #ccc;
		}
	p
		{
		font-size	: small;
		text-align	: justify;
		}
	#browsers
		{
		position	: fixed;
		bottom		: 0;
		left		: 0;
		width		: 100%;
		padding-top	: 10px;
		padding-bottom	: 15px;
		background-color: #ffd;
		border-top	: 1px solid silver;
		text-align	: center;
		font-weight	: bold;
		}
	.browserok  { color	: #0c0; }
	.browseraok { color	: #f60; }
	.browsernok { color	: #f00; }
</style>

<script type="text/javascript">

var contador, maximo, erro, tabela, vencedor,jogador;
jogador = prompt("Nome do jogador");

function iniciar() {
	dados();
	desenho();
	menssagem("<h2>Cuidado Preste Atenção!<h2>");
}

function dados() {
	erro = false;
	vencedor = false;
	maximo = 12;
	contador = 0;
	tabela = [
		[Math.floor(Math.random() * 4),  Math.floor(Math.random() * 4), Math.floor(Math.random() * 4),  Math.floor(Math.random() * 4)],
		[Math.floor(Math.random() * 4), Math.floor(Math.random() * 4),  Math.floor(Math.random() * 4),  Math.floor(Math.random() * 4)],
		[Math.floor(Math.random() * 4), Math.floor(Math.random() * 4),  Math.floor(Math.random() * 4),  Math.floor(Math.random() * 4)],
		[Math.floor(Math.random() * 4),  Math.floor(Math.random() * 4),  Math.floor(Math.random() * 4), Math.floor(Math.random() * 4)]
		]; /*[
		[Math.floor(Math.random() * 4),  2, -1,  1],
		[2, -1,  3,  1],
		[2, -1,  3,  1],
		[1,  1,  2, -1] // -1 Jogo acaba
	];
 -1 Jogo acaba
	];*/





 


}

function menssagem(text) {
	document.getElementById("linha").innerHTML = text;
}

function desenho() {
	// Converte o array em uma tabela e a insere no DIV #campo_minado
	
	var campo_minado = new Array();  

	campo_minado.push("<table><tr>");
	for (var i = 0; i < tabela.length; i++) {
		if (i != 0) campo_minado.push("</tr><tr>");
		for (var j = 0; j < tabela[i].length; j++) {
			campo_minado.push(
				'<td' +
				'    onMouseOver="destaque(this)"' +
				'    onMouseOut="sair(this)"' +
				'    onClick="cellClicked(this)">' +
				tabela[i][j] + "</td>"
			);
		}
	}
	campo_minado.push("</tr></table>"); 
	document.getElementById("campo_minado").innerHTML = campo_minado.join("\n");
}

function cellClicked(thisCell) {
	// Detecta se algo importante aconteceu
	if (erro) {
		iniciar();
		menssagem("<h2>Vamos tentar de novo!<h2>");
		return;
	} else if (vencedor) {
		iniciar();
		menssagem("<h2>Vai ganhar de novo?<h2>");
		return;
	}
	
	// Se esse quadrado ja foi clicado, ignora
	if (thisCell.className == "clicked") return;

	// No CSS a classe "clicked" usa outras cores, revelando o numero
	thisCell.className = "clicked";

	switch (thisCell.innerHTML) {
		// Pinta cada numero de uma cor
		case "1": thisCell.style.color = "#070"; break;
		case "2": thisCell.style.color = "#00b"; break;
		case "3": thisCell.style.color = "#c00"; break;
		// Bomba!
		case "0":
			thisCell.innerHTML = '*';
			erro = true;
			menssagem("<h2>Fim do jogo!<h2>");
			return;
	}
	contador++;

	if (contador == maximo) { // achou todos os quadrados livres
		vencedor = true;
		menssagem("<h1>PARABENS ! voce consseguiu!<h1>" + jogador);

	} else {
		menssagem("<h2>Falta Apenas<h2>"+(maximo-contador)+" <br>" +"Acertos  "+ contador);
	}
}
// 
// Faz o destaque nos quadrados virgens
function destaque(thisCell) {
	if (!thisCell.className) {
		thisCell.style.border = "2px solid yellow";
	}
}
function sair(thisCell) {
	if (thisCell.className == "clicked") {
		thisCell.style.border = "2px solid #000";
	} else {
		thisCell.style.border = "2px outset gray";
	}
}

window.onload = iniciar;

</script>

</head>
<body>
<div id="campo_minado">
<!-- Tabela do campo minado -->
</div>

<div id="linha">
<!-- Onde o texto sera exibido -->
</div>

<p><br /></p>
<hr>

<p>

</p>

</body>
</html>

