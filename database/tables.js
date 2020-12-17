class Tables {

    init(conexao) {
        this.conexao = conexao;
        this.criarAtendimentos();
        this.criarPets();
    }

    criarAtendimentos() {
        const sql = 'CREATE TABLE IF NOT EXISTS atendimentos (id int NOT NULL auto_increment, cliente varchar(50) NOT NULL, pet varchar(50), servico varchar(50) NOT NULL, data datetime NOT NULL, dataCriacao datetime NOT NULL, status varchar(20) NOT NULL, observacoes text, PRIMARY KEY (id))'

        this.conexao.query(sql, error => {
            if (error) {
                console.log(error);
            }
            else {
                console.log('Tabelas atendimentos criadas com sucesso!');
            }
        });
    }

    criarPets() {
        const query = 'CREATE TABLE IF NOT EXISTS pets (id int NOT NULL AUTO_INCREMENT, nome varchar(50), imagem varchar(200), PRIMARY KEY(id))';

        this.conexao.query(query, (erro) => {
            if (erro){
                console.log(erro);
            }
            else{
                console.log('Tabela PETS criada com sucesso!');
            }
        });
    }

}

module.exports = new Tables;