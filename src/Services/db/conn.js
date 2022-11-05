require("dotenv").config();
const { MongoClient } = require("mongodb-legacy");
const connectionString = process.env.ATLAS_URI;

const client = new MongoClient(connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
let dbConnection = client.db("DBLabvirtual");

module.exports = {
  getDb: function () {
    return dbConnection;
  },
};