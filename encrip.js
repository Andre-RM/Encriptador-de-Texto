function encriptarVocales(texto) {
    //Convertir texto en minuscula
    texto=texto.toLowerCase();

    //Declarar un objeto
    let vocalesReemplazar={
        'a': 'ai',
        'e': 'enter',
        'i': 'imes',
        'o': 'ober',
        'u': 'ufat',
    }

    texto=texto.replace(/[aeiou]/g,function(vocal){
        return vocalesReemplazar[vocal];
    })

    return texto

}

function desencriptarVocales(texto){
    // Declarar un objeto con las secuencias de reemplazo invertidas
    let secuenciasDesencriptar = {
        'ai': 'a',
        'enter': 'e',
        'imes': 'i',
        'ober': 'o',
        'ufat': 'u'
    };

    // Reemplazar las secuencias encriptadas por las vocales originales
    texto = texto.replace(/ai|enter|imes|ober|ufat/g, function(match) {
        return secuenciasDesencriptar[match];
    });

    return texto;
}

function encriptarTexto(){
    let textoIngresado=document.querySelector("#texto-ingresado").value;
    let textoMostrado = encriptarVocales(textoIngresado);
    //Muestra el texto en el segundo textarea
    document.querySelector(".texto-mostrado").value = textoMostrado;
    //Estilos que se aplican cuando se encripta
    document.querySelector(".btn-copiar").style.display="block";
    document.querySelector(".muñeco").style.display="none";
    document.querySelector(".titulo-mensaje").style.display="none";
    document.querySelector(".contenedor-mostrar").style.position="relative";
    document.querySelector(".texto-mostrado").style.position="absolute";
    document.querySelector(".texto-mostrado").style.top=0;
    document.querySelector(".texto-mostrado").style.height="65%";
    document.querySelector(".texto-mostrado").style.fontSize="18px";
    document.querySelector(".texto-mostrado").style.textAlign="left";

}

function desencriptarTexto(){
    let textoIngresado=document.querySelector("#texto-ingresado").value;
    let textoNuevo = desencriptarVocales(textoIngresado);
    //Muestra el texto en el segundo textarea
    document.querySelector(".texto-mostrado").value = textoNuevo;


}






function copiarTexto(){
    let textoMostrado=document.querySelector(".texto-mostrado").value;
    navigator.clipboard.writeText(textoMostrado)
        
}