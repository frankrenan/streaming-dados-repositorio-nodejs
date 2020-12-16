const express = require('express');
const consign = require('consign');
const bodyparser = require('body-parser'); // traduzir as requisições do POST


module.exports = () => {
    const app = express();

    app.use(bodyparser.urlencoded({extended: true}));
    app.use(bodyparser.json());

    consign()
        .include('controllers')
        .into(app)

    return app;
}

