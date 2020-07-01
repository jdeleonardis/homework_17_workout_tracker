const db = require("../models");
var path = require("path");

module.exports = function(app){
    app.get("/", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/index.html"));
    });  

    // app.get("*", function (req, res) {
    //     res.sendFile(path.join(__dirname, "../public/index.html"));
    // });     
  
    app.get("/exercise", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/exercise.html"));
    });

    app.get("/stats", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/stats.html"));
    });    

    //app.get("/exercise?", function (req, res) {      in index.html!!
    //    res.sendFile(path.join(__dirname, "../public/exercise.html"));
    //});    
};