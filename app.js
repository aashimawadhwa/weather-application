const express = require("express");
const https = require("https")
const app= express();

app.get ("/" , function (req, res){
   
    const url ="https://api.openweathermap.org/data/2.5/weather?q=delhi&units=metric&appid=cbeb3c125067510dcb0d8ecb1ae224a2"
    
    
    https.get (url,function(response){
        console.log(response.statuscode);
       
        response.on("data" , function(data){
        const weatherData = JSON.parse(data)
        const  temp = weatherData.main.temp
        const weatherDescription = weatherData.weather[0].description
        res.write("<h1>The Temprature in Delhi is "+temp +" degree celcuis</h1>")
        res.write("<h2>The Temprature description is "+ weatherDescription +"</h2> ")

        res.send()
    }) 
     })
  })

app.listen(3000, function(){
    console.log("heyy nummu")
})
    