const customExpress = require('./config/customExpress');
const conexao = require('./database/conexao');
const Tables = require('./database/tables');

conexao.connect(error => {
    if (error) {
        console.log(error)
    } else {
        console.log('rodando com sucesso');

        Tables.init(conexao);

        const app = customExpress();
        const port = 3000
        app.listen(port, () => console.log(`Servidor rodando em: http://localhost:${port}`));
    }
});


