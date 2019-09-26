var detail = document.querySelector(".detail"),
    general = document.querySelector(".general"),
    desc = document.querySelector(".desc"),
    current = document.querySelector(".current"),
    txtCurrent = document.querySelector(".current_theme p"),
    selectedTheme;

var pkg = {
    name: "",
    mode: "normal",
    theme: "light",
    winCount: 0,
}

var spkg = localStorage.pkg;

if (spkg) {
    pkg = JSON.parse(spkg);
}

function themeCheck() {
    var css = document.createElement("link");
    css.type = "text/css";
    css.rel = "stylesheet";
    css.href = "css/theme" + pkg.theme + ".css";

    document.head.appendChild(css);
}

function currentTheme() {
    current.innerHTML = pkg.theme;
    changeColor();
}

function showDetail(theme) {
    general.style.display = "none";
    general.style.opacity = "0";
    detail.style.display = "flex";
    detail.style.opacity = "1";
    selectedTheme = theme;
    var imgs = document.querySelectorAll(".img_container>img");
    imgs[0].src = "img/" + theme + "1.png";
    imgs[1].src = "img/" + theme + "2.png";
    imgs[2].src = "img/" + theme + "3.png";
    desc.innerHTML = "Original theme designed by Enigma Dots"
}

function applyTheme() {
    pkg.theme = selectedTheme;
    localStorage.setItem("pkg", JSON.stringify(pkg));
    detail.style.opacity = "0";
    detail.style.display = "none";
    general.style.display = "flex";
    general.style.opacity = "1";
    themeCheck();
    currentTheme();
}

function back() {
    detail.style.opacity = "0";
    detail.style.display = "none";
    general.style.display = "flex";
    general.style.opacity = "1";
}

function changeColor() {
    if (pkg.theme == "light") {
        txtCurrent.style.color = "black";
        current.style.color = "black";
    } else {
        txtCurrent.style.color = "white";
        current.style.color = "white";
    }
}