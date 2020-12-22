const axios = require('axios');
const moment = require('moment');
const conexao = require('../database/conexao');
const repositorio = require('../repositories/antendimento');

class Atendimento {

    constructor() {

        this.dataEhValida = ({ data, dataCriacao }) =>
            moment(data).isSameOrAfter(dataCriacao)

        this.clienteEhValido = tamanho => tamanho >= 5;

        this.valida = parametros =>
            this.validacoes.filter(campo => {
                const { nome } = campo
                const parametro = parametros[nome]

                return !campo.valido(parametro)
            })

        this.validacoes = [
            {
                nome: 'data',
                valido: this.dataEhValida,
                mensagem: 'Data deve ser maior ou igual a data atual'
            },
            {
                nome: 'cliente',
                valido: this.clienteEhValido,
                mensagem: 'Cliente deve ter pelo menos 5 caracteres'
            }
        ]
    }

    adiciona(atendimento) {

        const dataCriacao = moment().format('YYYY-MM-DD HH:MM:SS');
        const data = moment(atendimento.data, 'DD/MM/YYYY').format('YYYY-MM-DD HH:MM:SS');


        const parametros = {
            data: { data, dataCriacao },
            cliente: { tamanho: atendimento.cliente.length }
        }

        const erros = this.valida(parametros)
        const existemErros = erros.length;

        if (existemErros) {
            return new Promise((resolve, reject) => reject(erros))
        }
        else {
            const atendimentoDatado = { ...atendimento, dataCriacao, data }

            return repositorio.adiciona(atendimentoDatado)
                .then(resultados => {
                    const id = resultados.insertId
                    return { ...atendimento, id }
                })
        }

    }

    lista() {
        return repositorio.lista();
    }

    buscaId(id) {
        return repositorio.buscaId(id);
    }

    altera(id, valores, res) {

        if (valores.data) {
            valores.data = moment(valores.data, 'DD/MM/YYYY').format('YYYY-MM-DD HH:MM:SS');
        }

        const sql = 'UPDATE atendimentos SET ? WHERE id=?';

        conexao.query(sql, [valores, id], (erro, resultados) => {
            if (erro) {
                res.status(400).json(erro);
            }
            else {
                res.status(200).json(resultados);
            }
        });
    }

    exclui(id, res) {
        const sql = 'DELETE FROM atendimentos WHERE id=?';

        conexao.query(sql, id, (erro, resultados) => {
            if (erro) {
                res.status(400).json(erro);
            }
            else {
                res.status(200).json({ id });
            }
        });
    }

}

module.exports = new Atendimento;