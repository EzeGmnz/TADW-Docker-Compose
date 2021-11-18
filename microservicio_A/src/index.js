const express = require("express");
const utils = require("./utils");
const app = express();

const PORT = process.env.PORT;

// App logic
// get a random word and return it
app.get('/palabra', (req, res) => {
    var palabra = utils.getPalabra();
    var outJson = `{"palabra" : "${palabra}"}`;

    res.writeHead(200, {
        "Content-Type": "application/json"
    })
    res.end(outJson);
})

// Start server
app.listen(PORT, () => {
    console.log("Ejecutando servicio de palabra");
})