window.onload = function() {
    // Obtener el elemento del párrafo
    var textoParrafos = document.querySelectorAll(".single-quad__right-copy");

    // Decodificar las entidades HTML
    textoParrafos.forEach(function(textoParrafo){
        var textoDecodificado = decodeEntities(textoParrafo.innerHTML);
        textoParrafo.innerHTML = textoDecodificado;
    });

    // Reemplazar el contenido del párrafo con el texto formateado
    

    if (document.querySelector('.display-none')) {
        var elementos = document.querySelectorAll('.display-none');
        elementos.forEach(function(elemento) {
            elemento.remove();
        });
    }
}

// Función para decodificar entidades HTML
function decodeEntities(encodedString) {
    var textArea = document.createElement('textarea');
    textArea.innerHTML = encodedString;
    return textArea.value;
}
