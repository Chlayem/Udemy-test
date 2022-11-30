const express = require("express");
const bodyParser = require("body-parser");
const https   = require("https");
const { dirname } = require("path");

const app = express();

app.use(bodyParser.urlencoded({extended:true}));

app.get("/",function(req,res){
    res.sendFile(__dirname+"/index.html"); 
});
app.post("/",function(req,res){
    const query = req.body.city ;
    const appid = "b39d1731890d42b1ab2b2503d2d0aaea"
    const url="https://api.openweathermap.org/data/2.5/weather?q="+query+"&appid="+appid;
    https.get(url,function(response){
        console.log(response.statusCode);
        response.on("data",function(data){
            const weatherData = JSON.parse(data);
            const temp = Math.round(weatherData.main.temp - 273);
            const weatherDescription = weatherData.weather[0].description ;
            const icon = weatherData.weather[0].icon;
            res.write("<p>The weather is currently " +weatherDescription +"</p>");
            res.write("<h1>The temperature in "+query+" is "+ temp + " degrees Celcius</h1>");
            res.write("<img src='http://openweathermap.org/img/wn/"+icon+"@2x.png'>");
            res.send();
        })
    });    
})

app.listen(3000,function(){
    console.log("Server is running on port 3000.");
});