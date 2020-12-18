const conexao = require('../database/conexao');
const arquivoUpload = require('../database/archive/arquivoUpload');


class Pet {

    adiciona(pet, res) {
        const query = 'INSERT INTO pets SET ?';

        arquivoUpload(pet.imagem, pet.nome, (novoCaminho) => {
            
            const novoPet = {nome: pet.nome, imagem: novoCaminho};

            conexao.query(query, novoPet, erro => {
                if (erro) {
                    res.status(400).json(erro);
                }
                else {
                    res.status(200).json(novoPet);
                }
            });
        });
    }


}

module.exports = new Pet;