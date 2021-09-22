const Sequelize = require('sequelize');
require('dotenv').config();

let sequelize;

if ('mysql://kj03iac684e169qz:vawp8ol8cpvvo5d8@nnsgluut5mye50or.cbetxkdyhwsb.us-east-1.rds.amazonaws.com:3306/wy3glm8ynuvbouqn') {
  sequelize = new Sequelize('mysql://kj03iac684e169qz:vawp8ol8cpvvo5d8@nnsgluut5mye50or.cbetxkdyhwsb.us-east-1.rds.amazonaws.com:3306/wy3glm8ynuvbouqn');
} else {
  sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
      host: 'localhost',
      dialect: 'mysql',
      port: 3306
    }
  );
}

module.exports = sequelize;
