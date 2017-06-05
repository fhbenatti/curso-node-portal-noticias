module.exports.formulario_inclusao_noticia = function (app, req, res) {
    res.render('admin/form_add_noticia', {
        validacao: {},
        noticia: {}
    });
}

module.exports.noticias_salvar = function (app, req, res) {
    var formData = req.body;

    req.assert('titulo', 'Título é obrigatorio').notEmpty();
    req.assert('resumo', 'Resumo é obrigatorio').notEmpty();
    req.assert('resumo', 'Resumo deve conter entre 10 e 100 caracteres').len(10, 100);
    req.assert('autor', 'Autor é obrigatorio').notEmpty();
    req.assert('data_noticia', 'Data é obrigatoria').notEmpty().isDate({
        format: 'YYYY-MM-DD'
    });
    req.assert('noticia', 'Notícia é obrigatorio').notEmpty();

    var errors = req.validationErrors();

    if (errors) {
        res.render('admin/form_add_noticia', {
            validacao: errors,
            noticia: formData
        });
        return;
    }

    var connection = app.config.dbConnection();
    var noticiasModel = new app.app.models.noticiasDAO(connection);

    noticiasModel.salvarNoticia(formData, function (error, result) {
        res.redirect('/noticias');
    });
}