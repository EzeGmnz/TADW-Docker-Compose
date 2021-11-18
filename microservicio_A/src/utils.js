
function getSetDePalabras() {
    return [
        "Esta",
        "mañana",
        "me",
        "despertaron",
        "visiones",
        "de",
        "fuego",
        "y",
        "acero",
        "Las",
    ]
}


function getPalabra() {
    var palabras = getSetDePalabras();
    var randomIndex = Math.round(Math.random() * (10 - 1));

    return palabras[randomIndex];
};

module.exports = { getPalabra };