const express=require("express");
const bodyParser=require("body-parser");
const date = require(__dirname+"/date.js");

const app=express();
var item ="";
var items =["Taking a shower","Taking breakfast","Going to gym"];
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));

app.set('view engine','ejs');
app.get("/",function(req,res){
    var day = date.getDate();
    res.render('list',{today:day,NewListItem:items});
});
app.post("/",function(req,res){
    item=req.body.newItem;
    items.push(item);
    res.redirect("/");

})
app.listen(3000,function(){
    console.log("Server is running on port 3000.");
})