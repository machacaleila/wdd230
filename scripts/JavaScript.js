
function date(){
    var date = new Date();
    var day = date.getDate();
    var month = date.getMonth()+1;
    var year = date.getFullYear();
    var d = day + "/" + month + "/" + year;
    document.querySelector("date").innerHTML = d;
}
date();

function time(){
    var date= new date();
    var hour = date.getHours();
    var min = date.getMinutes();
    var sec = date.getSeconds();
    
    var time= hour + ":" + min + ":" + sec;
    document.querySelector("time").innerHTML = time;
}
time(); 