let hourElem = document.getElementById("hours");
let minElem = document.getElementById("minutes");
let secElem = document.getElementById("second");
let ampmElem = document.getElementById("amPm");

setInterval(function () {

    let date = new Date();
    let hours = date.getHours();
    let sec = date.getSeconds();
    let ampm = "am";

    if (sec == 0) {
        sec = 60;
    };

    if (hours >= 12) {
        ampm = "pm";

        if (hours > 12) {
            hours -= 12;
        };
    };


    hourElem.innerText = hours;
    minElem.innerText = date.getMinutes();
    secElem.innerText = sec;
    ampmElem.innerText = ampm;

}, 1000);

let para = document.querySelector("p");
para.style.color = "#fff";
para.style.backgroundColor="#000"
para.style.width = "100vw";

setInterval(() => {

    let width = para.style.width;

    if (width === "100vw") {
        para.style.width = "10vw";

    } else {

            width=+width.replace("vw","");
            para.style.width=width+10+"vw";
    }
}, 1000);

