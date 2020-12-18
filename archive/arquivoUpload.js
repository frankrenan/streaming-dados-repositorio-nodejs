const fs = require('fs'); // modulo de arquivo
const path = require('path');


module.exports = (caminho, nomeArquivo, callbackImagemCriada) => {

    const tipo = path.extname(caminho);
    const novoCaminho = `./asset/img/${nomeArquivo}`;

    fs.createReadStream(caminho)
        .pipe(fs.createWriteStream(novoCaminho))
        .on('finish', () => callbackImagemCriada(novoCaminho))

}
