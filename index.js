//lib
const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
//cors
const cors = require("cors");

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
app.use(cors());
// app.use(cors(corsOptions));

//Routes
const route = require("./routes");
route(app);
//env
const PORT = process.env.PORT || 5000;
const HOST = "0.0.0.0";

app.listen(process.env.PORT || 5000, HOST, () =>
    console.log(`Server started on port ${PORT}`)
);