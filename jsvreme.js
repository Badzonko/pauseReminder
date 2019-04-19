function startTime() {
    var danas = new Date();
    var sat = danas.getHours();
    var minute = danas.getMinutes();
    var sekunde = danas.getSeconds();
    //Add a zero in front of numbers<10
    minute = checkTime(minute);
    sekunde = checkTime(sekunde);
    document.getElementById("clock").innerHTML = sat + " : " + minute + " : " + sekunde;
    var vreme = setTimeout(function(){ startTime() }, 500);
}
function checkTime(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}