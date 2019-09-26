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
    css.href = "css/about" + pkg.theme + ".css";

    document.head.appendChild(css);
}