var vid = document.querySelector(".video_container > video"),
    txtDisplay = document.querySelector(".txt_display"),
    btnPrev = document.querySelector(".prev"),
    btnNext = document.querySelector(".next"),
    txtPrev = document.querySelector(".prev p"),
    txtNext = document.querySelector(".next p");

var count = 0,
    text = ["The game will randomly chooses 4 colors from the list of 6 provided colors and put them in a random order. <br> <br> Your job is to figure out the 4 colors and the correct spot for each.", "Drag and Drop your chosen colors", "Tap to remove the color", "When you’re done filling out the 4 colors, a NEXT button will show up, press NEXT to continue. <br> <br> The game will give you hints for your next guess.", "The first number of the hint will tell you the number of the correct colors that also at its correct spot compared to the answer key", "The second number will tell you the number of correct colors but at the wrong spot.", "The next line will appear for your next try.  <br> <br> GOOD LUCK!"];

function checkBtn() {
    if (count <= 0) {
        txtPrev.innerHTML = "HOME"
    } else {
        txtPrev.innerHTML = "PREVIOUS"
    }
    if (count < 6) {
        txtNext.innerHTML = "NEXT"
    } else {
        txtNext.innerHTML = "PLAY"
    }
}

function next() {
    count++;
    checkBtn();
    if (count == 7 && txtNext.innerHTML == "PLAY") {
        location.href = "app.html";
        count = 6;

    };
    vid.src = "video/" + count + ".mp4";
    txtDisplay.innerHTML = text[count];
}

function prev() {
    count--;
    checkBtn();
    if (count == -1 && txtPrev.innerHTML == "HOME") {
        location.href = "index.html";
        count = 0;
    };
    vid.src = "video/" + count + ".mp4";
    txtDisplay.innerHTML = text[count];
}