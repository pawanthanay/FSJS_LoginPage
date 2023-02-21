require("dotenv").config();
const express = require("express");
const app = express()
const authRoutes = require("./routes/authRoutes");
const connectToDB = require("./config/db")




app.use(express.json())
app.use(express.urlencoded({ extended: true }))

connectToDB();
app.use("/", authRoutes);

module.exports = app
