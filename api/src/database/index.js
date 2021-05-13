require('dotenv').config();
const mongoose = require('mongoose');

const config = require('../config/database');

class Database {
  constructor() {
    this.mongo();
  }

  mongo() {
    this.mongoConnection = mongoose
      .connect(config.db.connectionString, {
        useNewUrlParser: true,
        useFindAndModify: true,
        useUnifiedTopology: true,
      })
      .then(() => console.log('MongoDB connected.'))
      .catch(err => console.log(err));
  }
}

module.exports = new Database();
