const Pet = require('../model/pet');

module.exports = app => {

    app.get('/pet', (req, res) => {
        res.send('Rota PET');
    });

    app.post('/pet', (req, res) => {

        const pet = req.body;

        Pet.adiciona(pet, res);
    });

}