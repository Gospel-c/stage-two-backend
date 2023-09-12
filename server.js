const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const app = require("./app");

dotenv.config({ path: "./config.env" });

const PORT = process.env.PORT;
const DB = process.env.DATABASE.replace(
    '<PASSWORD>',
    process.env.DB_PASSWORD
  );

mongoose.connect(DB)
    .then(() => {
        console.log("database connected successfully");
    }).catch(error => {
        console.error("error connecting to database", error);
    });

app.listen(PORT, () => {
    console.log(`We are live! App running at ${PORT}`); 
});