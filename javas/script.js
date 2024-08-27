var textEntrada = document.querySelector("#entrada-texto");
var outEntrada = document.querySelector("#resultado");

function criptografar(){
    var texto = textEntrada.value;

    var cripto = texto.replace(/e/g, "enter")
                            .replace(/i/g, "imes")
                            .replace(/a/g, "ai")
                            .replace(/o/g, "ober")
                            .replace(/u/g, "ufat");

    document.getElementById("resultado").innerHTML = '<textarea readonly id= "entrada-texto">' + cripto +'</textarea>' +'<button class="btn-copiar" id="copiar" onclick="copiar()" >copiar</button>';
    
}

function descriptografar(){
    var texto = textEntrada.value;

    var descripto = texto.replace(/enter/g, "e")
                               .replace(/imes/g, "i")
                               .replace(/ai/g, "a")
                               .replace(/ober/g, "o")
                               .replace(/ufat/g, "u");

    document.getElementById("resultado").innerHTML = '<textarea readonly id="entrada-texto">' + descripto +'</textarea>' + '<button class="btn-copiar"  id="copiar" onclick="copiar()">copiar</button>';
}

function copiar(){
    var textoCop = document.getElementById("entrada-texto");
    textoCop.select();
    document.execCommand ('copy');
    alert("Texto Copiado");

}
