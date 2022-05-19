require("dotenv").config();
const express = require("express")
const bodyParser = require("body-parser")
const mongoose = require("mongoose");

mongoose.connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});


const db = mongoose.connection;

db.once("open", () => console.log("Connected to Database"));
db.on("error", (error) => console.error(error));

const PORT = process.env.PORT || 8080
// Creating express server
const app=express()
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.urlencoded({ extended: true }));

// Importing all the routes
const routes = require("./route/route");

app.use("/",routes)


app.listen((PORT),()=>{
    console.log("Server is Running on: http://localhost:",PORT)
})