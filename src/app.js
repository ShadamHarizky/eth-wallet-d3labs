require('dotenv').config()
const express = require("express");
const ethController = require("./modules/eth/interfaces/eth.controller");

const app = express();
app.use(express.json());

app.use("/api", ethController);

const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
