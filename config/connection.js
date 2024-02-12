const { connect, connection } = require('mongoose');

const connectionString = 'mongodb://localhost:27017/NoSQLApi';

connect(connectionString);

module.exports = connection;