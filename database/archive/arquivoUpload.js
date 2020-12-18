const e = require('express');
const fs = require('fs'); // modulo de arquivo
const path = require('path');


module.exports = (caminho, nomeArquivo, callbackImagemCriada) => {

    const tipo = path.extname(caminho);
    const tiposValidos = ['jpg', 'jpeg', 'png'];
    const valido =  tiposValidos.indexOf(tipo.substring(1)) !== -1;

    if (valido){
        const novoCaminho = `../../asset/img/${nomeArquivo}${tipo}`;

        fs.createReadStream(caminho)
            .pipe(fs.createWriteStream(novoCaminho))
            .on('finish', () => callbackImagemCriada(false, novoCaminho))
            console.log('salvo com sucesso')
    }
    else{
        const erro = 'extesão não disponível';

        callbackImagemCriada(erro);

        console.log(erro);

        
    }

    

}
