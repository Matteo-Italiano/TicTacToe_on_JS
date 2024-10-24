let currentTurn = "X";
let LastTurn = "O";
let usedButtons = [];

let player_1 = "X"
let player_2 = "O"

let MitFreundBtn = document.getElementById('MitFreundBtn')
let ComputerBtn = document.getElementById('MitComputerBtn')
let ChooseModeLabel = document.getElementById('ChooseModeLabel')
let WelcomeLabel = document.getElementById('WelcomeLabel')

ButtonOwner = document.getElementById('BtnOwner')

let restartButton = document.getElementById('restartButton')
let ChangeGameModeBtn = document.getElementById('ChangeGameModeBtn')

let WinnerLabel = document.getElementById('WinnerLabel')

let OderLabel = document.getElementById('Oder')

let colorSetter;

let gameAttributes = {
    SpieleGegenPC: false
};

let Buttons = {
    Button1: document.getElementById('Btn1'),
    Button2: document.getElementById('Btn2'),
    Button3: document.getElementById('Btn3'),
    Button4: document.getElementById('Btn4'),
    Button5: document.getElementById('Btn5'),
    Button6: document.getElementById('Btn6'),
    Button7: document.getElementById('Btn7'),
    Button8: document.getElementById('Btn8'),
    Button9: document.getElementById('Btn9'),

    almost_winning_constelation: `${player_2}${player_2}`,
    almost_loosing_constelation: `${player_1}${player_1}`
}
function setLastTurn() {
    if (currentTurn == "X") {
        LastTurn = "O";
    } else {
        LastTurn = "X";
    }
    checkWinner(LastTurn)
}
function defaultColor() {
    for (let count = 1; count <= 9; count++) {
        colorSetter = Buttons[`Button${count}`];

        if (colorSetter) {
            colorSetter.style.background = "antiquewhite";
        } else {
            console.warn(`Button${count} not found`)
        }
    }
}
function restart() {
    document.getElementById('Btn1').innerText = "";
    document.getElementById('Btn2').innerText = "";
    document.getElementById('Btn3').innerText = "";
    document.getElementById('Btn4').innerText = "";
    document.getElementById('Btn5').innerText = "";
    document.getElementById('Btn6').innerText = "";
    document.getElementById('Btn7').innerText = "";
    document.getElementById('Btn8').innerText = "";
    document.getElementById('Btn9').innerText = "";
    defaultColor()

    usedButtons = [];
    currentTurn = "X";
    document.getElementById('WinnerLabel').innerText = "Niemand hat gewonnen";
}
function checkWinner(player) {
    let playerValidationString = `${player}${player}${player}`;

    if (`${Buttons.Button1.innerText}${Buttons.Button2.innerText}${Buttons.Button3.innerText}` == playerValidationString) {
        colorChanger("1", "2", "3", player)
        setTimeOut(player, " hat gewonnen!")

    } else if (`${Buttons.Button4.innerText}${Buttons.Button5.innerText}${Buttons.Button6.innerText}` == playerValidationString) {
        colorChanger("4", "5", "6", player)
        setTimeOut(player, " hat gewonnen!")

    } else if (`${Buttons.Button7.innerText}${Buttons.Button8.innerText}${Buttons.Button9.innerText}` == playerValidationString) {
        colorChanger("7", "8", "9", player)
        setTimeOut(player, " hat gewonnen!")

    } else if (`${Buttons.Button1.innerText}${Buttons.Button4.innerText}${Buttons.Button7.innerText}` == playerValidationString) {
        colorChanger("1", "4", "7", player)
        setTimeOut(player, " hat gewonnen!")

    } else if (`${Buttons.Button2.innerText}${Buttons.Button5.innerText}${Buttons.Button8.innerText}` == playerValidationString) {
        colorChanger("2", "5", "8", player)
        setTimeOut(player, " hat gewonnen!")

    } else if (`${Buttons.Button3.innerText}${Buttons.Button6.innerText}${Buttons.Button9.innerText}` == playerValidationString) {
        colorChanger("3", "6", "9", player)
        setTimeOut(player, " hat gewonnen!")

    } else if (`${Buttons.Button1.innerText}${Buttons.Button5.innerText}${Buttons.Button9.innerText}` == playerValidationString) {
        colorChanger("1", "5", "9", player)
        setTimeOut(player, " hat gewonnen!")

    } else if (`${Buttons.Button3.innerText}${Buttons.Button5.innerText}${Buttons.Button7.innerText}` == playerValidationString) {
        colorChanger("3", "5", "7", player, )
        setTimeOut(player, "hat gewonnen!")
    }
}
function setTimeOut(player, Text) {
    setTimeout(function () {
        alert(player + Text);
    }, 100);

    setTimeout(restart, 2000);
    return true;
}
function InteligentComputer(First, Second, Third, Constelation) {
    let Premiere = Buttons[`Button${First}`]
    let Deuxieme = Buttons[`Button${Second}`]
    let Troisieme = Buttons[`Button${Third}`]

    let almost = Buttons[`almost_${Constelation}_constelation`]

    if (`${Premiere.innerText}${Deuxieme.innerText}` === almost && !usedButtons.includes(`Btn${Third}`)) {
        changeField(`Btn${Third}`)
        return true
    }
    else if (`${Premiere.innerText}${Troisieme.innerText}` === almost && !usedButtons.includes(`Btn${Second}`)) {
        changeField(`Btn${Second}`)
        return true
    }
    else if (`${Deuxieme.innerText}${Troisieme.innerText}` === almost && !usedButtons.includes(`Btn${First}`)) {
        changeField(`Btn${First}`)
        return true
    } else {
        return false
    }
}
function computer() {
    function WinOrLoose(Condition) {
        // The code below is used for when there's the Opportunity Horizontal
        if (InteligentComputer("1", "2", "3", Condition)) {
            return true
        } else if (InteligentComputer("4", "5", "6", Condition)) {
            return true
        } else if (InteligentComputer("7", "8", "9", Condition)) {
            return true
        }
        // The code below is used to Vertical
        else if (InteligentComputer("1", "4", "7", Condition)) {
            return true
        } else if (InteligentComputer("2", "5", "8", Condition)) {
            return true
        } else if (InteligentComputer("3", "6", "9", Condition)) {
            return true
        }
        // The code below is used for Diagonally
        else if (InteligentComputer("1", "5", "9", Condition)) {
            return true
        } else if (InteligentComputer("7", "5", "3", Condition)) {
            return true
        }
    }  if (WinOrLoose("winning")) {
        return
    } else if (WinOrLoose("loosing")) {
        return
    } else {
        let randomChoice = Math.floor(Math.random() * 9 + 1)

        if (usedButtons.length < 9) {
            while (usedButtons.includes("Btn" + `${randomChoice}`)) {

                randomChoice = Math.floor(Math.random() * 9 + 1)
            }
            changeField("Btn" + `${randomChoice}`, false);
        } else {
            tie()
        }
    }
}
function changeField(Button, waitingforplay) {
    let currentField = document.getElementById(Button);
    let awaitingPlay = waitingforplay

    if (usedButtons.includes(Button)) {
        alert("Dieses Feld ist schon vergeben");
    } else {
        currentField.innerText = currentTurn;
        usedButtons.push(Button);

        if (currentTurn == "X") {
            currentTurn = "O";
        } else {
            currentTurn = "X";
        }

        setLastTurn();
        if (gameAttributes.SpieleGegenPC && awaitingPlay) {
            computer()
        }
        tie()
    }
}
function tie() {
    if (usedButtons.length < 9) {
        return false
    } else {
        document.getElementById('WinnerLabel').innerText = "Unentschieden!";
        setTimeOut("Unentschieden!", "")
    }
}
function changeFieldAndCheckWinner(Button) {
    changeField(Button, true);
}
function comp() {
    ChangeSelectorAttribute("none")
    ChangeGameAttribute("", "PC", true)
}
function normal() {
    ChangeSelectorAttribute("none")
    ChangeGameAttribute("")
}
function defaults() {
    restart()

    ChangeSelectorAttribute("")
    ChangeGameAttribute("none", "PC", false)
}
defaults()

function ChangeGameAttribute(Attribute, Mode, Boole) {
    Buttons.Button1.style.display = `${Attribute}`;
    Buttons.Button2.style.display = `${Attribute}`;
    Buttons.Button3.style.display = `${Attribute}`;
    Buttons.Button4.style.display = `${Attribute}`;
    Buttons.Button5.style.display = `${Attribute}`;
    Buttons.Button6.style.display = `${Attribute}`;
    Buttons.Button7.style.display = `${Attribute}`;
    Buttons.Button8.style.display = `${Attribute}`;
    Buttons.Button9.style.display = `${Attribute}`;

    ChangeGameModeBtn.style.display = `${Attribute}`;
    ButtonOwner.style.display = `${Attribute}`;

    WinnerLabel.style.display = `${Attribute}`;
    restartButton.style.display = `${Attribute}`;

    gameAttributes[`SpieleGegen${Mode}`] = Boole
}
function colorChanger(First, Second, Third, player) {
    let playercolor;

    let Premiere = Buttons[`Button${First}`]
    let Deuxieme = Buttons[`Button${Second}`]
    let Troisieme = Buttons[`Button${Third}`]

    if (player === "X") {
        playercolor = "red"
    } else {
        playercolor = "green"
    }
    Premiere.style.background = `${playercolor}`
    Deuxieme.style.background = `${playercolor}`
    Troisieme.style.background = `${playercolor}`

    WinnerLabel.innerText = player + " HAT GEWONNEN!";
}
function ChangeSelectorAttribute(Attribute) {
    ChooseModeLabel.style.display = `${Attribute}`;
    MitFreundBtn.style.display = `${Attribute}`;
    OderLabel.style.display = `${Attribute}`;
    ComputerBtn.style.display = `${Attribute}`;
    WelcomeLabel.style.display = `${Attribute}`;
}