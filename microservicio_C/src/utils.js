const http = require('http');

function fetchPalabraEnMayuscula(req) {
    return new Promise((resolve, reject) => {
        var options = {
            host: process.env.MAYUSCULA_HOST,
            port: process.env.MAYUSCULA_PORT,
            path: process.env.MAYUSCULA_PATH,
            method: 'GET',
            headers: req.headers,
        }

        const mayusculaReq = http.request(
            options,
            res => {
                let rta = "";
                res.on('data', d => {
                    rta += d;
                });
                res.on('end', () => {
                    var mayusculaJson = JSON.parse(rta);
                    resolve(mayusculaJson.palabra_mayusculas);
                });
            }
        )

        mayusculaReq.on('error', e => {
            reject('error');
            console.log(`error en request: ${e.message}`)
        });

        mayusculaReq.end();
    })
};

module.exports = { fetchPalabraEnMayuscula };