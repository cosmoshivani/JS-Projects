function jsClock() {
    let date = new Date();
    let hh = date.getHours();
    let mm = date.getMinutes();
    let ss = date.getSeconds();
    let zone = "AM";

    if (hh == 0) {
        hh = 12;
    }

    if (hh >= 12) {
        hh = hh - 12;
        zone = "PM";
    }


    hh = (hh < 10) ? "0" + hh : hh;
    mm = (mm < 10) ? "0" + mm : mm;
    ss = (ss < 10) ? "0" + ss : ss;

    let time = hh + ":" + mm + ":" + ss + " " + zone;

    document.getElementById("clock").innerText = time;
    document.getElementById("clock").textContent = time;
    let t = setTimeout(function () { jsClock() }, 1000);
}

jsClock();

