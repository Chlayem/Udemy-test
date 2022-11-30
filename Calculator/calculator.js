const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.urlencoded({extended : true}));

app.get("/",function(req,res){
    res.sendFile(__dirname + "/index.html");
});
app.post("/",function(req,res){
    var num1 = parseFloat(req.body.num1);
    var num2 = parseFloat(req.body.num2);
    var result = num1 + num2 ;
    console.log(num1);

    res.send("The result is "+result);
})
app.get("/bmicalculator",function(req,res){
    res.sendFile(__dirname+"/bmiCalculator.html");
});
app.post("/bmicalculator",function(req,res){
    var h = Number(req.body.height);
    var w = Number(req.body.weight);
    var r = w / h**2 ; 

    res.send("Your BMI is " + r);
})

app.listen(3000,function(){
    console.log("Server is running on port 3000.");
});

