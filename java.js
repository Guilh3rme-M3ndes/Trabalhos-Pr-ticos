//declaração das variáveis
var indiceA = 0;
var nota1 = [];
var nota2 = [];
var nota3 = [];
var nota4 = [];
const cnotas = [];
var condicao = [];
var frequencia = [];

function notas(num1, num2, num3, num4) {
	var media = (num1 + num2 + num3 + num4) / 4;
	return media;
}

function Cnotas() {
	for (var indice = 0; indice < 10; indice++) {

		nome[indice] = document.getElementById("nome")
		nota1[indice] = parseInt(document.getElementById("nota1").value);
		nota2[indice] = parseInt(document.getElementById("nota2").value);
		nota3[indice] = parseInt(document.getElementById("nota3").value);
		nota4[indice] = parseInt(document.getElementById("nota4").value);

		cnotas[indice] = notas(nota1, nota2, nota3, nota4);

		frequencia[indice] = parseInt(document.getElementById("freq").value);




		if (cnotas[indice] >= 6 && frequencia[indice] >= 75) {
			document.getElementById("aprovou").innerHTML = ""
			document.getElementById("aprovou").innerHTML = "Aprovado!"
			condicao[indice] = "Aprovado!"

		} else if (cnotas[indice] < 6 && frequencia[indice] < 75) {
			document.getElementById("aprovou").innerHTML = ""
			document.getElementById("aprovou").innerHTML = "Reprovado por média e falta!"
			condicao[indice] = "Reprovado por média e falta!"

		} else if (cnotas[indice] < 6) {
			document.getElementById("aprovou").innerHTML = ""
			document.getElementById("aprovou").innerHTML = "Reprovado por média!"
			condicao[indice] = "Reprovado por média!"

		} else if (cnotas[indice] >= 6 && frequencia[indice] < 75) {
			document.getElementById("aprovou").innerHTML = ""
			document.getElementById("aprovou").innerHTML = "Reprovado por falta!"
			condicao[indice] = "Reprovado por falta!"

		}

	}
}
function exibir() {
	document.getElementById("set1").innerHTML = "aluno: " + cnotas[indiceA] + " ."
	indiceA++
	document.getElementById("set2").innerHTML = "aluno: " + nome[indiceA] + " ."
	indiceA++
	document.getElementById("set3").innerHTML = "aluno: " + nome[indiceA] + " ."
	indiceA++
	document.getElementById("set4").innerHTML = "aluno: " + nome[indiceA] + " ."
	indiceA++
	document.getElementById("set5").innerHTML = "aluno: " + nome[indiceA] + " ."
	indiceA++
	document.getElementById("set6").innerHTML = "aluno: " + nome[indiceA] + " ."
	indiceA++
	document.getElementById("set7").innerHTML = "aluno: " + nome[indiceA] + " ."
	indiceA++
	document.getElementById("set8").innerHTML = "aluno: " + nome[indiceA] + " ."
	indiceA++
	document.getElementById("set9").innerHTML = "aluno: " + nome[indiceA] + " ."
	indiceA++
	document.getElementById("set10").innerHTML = "aluno: " + nome[indiceA] + " ."
}

