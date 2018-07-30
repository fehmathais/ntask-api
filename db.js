import Sequelize from 'sequelize';

const config = require('./libs/config');

let sequelize = null;

module.exports = function() {
  if (! sequelize) {
    sequelize = new Sequelize(
      config.database,
      config.username,
      config.password,
      config.params
    )
  }

  return sequelize;
}
