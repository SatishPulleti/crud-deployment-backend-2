
const express = require("express");
const mongoose = require("mongoose");
const studentRoute = require("./controller/studentRoute");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

mongoose.set("strictQuery", true);
mongoose.connect("mongodb+srv://crud:crud123@cluster0.hb1p4gk.mongodb.net/schooldb");
// mongoose.connect("mongodb+srv://test:12345@cluster0.bkk3fg5.mongodb.net/schooldb");  //sir's database

var db = mongoose.connection;
db.on("open", ()=>console.log("Connected to db"));
db.on("error", ()=>console.log("Error occured"));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(cors());

app.use("/studentRoute", studentRoute);

app.listen(4000, ()=>{
    console.log("Server started at 4000");
})