const query = require('../database/queries')
const moment = require('moment');

class Atendimento {
    adiciona(atendimento) {
        const sql = 'INSERT INTO atendimentos SET ?';

        return query(sql, atendimento);

    }

    lista() {
        const sql = 'SELECT * from atendimentos';

        return query(sql);
    }

    buscaId(id) {
        const sql = `SELECT * FROM atendimentos WHERE id = ${id}`;

        return query(sql, id);
    }

    altera(id, valores) {
        if (valores.data) {
            valores.data = moment(valores.data, 'DD/MM/YYYY').format('YYYY-MM-DD HH:MM:SS')
        }

        const sql = 'UPDATE atendimentos SET ? WHERE id=?'

        return query(sql, [valores, id]);
    }

    exclui (id) {
        const sql = 'DELETE FROM atendimentos WHERE id=?'

        return query(sql, id)
    }
}

module.exports = new Atendimento();