const express = require("express");
const https = require("https")
const app= express();

app.get ("/" , function (req, res){
    res.send("server is running.")
    const url ="https://api.openweathermap.org/data/2.5/weather?q=delhi&units=metric&appid=cbeb3c125067510dcb0d8ecb1ae224a2"
})


app.listen(3000, function(){
    console.log("heyy nummu")
})