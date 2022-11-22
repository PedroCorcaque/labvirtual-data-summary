require("dotenv").config({
    path: "src/Services/config.env"
});
const express = require("express");
const dbo = require("../db/conn");

const db_collection = process.env.DB_COLLECTION

// recordRoutes is an instance of the express router.
// We use it to define our routes.
// The router will be added as a middleware and will take control of requests starting with path /readings.
const recordRoutes = express.Router();

recordRoutes.route("/readings").get(async (request, response) => {
    const dbConnect = dbo.getDb();
  
    dbConnect
        .collection(db_collection)
        .find({}).limit(10)
        .toArray((error, result) => {
            if (error) {
                response.status(error.status).send(error.message);
            } else {
                response.json(result);
            }
        });
  });

recordRoutes.route("/readings").post(async (request, response) => {
    const dbConnect = dbo.getDb();
    
    dbConnect
        .collection(db_collection)
        .findOne({
            "_id": request.body.id
        }, (error, result) => {
            if (error) {
                response.status(error.code).send(error.message);
            } else {
                response.json(result);
            }
        });
});

module.exports = recordRoutes;