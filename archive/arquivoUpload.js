const fs = require('fs'); // modulo de arquivo

fs.createReadStream('./asset/cachorrinho.jpeg') 
    .pipe(fs.createWriteStream('./asset/cachorrinho-stream.jpeg'))
    .on('finish', () => console.log('imagem criada'))