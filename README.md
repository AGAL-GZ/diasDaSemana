Campanha em colaboraçom com A Mesa na qual fomentamos a utilizaçom dos dias da semana por feiras.

Aqui podes atopar recursos para incluir o logo da campanha no teu blogue

# html/js/css
Podes incluir o polvo dinámico num simples <div></div> em qualquer página HTML.

Para elo, engade:
* O código HTML na tua página:
```html
<div class="diaDaSemana">
    <img class="DDSpolvo" id="polvo" height="150"/>
    <div class="DDStextos">
        <span class="DDSfeira" id="feira"></span>
        <span class="DDSmes" id="mes"></span>
    </div>
</div>
```

* O javascript:
  * Modifica as cadeas de texto para os meses/dias segum a tua norma
  * Modifica a variable path para adecua-la a onde tu subas as imagens
  * Se modificas o nome da imagem, modifica a variable polvo
```javascript
/* Obtemos um objeto com a image, o dia e o mês a mostrar */
function getDiaDaSemana(){
  console.log("getDiaDaSemanaImg");
  /* Textos a mostrar */
  var mes = new Array('janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro');
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

/* Modifica o HTML com o obtindo segum o dia */
function setDiaDaSemana(){
  meuPolvo=getDiaDaSemana();
  $("#feira").html(meuPolvo.feira);
  $("#mes").html(meuPolvo.mes);
  $("#polvo").attr("src",meuPolvo.img);
}
```

* Os estilos
```css
.diaDaSemana{
  position: relative;
  top: 0px;
  width: 200px;
  right: 0px;
}
.DDSpolvo{
    width: 150px;
}
.DDStexto {
   position: relative;
   top: -30px;
   width: 100%;
}
.DDSfeira {
   color: #e23e83;
   font: bold 14px/25px HelveNeuBlaCon, Helvetica, Sans-Serif;
   letter-spacing: -1px;
   padding: 10px;
}
.DDSmes {
   color: #8b0067;
   font: bold 14px/25px HelveNeuBlaCon, Helvetica, Sans-Serif;
   letter-spacing: -1px;
   padding: 10px;
}
```

* Sube as imagens png de img/ a algum sítio do teu servidor.

Simplesmente lembra de chamar na tua inicializaçom da página à funçom diaDaSemana()


Podes ver um exemplo do funcionamento em http://dias.pgl.gal


# Wordpress
Editar os ficheiros header.php e style.css do tema.
Para elo dirigir-se a "Apresentação:Editor".

Engadir os conteudos dos ficheiros js/diasDaSemana.js e css/diasDaSemana.css nos respeitivos ficheiros


# Estilo

## Fonte
- Fonte: HelveNeuBlaCon
- Alternativo: Arial Black
- Tamanho: 14

# Cores:

## Violeta
- Violeta suave: #e23e83
- Violeta escuro: #8b0067
