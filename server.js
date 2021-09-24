const express = require("express");
const server = express();
const path = require("path");
server.use("/static",express.static("public"));

const BABBAGE_PAGE = "views/babbage.html";
const BERNERS_LEE_PAGE = "views/berners_lee.html";
const CLARKE_PAGE = "views/clarke.html";
const HAMILTON_PAGE = "views/hamilton.html";
const HOPPER_PAGE = "views/hopper.html";
const LOVELACE_PAGE = "views/lovelace.html";
const TURING_PAGE ="views/turing.html";
const PORT = 5000;

server.get("/mensaje",(req,res)=>{
    res.send("Mensaje desde js");
});



server.get("/babbage",(req,res)=>{
    res.sendFile(path.join(__dirname,BABBAGE_PAGE));
});

server.get("/berners_lee",(req,res)=>{
    res.sendFile(path.join(__dirname,BERNERS_LEE_PAGE));
});

server.get("/clarke",(req,res)=>{
    res.sendFile(path.join(__dirname,CLARKE_PAGE));
});

server.get("/hamilton",(req,res)=>{
    res.sendFile(path.join(__dirname,HAMILTON_PAGE));
});

server.get("/hopper",(req,res)=>{
    res.sendFile(path.join(__dirname,HOPPER_PAGE));
});

server.get("/lovelace",(req,res)=>{
    res.sendFile(path.join(__dirname,LOVELACE_PAGE));
});

server.get("/turing",(req,res)=>{
    res.sendFile(path.join(__dirname,TURING_PAGE));
});


server.listen(PORT,()=>{
    console.log("el servidor inicio ok....!!!");
});

