function NoticiasDAO(connection) {
    this._connection = connection;
}

NoticiasDAO.prototype.getNoticias = function(callback) {
    this._connection.query('select * from noticias', callback);
}

NoticiasDAO.prototype.getNoticia = function(callback) {
    this._connection.query('select * from noticias where id_noticia = 1', callback);
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