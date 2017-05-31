module.exports = function (app) {
    app.get('/formulario_inclusao_noticia', function (req, res) {
        res.render('admin/form_add_noticia')
    });

    app.post('/noticias/salvar', function (req, res) {
        var formData = req.body;

        var connection = app.config.dbConnection();
        var noticiasModel = new app.app.models.noticiasDAO(connection);

        noticiasModel.salvarNoticia(formData, function (error, result) {
            res.redirect('/noticias');
        });
    });
}