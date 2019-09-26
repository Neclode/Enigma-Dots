var id = "",
    guessCount = 0,
    correctColor = 0,
    correctPosition = 0,
    answer = [],
    emptyColor = "rgb(230, 230, 230)",
    emptyColorChoice = "rgb(190, 190, 190)",
    colorLineClass = ["color_0", "color_1", "color_2", "color_3", "color_4", "color_5", "color_6"],
    colorArray = [];

var colorChoices = [],
    colorChoicesTarget = [document.querySelector(".red_color"), document.querySelector(".orange_color"), document.querySelector(".yellow_color"), document.querySelector(".green_color"), document.querySelector(".blue_color"), document.querySelector(".violet_color")],
    guessLine = [document.querySelector(".guess_0"), document.querySelector(".guess_1"), document.querySelector(".guess_2"), document.querySelector(".guess_3"), document.querySelector(".guess_4"), document.querySelector(".guess_5"), document.querySelector(".guess_6")],
    hintBox = [document.querySelector(".hint_box_0"), document.querySelector(".hint_box_1"), document.querySelector(".hint_box_2"), document.querySelector(".hint_box_3"), document.querySelector(".hint_box_4"), document.querySelector(".hint_box_5"), document.querySelector(".hint_box_6")],
    txtHint = [document.querySelector(".txt_hint_0"), document.querySelector(".txt_hint_1"), document.querySelector(".txt_hint_2"), document.querySelector(".txt_hint_3"), document.querySelector(".txt_hint_4"), document.querySelector(".txt_hint_5"), document.querySelector(".txt_hint_6")],
    guess = [
        [document.querySelector(".color_0_0"), document.querySelector(".color_0_1"), document.querySelector(".color_0_2"), document.querySelector(".color_0_3")],
        [document.querySelector(".color_1_0"), document.querySelector(".color_1_1"), document.querySelector(".color_1_2"), document.querySelector(".color_1_3")],
        [document.querySelector(".color_2_0"), document.querySelector(".color_2_1"), document.querySelector(".color_2_2"), document.querySelector(".color_2_3")],
        [document.querySelector(".color_3_0"), document.querySelector(".color_3_1"), document.querySelector(".color_3_2"), document.querySelector(".color_3_3")],
        [document.querySelector(".color_4_0"), document.querySelector(".color_4_1"), document.querySelector(".color_4_2"), document.querySelector(".color_4_3")],
        [document.querySelector(".color_5_0"), document.querySelector(".color_5_1"), document.querySelector(".color_5_2"), document.querySelector(".color_5_3")],
        [document.querySelector(".color_6_0"), document.querySelector(".color_6_1"), document.querySelector(".color_6_2"), document.querySelector(".color_6_3")]
    ];

var txtMessage = document.querySelector(".txt_message"),
    colorChoiceArea = document.querySelector(".color_choice_area");
var message = [
    [
        ["", "", "Not a bad try", "Good start", "Amazing start!"],
        ["", "Good try", "One more color!", "Awesome start!", ""],
        ["Two more colors to go", "Awesome first try!", "You found the perfect balance", "", ""],
        ["What an impressive start!", "Almost there on the first try!", "", "", ""],
        ["It's simply miraculous", "", "", "", ""]
    ],
    [
        ["", "", "Don't give up", "It 's getting better!", "You're on the right track"],
        ["", "Good things take time", "Cheer yourself on!", "Show this game who's boss", ""],
        ["You will rock this game", "You're smarter than you believe", "Trust your gut... It knows the answer", "", ""],
        ["The answers are all inside you", "You'll be sucessful the moment you choose to be", "", "", ""],
        ["It's simply miraculous", "", "", "", ""]
    ],
    [
        ["", "", "Inhale confidence, exhale doubts", "Try harder!", "Dazzle this game with all your smartness"],
        ["", "Without passion, you're already dead", "One more color!", "Amazing!", ""],
        ["Keep your chin up, you've got this", "Show what you've known", "Your future is bright", "", ""],
        ["You're in control of your success", "You were 'mint' to suceed!", "", "", ""],
        ["It's simply miraculous", "", "", "", ""]
    ],
    [
        ["", "", "Don't give up!", "You can and you will", "You've worked so hard!"],
        ["", "I believe in you", "Your confidence will carry you through", "You can do hard things!", ""],
        ["Incredible!", "Keep it up!", "This game has no power over you", "", ""],
        ["Brilliant!", "Hurray!", "", "", ""],
        ["It's simply miraculous", "", "", "", ""]
    ],
    [
        ["", "", "Mind-blowing!", "Marvelous!", "Awesome!"],
        ["", "Embrace challenges", "Magnificent!", "Beautiful!", ""],
        ["You're on fire!", "Believing in yourself is the key to success", "You're preserved", "", ""],
        ["You're the brightest star in the sky", "You're in control", "", "", ""],
        ["It's simply miraculous", "", "", "", ""]
    ],
    [
        ["", "", "Success is measured by your effort", "Keep dimbing", "You glow when you show you know!"],
        ["", "It's time to shine", "You can do it", "You're on the way to success", ""],
        ["Make things happen", "Stay determined", "Stupendous!", "", ""],
        ["You're red hot", "It's crunch time", "", "", ""],
        ["It's simply miraculous", "", "", "", ""]
    ],
    [
        ["", "", "", "", ""],
        ["", "", "", "", ""],
        ["", "", "", "", ""],
        ["", "", "", "", ""],
        ["", "", "", "", ""]
    ]
];
for (i = 0; i <= 5; i++) {
    colorChoices.push(window.getComputedStyle(colorChoicesTarget[i], null).backgroundColor);
    colorArray.push(window.getComputedStyle(colorChoicesTarget[i], null).backgroundColor);
}

function createAnswer() {
    randomNumber = 0;
    var randomEmpty = Math.floor(Math.random() * 4)
    answer[randomEmpty] = emptyColor;
    for (i = 0; i <= 3; i++) {
        if (answer[i] != emptyColor) {
            randomNumber = Math.floor(Math.random() * colorArray.length);
            answer[i] = colorArray[randomNumber];
            colorArray.splice(randomNumber, 1);
        }
        console.log(answer[i]);
    }
}

function reapplyColorChoices() {
    for (i = 0; i <= 5; i++) {
        colorChoicesTarget[i].style.backgroundColor = colorChoices[i];
    }
}

function setHeight() {
    for (var i = 0; i <= 5; i++) {
        var colorWidth = parseFloat(window.getComputedStyle(colorChoicesTarget[i], null).getPropertyValue("width"));
        colorChoicesTarget[i].style.height = colorWidth + "px";
    };
}

function allowDrop(ev) {
    ev.preventDefault();
    if (ev.target.classList.contains("color_" + guessCount)) {
        ev.target.style.border = "solid 1px rgb(40, 173, 126)";
        ev.target.addEventListener("dragleave", function() {
            ev.target.style.border = "solid 1px " + window.getComputedStyle(ev.target).backgroundColor;
        });
    }
}

function allowDropColorChoice(ev) {
    ev.preventDefault();
    for (i = 0; i <= 5; i++) {
        colorChoicesTarget[i].style.border = "solid 1px rgb(40, 173, 126)";
    }
    colorChoiceArea.addEventListener("dragleave", function() {
        for (i = 0; i <= 5; i++) {
            colorChoicesTarget[i].style.border = "solid 1px " + window.getComputedStyle(colorChoicesTarget[i]).backgroundColor;
        }
    });
}

function checkDraggable() {
    for (i = 0; i <= 5; i++) {
        if (colorChoicesTarget[i].style.backgroundColor == "" || colorChoicesTarget[i].style.backgroundColor == emptyColorChoice) {
            colorChoicesTarget[i].setAttribute('draggable', false);
        } else {
            colorChoicesTarget[i].setAttribute('draggable', true);
        }
    }
}

function dragStart(type, ev) {
    if (type == "new") {
        targetClass = ev.target.classList[1];
        sourceType = "new";
    } else if (type == "switch") {
        targetClass = ev.target.classList[2];
        sourceType = "switch";
    }
}

function drop(ev) {
    var currentElement = document.querySelector("." + targetClass);
    if (sourceType == "new") {
        if (window.getComputedStyle(currentElement, null).backgroundColor != emptyColorChoice) {
            ev.target.style.backgroundColor = currentElement.style.backgroundColor;
        }
    } else if (sourceType == "switch") {
        if (window.getComputedStyle(currentElement, null).backgroundColor != emptyColor) {
            ev.target.style.backgroundColor = currentElement.style.backgroundColor;
            deleteDuplicate(ev.target);
        }
    }
    for (i = 0; i <= 5; i++) {
        colorChoicesTarget[i].style.backgroundColor = colorChoices[i];
        for (a = 0; a <= 3; a++) {
            if (colorChoicesTarget[i].style.backgroundColor == guess[guessCount][a].style.backgroundColor) {
                deleteColorChoices(colorChoicesTarget[i], emptyColorChoice);
            }
        }
    }
    matchBorder();
    matchBorderColorChoices();
    quantityCheck();
    checkDraggable();
};

function dropColorChoice(ev) {
    var currentElement = document.querySelector("." + targetClass);
    var countCheck = 0;
    for (i = 0; i <= 5; i++) {
        if (currentElement.classList == colorChoicesTarget[i].classList) {
            countCheck++;
        }
    }

    if (countCheck == 0) {
        if (window.getComputedStyle(currentElement, null).backgroundColor != emptyColor) {
            for (i = 0; i <= 5; i++) {
                if (colorChoices[i] == currentElement.style.backgroundColor) {
                    colorChoicesTarget[i].style.background = colorChoices[i];
                }
            }
            currentElement.style.backgroundColor = emptyColor;
        }
        checkDraggable();
        quantityCheck();
    }
    matchBorder();
    matchBorderColorChoices();
}

function matchBorder() {
    for (i = 0; i <= 3; i++) {
        guess[guessCount][i].style.border = "solid 1px " + window.getComputedStyle(guess[guessCount][i]).backgroundColor;
    }
}

function matchBorderColorChoices() {
    for (i = 0; i <= 5; i++) {
        colorChoicesTarget[i].style.border = "solid 1px " + window.getComputedStyle(colorChoicesTarget[i]).backgroundColor;
    }
}

function deleteDuplicate(current) {
    for (i = 0; i <= 3; i++) {
        if (guess[guessCount][i].style.backgroundColor == current.style.backgroundColor) {
            if (guess[guessCount][i] != current) {
                deleteColorChoices(guess[guessCount][i], emptyColor);
            }
        }
    }
}

function removeColor(ev) {
    for (i = 0; i <= 3; i++) {
        if (ev.target == guess[guessCount][i]) {
            if (ev.target.style.backgroundColor != null || ev.target.style.backgroundColor != emptyColor) {
                addColorChoices(ev.target.style.backgroundColor);
                ev.target.style.backgroundColor = emptyColor;
            }
        }
    }
    if (hintBox[guessCount].style.display == "flex") {
        hintBox[guessCount].style.display = "none";
    };
    matchBorder();
    matchBorderColorChoices();
    quantityCheck();
}

function deleteColorChoices(targetClass, color) {
    targetClass.style.backgroundColor = color;
}

function resetColorChoices() {
    for (var i = 0; i <= 5; i++) {
        colorChoicesTarget[i].style.backgroundColor = colorChoices[i];
    }
    matchBorderColorChoices();
    checkDraggable();
}

function addColorChoices(background) {
    for (var i = 0; i <= 5; i++) {
        if (background == colorChoices[i]) {
            colorChoicesTarget[i].style.backgroundColor = background;
        }
    }
    checkDraggable();
}

function quantityCheck() {
    var count = 0;
    for (i = 0; i <= 3; i++) {
        if (guess[guessCount][i].style.backgroundColor == "" || guess[guessCount][i].style.backgroundColor == emptyColor) {
            count += 1;
        }
    }
    if (count == 1) {
        hintBox[guessCount].style.display = "flex";
        hintBox[guessCount].style.backgroundColor = "rgb(40, 173, 126)";
        txtHint[guessCount].innerHTML = "NEXT";
    }
}

function qualityCheck(ev) {
    for (i = 0; i <= 3; i++) {
        guess[guessCount][i].setAttribute('ondrop', false);
    }
    if (hintBox[guessCount].style.backgroundColor == "rgb(40, 173, 126)") {
        correctColor = 0;
        correctPosition = 0;
        for (i = 0; i <= 3; i++) {
            for (a = 0; a <= 3; a++) {
                if (guess[guessCount][a].style.backgroundColor == answer[i]) {
                    if (answer[i] != emptyColor) {
                        if (a == i) {
                            correctPosition += 1;
                        } else {
                            correctColor += 1;
                        }
                    }
                }
            }
        }
        hintBox[guessCount].style.backgroundColor = "rgb(255, 255, 255)";
        txtHint[guessCount].style.color = "black";
        txtHint[guessCount].style.fontSize = "20pt";
        txtHint[guessCount].innerHTML = "<b>" + correctPosition + " </b> - " + correctColor;
        txtMessage.innerHTML = message[guessCount][correctPosition][correctColor];
        guessCount += 1;
        if (guessCount <= 6) {
            guessLine[guessCount].style.opacity = "1";
        }
        resetColorChoices();
        resultCheck();
    }
}

function resultCheck() {
    var pkg = JSON.parse(localStorage.pkg);
    if (correctPosition == 3) {
        pkg.winCount++
        showResult("win");
    } else {
        if (guessCount == 7) {
            showResult("lose");
        }
    }
    localStorage.setItem("pkg", JSON.stringify(pkg));
}

function showResult(res) {
    var page = document.querySelector(".result").style.display = "grid",
        dimmer = document.querySelector(".dimmer").style.opacity = "1",
        resultDisplay = document.querySelector(".result_display").style.transform = "scale(1)";
    var rippon = document.querySelector(".rippon"),
        txtResult = document.querySelector(".txt_result"),
        btnExit = document.querySelector(".exit");
    if (res == "win") {
        rippon.src = "img/win.svg";
        txtResult.innerHTML = "Congratulations!";
    } else if (res == "lose") {
        rippon.src = "img/lose.svg";
        txtResult.innerHTML = "Failed!"
    };
    rippon.style.transform = "scale(1)";
    txtResult.style.transform = "scale(1)";
    btnExit.style.opacity = "1";
}