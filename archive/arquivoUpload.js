const fs = require('fs'); // modulo de arquivo

fs.readFile('./asset/cachorrinho.jpeg', (erro, buffer) =>{
    console.log('imagem foi redenrizada');
    console.log(buffer);

    fs.writeFile('./asset/cachorrinho2.jpeg', buffer, (erro) => {
        console.log('imagem salva com sucesso');
    });
});