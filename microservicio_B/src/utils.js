const http = require('http');

function fetchPalabra(req) {
    return new Promise((resolve, reject) => {
        var options = {
            host: process.env.PALABRA_HOST,
            port: process.env.PALABRA_PORT,
            path: process.env.PALABRA_PATH,
            method: 'GET',
            headers: req.headers,
        }

        const palabraReq = http.request(
            options,
            res => {
                let rta = "";
                res.on('data', d => {
                    rta += d;
                });
                res.on('end', () => {
                    var palabraJson = JSON.parse(rta);
                    resolve(palabraJson.palabra);
                });
            }
        )

        palabraReq.on('error', e => {
            reject('error');
            console.log(`error en request: ${e.message}`)
        });

        palabraReq.end();
    })
};

module.exports = { fetchPalabra };