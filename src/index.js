//lib
const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
//cors
const cors = require("cors");

//env
const PORT = process.env.PORT;

// MongoDB
const db = require("./config/db");
db.connect();

//name
const app = express();
app.use(express.json());
const corsOptions = {
    origin: "https://xenodochial-brahmagupta-6b5e18.netlify.app/",
    credentials: true, //access-control-allow-credentials:true
    optionSuccessStatus: 200,
};
// app.use(cors());
app.use(cors(corsOptions));

//Routes
const route = require("./routes");
route(app);
//
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));