=const express = require("express");
const https = require("https")
const app= express();
app.use(express.urlencoded({extended: true}));

app.get ("/" , function (req, res){
   res.sendFile(__dirname + "/index.html");
     });
     app.post("/" , function(req,res){
           const query =req.body.cityName;
           const apiKey ="cbeb3c125067510dcb0d8ecb1ae224a2"
           const units = "metric"

  const url ="https://api.openweathermap.org/data/2.5/weather?q="+query+ "&units=" + units + "&appid=" + apiKey ;
  
  
  https.get (url,function(response){
      console.log(response.statuscode);
     
      response.on("data" , function(data){
      const weatherData = JSON.parse(data)
      const  temp = weatherData.main.temp
      const weatherDescription = weatherData.weather[0].description
      const icon = weatherData.weather[0].icon
      const imageURL="http://openweathermap.org/img/wn/"+ icon+ "@2x.png"
      res.write("<h2>The Temprature in " +query+ " is "+temp +" degree celcuis</h2>")
      res.write("<h2>The Weather currently is "+ weatherDescription +"</h2> ")
      res.write("<img src=" + imageURL + ">");
      res.send()
  }) 
})

     })
  


app.listen(3000, function(){
    console.log("heyy")
})
    
