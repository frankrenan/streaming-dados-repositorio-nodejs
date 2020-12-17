const fs = require('fs'); // modulo de arquivo
const path = require('path');


module.exports = (caminho, nomeArquivo, callbackImagemCriada) => {

    const tipo = path.extname(caminho);
    const tipoValidos = ['jpg', 'jpeg', 'png'];
    const valido = tipoValidos.indexOf(tipo.substring(1));

    if (valido == -1) {
        console.log('extensão não disponível')
    }
    else {
        
        const novoCaminho = `./asset/img/${nomeArquivo}${tipo}`;

        fs.createReadStream(caminho)
            .pipe(fs.createWriteStream(novoCaminho))
            .on('finish', () => callbackImagemCriada(novoCaminho))

        console.log('salvo com sucesso');
    }



}
