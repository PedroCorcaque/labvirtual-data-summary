const express = require("express");
const dbo = require("../db/conn");

// recordRoutes is an instance of the express router.
// We use it to define our routes.
// The router will be added as a middleware and will take control of requests starting with path /readings.
const recordRoutes = express.Router();

recordRoutes.route("/readings").get(async (req, res) => {
    const dbConnect = dbo.getDb();
  
    dbConnect
        .collection("Dados_Sensores")
        .find({}).limit(10)
        .toArray(function (err, result) {
            if (err) {
            res.status(400).send("Error fetching readings!");
        } else {
            res.json(result);
            }
        });
  });

recordRoutes.route("/readings").post(async (req, res) => {
    const dbConnect = dbo.getDb();
    const collection = dbConnect.collection("Dados_Sensores");
    
    dbConnect
        .collection("Dados_Sensores")
        .findOne({
            "_id": req.query.id
        }, (err, result) => {
            if (err) {
                res.status(400).send("Error fetching readings by id!");
            } else {
                res.json(result);
            }
        });
});

module.exports = recordRoutes;