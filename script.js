var containerBattery = document.getElementById("battery-container");
var container = document.querySelector(".container");

function battery() {
    let i = 0;
    setInterval(() => {
        containerBattery.innerHTML = `<i class='fa fa-battery-${i}'></i>`;
        i = (i+1)%5;
    }, 400);
}
battery();
function time(){
    var czas = document.getElementById("time");
    const today = new Date();
    let hours = today.getHours();
    let minutes = today.getMinutes();
    let seconds = today.getSeconds();
if(minutes<10){minutes = "0"+minutes}
if(hours<10){hours = "0"+hours}
if(seconds<10){seconds = "0"+seconds}
    czas.innerHTML =  hours+":"+minutes+":"+seconds;
    setTimeout(time,1000);
}
time();

function background(){
    let i = 0;
    setInterval(() => {
        container.style.backgroundImage = `url('img-${i}.jpg')`;
        container.style.transition = 'ease 0.5s';
        i = (i+1)%5;
    }, 7000);
}
background()