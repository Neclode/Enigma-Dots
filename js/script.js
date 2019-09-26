var username = document.querySelector(".username"),
    dimmer = document.querySelector(".fade"),
    inpName = document.querySelector(".inp_name"),
    txtName = document.querySelector(".txt_name"),
    txtGreeting = document.querySelector(".txt_greeting"),
    txtWhatsup = document.querySelector(".whatsup"),
    modeOption = document.querySelector(".mode_option"),
    settingOption = document.querySelector(".setting_option"),
    normal = document.querySelector(".normal_mode"),
    hard = document.querySelector(".hard_mode");

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

var handler = {
    set: function(obj, props, value) {
        //what to handle to change the UI
        saveSetting()
    }
}


var prox = new Proxy(pkg, handler);

function changeState(type, val) {
    if (type == 'mode') {
        pkg.mode = val;
        prox.mode = pkg.mode;
    }
    if (type == 'name') {
        pkg.name = inpName.value;
        prox.name = pkg.name;
    }
    if (type == 'changeName') {
        pkg.name = "";
        prox.name = pkg.name;
    }
    console.log(pkg);
}

function saveSetting() {
    localStorage.setItem("pkg", JSON.stringify(pkg));
    userCheck();
}

function userCheck() {
    if (pkg.name == "") {
        dimmer.style.visibility = "visible";
        dimmer.style.opacity = "1";
        username.style.visibility = "visible";
        username.style.opacity = "1";
    } else {
        dimmer.style.visibility = "hidden";
        dimmer.style.opacity = "0";
        username.style.visibility = "hidden";
        username.style.opacity = "0";
        txtName.innerHTML = pkg.name;
        txtGreeting.style.opacity = "1";
        txtWhatsup.style.opacity = "1";
    }
}


function popUpOps(event) {
    pkg = JSON.parse(localStorage.pkg);
    if (pkg.mode != "hard") {
        normal.style.fontWeight = "bold";
        hard.style.fontWeight = "normal";
    } else {
        normal.style.fontWeight = "normal";
        hard.style.fontWeight = "bold";
    };
    pkg = JSON.parse(localStorage.pkg);
    if (pkg.winCount == 0) {
        hard.style.color = "gray";
        hard.style.pointerEvents = "none";
        hard.style.cursor = "normal";
    }
    if (modeOption.style.visibility == "visible") {
        modeOption.style.visibility = "hidden";
        modeOption.style.opacity = "0";
    } else {
        modeOption.style.visibility = "visible";
        modeOption.style.opacity = "1";
        event.stopPropagation();
    }
}

function popUpSettings(event) {
    if (settingOption.style.visibility == "visible") {
        settingOption.style.visibility = "hidden";
        settingOption.style.opacity = "0";
    } else {
        settingOption.style.visibility = "visible";
        settingOption.style.opacity = "1";
        event.stopPropagation();
    }
}
window.addEventListener("click", function() {
    if (modeOption.style.visibility == "visible") {
        modeOption.style.visibility = "hidden";
        modeOption.style.opacity = "0";
    }
    if (settingOption.style.visibility == "visible") {
        settingOption.style.visibility = "hidden";
        settingOption.style.opacity = "0";
    }
})

function themeCheck() {
    var css = document.createElement("link");
    css.type = "text/css";
    css.rel = "stylesheet";
    css.href = "css/style" + pkg.theme + ".css";

    document.head.appendChild(css);
}

function showapp() {
    setTimeout(function() {
        document.querySelector(".loading_screen").style.opacity = "0";
        document.querySelector(".loading_screen").style.display = "none";
        document.querySelector(".loadertxt").style.opacity = 0;
        document.querySelector(".loader").style.display = "none";
        document.querySelector(".container").style.opacity = 1;
    }, 1000);

}