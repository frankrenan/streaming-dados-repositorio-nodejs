const fs = require('fs'); // modulo de arquivo



module.exports = (caminho, nomeArquivo, callbackImagemCriada) => {

    const novoCaminho = `./asset/img/${nomeArquivo}`;

    fs.createReadStream(caminho)
        .pipe(fs.createWriteStream(novoCaminho))
        .on('finish', () => callbackImagemCriada(novoCaminho))

}
