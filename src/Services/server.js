require("dotenv").config({
    path: "src/Services/config.env"
});
const express = require("express");
const record = require("./routes/record");

const PORT = process.env.PORT;
const app = express();

app.use(express.json());

app.use(record);

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));