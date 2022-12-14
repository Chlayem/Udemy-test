
module.exports.getDate = getDate ;

function getDate(){
    var d = new Date();
    var options ={weekday:"long",day:"numeric",month:"long",year:"numeric"};
    var day= d.toLocaleDateString("en-US",options);
 
    return day ;
}

exports.getDay = function (){
    var d = new Date();
    var options ={weekday:"long"};
    var day= d.toLocaleDateString("en-US",options);
 
    return day ;
}