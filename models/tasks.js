module.exports = function(app) {
  return {
    findAll: function (params, callback) {
      return callback([
        {title: 'Fazer Compras'},
        {title: 'Consertar PC'}
      ])
    }
  }
};
