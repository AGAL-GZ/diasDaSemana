Campanha em colaboraçom com A Mesa na qual encorajamos as pessoas galegas a utilizarem os dias da semana por feiras.

Aqui podes encontrar recursos para incluir o logo da campanha no teu blogue.

# html/js/css
Podes incluir o polvo dinámico num simples <div></div> em qualquer página HTML.

Para isso, acrescenta:
* O seguinte código HTML na tua página:
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
  * Modifica as cadeias de carateres para os meses/dias segundo a tua norma
  * Modifica a variável path para adecuá-la ao lugar onde tu subas as imagens
  * Se modificas o nome da imagem, modifica a variável polvo
```javascript
/* Obtemos um objeto com a image, o dia e o mês a mostrar */
function getDiaDaSemana(){
  console.log("getDiaDaSemanaImg");
  /* Textos a mostrar */
  var mes = new Array('janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro');
  var feira = new Array('Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado');

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

  this.feira = feira[diaDende0]; /* Domingo, Segunda-feira, ... */
  this.mes = currentdate.getDate() + ' de ' + mes[currentdate.getMonth()]; /* 22 de fevereiro */
  return this;
}

/* Modifica o HTML com o obtido segundo o dia */
function setDiaDaSemana(){
  diaDaSemana=getDiaDaSemana();
  $("#feira").html(diaDaSemana.feira);
  $("#mes").html(diaDaSemana.mes);
  $("#polvo").attr("src",diaDaSemana.img);
}
```

* Os estilos
```css
.diaDaSemana{
  position: relative;
  margin: auto;
  top: 0px;
  width: 200px;
  right: 0px;
}
.DDSpolvo{
    width: 100%;
}
.DDStextos {
   position: relative;
   top: 0px;
   width: 100%;
}
.DDSfeira {
   color: #e23e83;
   font: bold 14px/25px HelveNeuBlaCon, Helvetica, Sans-Serif;
   letter-spacing: -1px;
   padding-left: 5px;
   padding-right: 5px;
   text-align: center;
}
.DDSmes {
   color: #8b0067;
   font: bold 14px/25px HelveNeuBlaCon, Helvetica, Sans-Serif;
   letter-spacing: -1px;
   padding-right: 5px;
}
```

* Sobe as imagens png de img/ a algum sítio do teu servidor.

Simplesmente lembra-te de chamar na tua inicializaçom da página a funçom diaDaSemana()


Podes ver um exemplo do funcionamento em http://dias.pgl.gal


# Wordpress com widgets

Para adicionarmos um widget com este código:
* Subimos as imagens a uma biblioteca de média.

* Colamos num widget do tipo HTML o seguinte código

```html
<div class="diaDaSemana">
    <img class="DDSpolvo" id="polvo" height="150"/>
    <div class="DDStextos">
        <span class="DDSfeira" id="feira"></span>
        <span class="DDSmes" id="mes"></span>
    </div>
</div>
<style>
.diaDaSemana{
  position: relative;
  margin: auto;
  top: 0px;
  width: 200px;
  right: 0px;
}
.DDSpolvo{
    width: 100%;
}
.DDStextos {
   position: relative;
   top: 0px;
   width: 100%;
}
.DDSfeira {
   color: #e23e83;
   font: bold 14px/25px HelveNeuBlaCon, Helvetica, Sans-Serif;
   letter-spacing: -1px;
   padding-left: 5px;
   padding-right: 5px;
   text-align: center;
}
.DDSmes {
   color: #8b0067;
   font: bold 14px/25px HelveNeuBlaCon, Helvetica, Sans-Serif;
   letter-spacing: -1px;
   padding-right: 5px;
}
</style>
<script type="text/javascript">
//<![CDATA[
/* Retorna a imagem a mostrar */
function getDiaDaSemana(){
  console.log("getDiaDaSemanaImg");
  /* Textos a mostrar */
  var mes = new Array('janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro');
  var feira = new Array('Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado');

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
diaDaSemana=getDiaDaSemana();
document.getElementById('polvo').src = diaDaSemana.img;
document.getElementById('mes').innerHTML = diaDaSemana.mes;
document.getElementById('feira').innerHTML = diaDaSemana.feira;
//]]>
</script>
```

# Informaçom sobre as questons de estilo

## Fonte
- Fonte: HelveNeuBlaCon
- Alternativo: Arial Black
- Tamanho: 14

# Cores:

## Violeta
- Violeta suave: #e23e83
- Violeta escuro: #8b0067
