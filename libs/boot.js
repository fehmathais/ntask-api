module.exports = function(app) {
  app.db.sync().done(function() {
    app.listen(app.get('port'), function() {
      console.log(`NTask API - porta ${app.get('port')}`);
    });
  });
};
