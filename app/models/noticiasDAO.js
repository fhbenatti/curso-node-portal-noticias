function NoticiasDAO(connection) {
    this._connection = connection;
}

NoticiasDAO.prototype.getNoticias = function(callback) {
    this._connection.query('select * from noticias order by data_criacao desc', callback);
}

NoticiasDAO.prototype.getNoticia = function(id_noticia, callback) {
    this._connection.query('select * from noticias where id_noticia = ' + id_noticia.id_noticia, callback);
}

NoticiasDAO.prototype.get5UltimasNoticias = function(callback) {
    this._connection.query('select * from noticias order by data_criacao desc limit 5', callback);
}

NoticiasDAO.prototype.salvarNoticia = function(formData, callback) {
    var {
        titulo,
        noticia
    } = formData;

    this._connection.query('insert into noticias set ?', formData, callback);
}

module.exports = function () {
    return NoticiasDAO;
}