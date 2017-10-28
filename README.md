Campanha em colaboraçom com A Mesa na qual fomentamos a utilizaçom dos dias da semana por feiras.

Aqui podes atopar recursos para incluir o logo da campanha no teu blogue

# HTML/js/css
Podes incluir o polvo dinámico num simples <div></div> em qualquer página HTML.

Para elo, engade:
* O código HTML na tua página:
<pre>
<div class="diaDaSemana">
    <img class="DDSpolvo" id="polvo" height="150"/>
    <div class="DDStextos">
        <span class="DDSfeira" id="feira"></span>
        <span class="DDSmes" id="mes"></span>
    </div>
</div>
</pre>

* As funçons getDiaDaSemanaImg e setDiaDaSemana que se atopa em js/diaDaSemana.js
* Os estilos do ficheiro css/diaDaSemana.css
* Sube as imagens png de img/ a algum sítio do teu servidor.

Podes acomodar os textos nas cadeas do ficheiro diaDaSemana.js à tua norma, assim com o path das imagens subidas.

Chama à funçon setDiaDaSemana() dende a tua página principal.

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
