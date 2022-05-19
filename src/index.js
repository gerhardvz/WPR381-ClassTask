const express = require("express")
const bodyParser = require("body-parser")

const PORT = process.env.PORT || 8080
// Creating express server
const app=express()
app.use(express.json());

app.use(bodyParser.urlencoded({ extended: true }));

// Importing all the routes
const routes = require("./route/route");

app.use("/",routes)


app.listen((PORT),()=>{
    console.log("Server is Running on: http://localhost:",PORT)
})