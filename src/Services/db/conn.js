require("dotenv").config({
  path: "src/Services/config.env"
});
const { MongoClient } = require("mongodb-legacy");

const connectionString = process.env.ATLAS_URI;
const db_name = process.env.DB_NAME

const client = new MongoClient(connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

let dbConnection = client.db(db_name);

module.exports = {
  getDb: function () {
    return dbConnection;
  },
};