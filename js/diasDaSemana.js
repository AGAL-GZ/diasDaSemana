/* Devolve a imagem a mostrar */
function getDiaDaSemana(){
  console.log("getDiaDaSemanaImg");
  /* Textos a mostrar */
  var mes = new Array('janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'agosto', 'outubro', 'novembro', 'dezembro');
  var feira = new Array('Domingo', 'Segunda feira', 'Terça feira', 'Quarta feira', 'Quinta feira', 'Sexta feira', 'Sábado');

  var path = "img/" /* path da imagem */
  var polvo = "polvo_violeta" /* raiz do nome da imagem */

  var currentdate = new Date(); /* obtemos a informaçom do dia de hoje */
  var diaDende0 = currentdate.getDay(); /* currentdate.getDay devolve 0: domingo, 1: segunda, ... 6 sábado */

  switch (diaDende0){
    case 0: this.img=path+polvo+'_d.png';break;
    case 1: this.img=path+polvo+'_2.png';break;
    case 2: this.img=path+polvo+'_3.png';break;
    case 3: this.img=path+polvo+'_4.png';break;
    case 4: this.img=path+polvo+'_5.png';break;
    case 5: this.img=path+polvo+'_6.png';break;
    case 6: this.img=path+polvo+'_s.png';break;
  }

  this.feira = feira[diaDende0]; /* Domingo, Segunda feira, ... */
  this.mes = currentdate.getDate() + ' de ' + mes[currentdate.getMonth()]; /* 22 de fevereiro */
  return this;
}
function setInfo(){
  meuPolvo=getDiaDaSemana();
  $("#feira").html(meuPolvo.feira);
  $("#mes").html(meuPolvo.mes);
  $("#polvo").attr("src",meuPolvo.img);
}
