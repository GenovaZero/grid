var prev = document.getElementById("prev");
var next = document.getElementById("next");
var ts = document.getElementById("ts");
var dc = document.getElementById("dc");
var thumbnail = document.getElementsByClassName("thumbnail");
var hero = document.getElementById("hero");

var backgroundImg = new Array(
    "media/background.jpg",
    "media/background1.png",
    "media/background2.png",
    "media/background3.png",
    "media/background4.png"
);

let i = 1;
next.onclick = function() {
    if(i < 4) {
        hero.style.backgroundImage = 'url("'+backgroundImg[i+1]+'")';
        thumbnail[i + 1].classList.add("active");
        thumbnail[i].classList.remove("active");
        i++;
    }
}

prev.onclick = function() {
    if(i > 0) {
        hero.style.backgroundImage = 'url("'+backgroundImg[i-1]+'")';
        thumbnail[i - 1].classList.add("active");
        thumbnail[i].classList.remove("active");
        i--;
    }
}

ts.onclick = function() {
    window.location.href = "ts3server://sgpts.gameservers.com:9109"
}

dc.onclick = function() {
    window.location.href = "https://discord.gg/YZarKVW"
}