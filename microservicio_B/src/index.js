const express = require("express");
const utils = require("./utils");
const app = express();

const PORT = process.env.PORT

// app logic
// retrieve a word and make it uppercase
app.get('/mayusculas', (req, res) => {
    utils.fetchPalabra(req)
        .then(palabra => {

            const palabraEnMayusculas = palabra.toUpperCase();

            var outJson = `{"palabra_mayusculas" : "${palabraEnMayusculas}"}`;

            res.writeHead(200, {
                "Content-Type": "application/json"
            })
            res.end(outJson);

        }).catch(msg => {
            console.log(msg);
        })
});

app.listen(PORT, () => {
    console.log("Ejecutando servicio mayúsculas");
})