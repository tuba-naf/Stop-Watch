var hour=0;
var min=0;
var sec=0;
var msec=0;

var hourheading= document.getElementById('hour');
var minheading= document.getElementById('min');
var secheading= document.getElementById('sec');
var msecheading= document.getElementById('msec');

var start = document.getElementById('start1');
var pause = document.getElementById('pause1');
var reset= document.getElementById('reset1');
var interval;

function startTimer(){
msec ++;
msecheading.innerHTML=msec;
if(msec>=100){
    sec++;
    secheading.innerHTML=sec;
    msec=0;

}
else if(sec>=60){
    min++;
    minheading.innerHTML=min;
    sec=0;

}
else if(min>=60){
    hour++;
    hourheading.innerHTML=hour;
    min=0;
}
}
function startstopwatch(){
    interval=setInterval(startTimer,10)
}
function pausestopwatch (){
    clearInterval(interval)
}
function resetstopwatch (){
 var hour=0;
 var min=0;
 var sec=0;
 var msec=0;
 msecheading.innerHTML=msec;
 secheading.innerHTML=sec;
 minheading.innerHTML=min;
 hourheading.innerHTML=hour;
}
