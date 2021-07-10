const express = require("express");
const https = require("https")
const app= express();

app.get ("/" , function (req, res){
   
    const url ="https://api.openweathermap.org/data/2.5/weather?q=delhi&units=metric&appid=cbeb3c125067510dcb0d8ecb1ae224a2"
    
    
    https.get (url,function(response){
        console.log(response.statuscode);
       
        response.on("data" , function(data){
        const weatherData = JSON.parse(data)
        const object={
            name:"Jaadu",
            favoriteFood:"baraf"
        }
      console.log(  JSON.stringify(object));
        })

    })
    res.send("server is running.")
})

app.listen(3000, function(){
    console.log("heyy nummu")
})
