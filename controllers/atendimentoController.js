const axios = require('axios');
const Atendimento = require('../model/antedimento');


module.exports = app => {
    app.get('/atendimentos', (req, res) => {
        Atendimento.lista()
            .then(resultados => res.json(resultados))
            .catch(erros => res.status(400).json(erros))
    });

    app.get('/atendimentos/:id', (req, res) => {

        const id = req.params.id;
        Atendimento.buscaId(id)
            .then( async (resultado) => {
                const atendimento = resultado[0];
                const cpf = atendimento.cliente;

                const { data } = await axios.get(`http://localhost:8082/${cpf}`);

                atendimento.cliente = data;

                res.status(200).json(atendimento);    
            })
            .catch(erros => res.status(400).json(erros)) 

    });

    app.post('/atendimentos', (req, res) => {
        const atendimento = req.body;

        Atendimento.adiciona(atendimento)
            .then(atendimentoCadastrado =>
                res.status(201).json(atendimentoCadastrado)
            )
            .catch(erros => res.status(400).json(erros))
    });

    app.patch('/atendimentos/:id', (req, res) => {
        const id = parseInt(req.params.id)
        const valores = req.body
        Atendimento.altera(id, valores)
            .then(resultado => res.status(200).json(resultado))
            .catch(erros => res.status(400).json(erros))
    });

    app.delete('/atendimentos/:id', (req, res) => {
        const id = parseInt(req.params.id);

        Atendimento.exclui(id)
            .then(resultado => res.status(200).json(resultado))
            .catch(erros => res.status(400).json(erros))
    });
}