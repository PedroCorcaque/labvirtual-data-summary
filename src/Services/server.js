require("dotenv").config();
const express = require("express");
const record = require("./routes/record");

const PORT = 5000;
const app = express();

app.use(record);

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));