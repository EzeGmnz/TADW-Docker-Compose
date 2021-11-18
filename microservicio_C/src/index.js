const express = require("express");
const utils = require("./utils");
const app = express();

const PORT = process.env.PORT

// app logic
// retrieve a word and make it uppercase
app.get('/anexado', (req, res) => {
    utils.fetchPalabraEnMayuscula(req)
        .then(palabra => {

            var randomIndex = Math.round(Math.random() * (100 - 1) + 1);
            const anexado = palabra + randomIndex;

            var outJson = `{"anexado" : "${anexado}"}`;

            res.writeHead(200, {
                "Content-Type": "application/json"
            })
            res.end(outJson);

        }).catch(msg => {
            console.log(msg);
        })
});

app.listen(PORT, () => {
    console.log("Ejecutando servicio anexado");
})