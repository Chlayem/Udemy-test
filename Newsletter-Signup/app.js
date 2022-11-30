const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");
const https = require("https");

const app = express();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:true}));

app.get("/",function(req,res){
    res.sendFile(__dirname+"/signup.html");
})

app.post("/",function(req,res){
    var firstName = req.body.Fname ;
    var lastName  = req.body.Lname ;
    var email     = req.body.email ;
    var data= {
        members :[
            {
                email_address: email ,
                status: "subscribed",
                merge_fields:{
                    FNAME: firstName,
                    LNAME:lastName
                }
            }
        ]
    };
    var JSONdata = JSON.stringify(data);
    const url="https://us21.api.mailchimp.com/3.0/lists/0a634d08c3";
    const options={
        method: "POST",
        auth: "chedi:7129607c93a73d309fe5e3afd7bcb970-us21"
    };
    const request=https.request(url,options,function(response){
        if(response.statusCode==200){
            res.sendFile(__dirname+"/success.html");
        }else{
            res.sendFile(__dirname+"/failure.html");
        }
        response.on("data",function(data){
            console.log(JSON.parse(data));
        })
    });
    request.write(JSONdata);
    request.end();
})
app.post("/failure",function(req,res){
    res.redirect("/");
})
app.listen(3000,function(){
    console.log("Server is running on port 3000.");
})




//7129607c93a73d309fe5e3afd7bcb970-us21

//0a634d08c3
