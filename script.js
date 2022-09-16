function calculaMedia(){
  var nome = document.getElementById("name").value;
  var n1 = parseFloat(document.getElementById("nota1bim").value);
  var n2 = parseFloat(document.getElementById("nota2bim").value);
  var n3 = parseFloat(document.getElementById("nota3bim").value);
  var n4 = parseFloat(document.getElementById("nota4bim").value);


console.log(n1, n2, n3, n4);

var situacao = "Aprovado(a)";
var media = (n1 + n2 + n3 + n4)/4;
  if (media  < 5.5){
  situacao = "Reprovado(a)";
}
console.log(media + " "+ situacao);
  
  var elementoMediaCalculada = document.getElementById("mediaCalculada");
  var mediaCalculada = nome + ", sua média foi " + media + " e você está " + situacao;
  elementoMediaCalculada.innerHTML = mediaCalculada;
}