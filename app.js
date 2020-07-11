var min = 00;
var sec= 00;
var msec=00;
var flag=0;

var minhead=document.getElementById("nummin");
var sechead=document.getElementById("numsec");
var msechead=document.getElementById("nummil");
var interval;
function timer(){
    msec++
msechead.innerHTML=msec;
if(msec >=100){
    sec++
    sechead.innerHTML=sec;
    msec=0;
}
else if(sec>=60){
    min++
    minhead.innerHTML=min;
    sec=0
}
}
function start(){
    var a=document.getElementById("nummin")
    a.classList.remove("stt")
    var b=document.getElementById("numsec")
    b.classList.remove("stt")
    var c=document.getElementById("nummil")
    c.classList.remove("stt")
    
interval=setInterval(timer, 10);
flag=1
if(flag==1){
    var bt=document.getElementById("btnst").disabled=true;
    }
    
}
function pause(){
    
    clearInterval(interval)
    flag=0;
    var a=document.getElementById("nummin")
    a.classList.add("stt")
    var b=document.getElementById("numsec")
    b.classList.add("stt")
    var c=document.getElementById("nummil")
    c.classList.add("stt")
    if(flag==0){
        var bt=document.getElementById("btnst").disabled=false;  
    }
    
}
function reset(){
    min=00;
    sec=00;
    msec=00;
    minhead.innerHTML=min;
    sechead.innerHTML=sec;
    msechead.innerHTML=msec;
    stop()
    
}
var date=new Date();
var get=document.getElementById("dtee");
get.innerHTML=date