let currentTurn = "X";
let LastTurn = "O";
let usedButtons = [];

let MitFreundBtn = document.getElementById('MitFreundBtn')
let ComputerBtn = document.getElementById('MitComputerBtn')
let ChooseModeLabel = document.getElementById('ChooseModeLabel')
let WelcomeLabel = document.getElementById('WelcomeLabel')

ButtonOwner = document.getElementById('BtnOwner')

let Button1 = document.getElementById('Btn1')
let Button2 = document.getElementById('Btn2')
let Button3 = document.getElementById('Btn3')
let Button4 = document.getElementById('Btn4')
let Button5 = document.getElementById('Btn5')
let Button6 = document.getElementById('Btn6')
let Button7 = document.getElementById('Btn7')
let Button8 = document.getElementById('Btn8')
let Button9 = document.getElementById('Btn9')

let restartButton = document.getElementById('restartButton')
let ChangeGameModeBtn = document.getElementById('ChangeGameModeBtn')

let WinnerLabel = document.getElementById('WinnerLabel')

let OderLabel = document.getElementById('Oder')

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
}

let colorSetter;


player_1 = "X"
player_2 = "O"


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

        if (colorSetter){
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

    let Btn1Value = document.getElementById('Btn1').innerText;
    let Btn2Value = document.getElementById('Btn2').innerText;
    let Btn3Value = document.getElementById('Btn3').innerText;
    let Btn4Value = document.getElementById('Btn4').innerText;
    let Btn5Value = document.getElementById('Btn5').innerText;
    let Btn6Value = document.getElementById('Btn6').innerText;
    let Btn7Value = document.getElementById('Btn7').innerText;
    let Btn8Value = document.getElementById('Btn8').innerText;
    let Btn9Value = document.getElementById('Btn9').innerText;

    let WinnerLabel = document.getElementById('WinnerLabel');

    if (`${Btn1Value}${Btn2Value}${Btn3Value}` == playerValidationString) {
        colorChanger("1", "2", "3", player)

        setTime(player)
    } else if (`${Btn4Value}${Btn5Value}${Btn6Value}` == playerValidationString) {
        colorChanger("4", "5", "6", player)

        setTime(player)
    } else if (`${Btn7Value}${Btn8Value}${Btn9Value}` == playerValidationString) {
        colorChanger("7", "8", "9", player)

        setTime(player)
    } else if (`${Btn1Value}${Btn4Value}${Btn7Value}` == playerValidationString) {
        colorChanger("1", "4", "7", player)
        
        setTime(player)
    } else if (`${Btn2Value}${Btn5Value}${Btn8Value}` == playerValidationString) {
        colorChanger("2", "5", "8", player)

        setTime(player)
    } else if (`${Btn3Value}${Btn6Value}${Btn9Value}` == playerValidationString) {
        colorChanger("3", "6", "9", player)

        setTime(player)
    } else if (`${Btn1Value}${Btn5Value}${Btn9Value}` == playerValidationString) {
        colorChanger("1", "5", "9", player)

        setTime(player)
    } else if (`${Btn3Value}${Btn5Value}${Btn7Value}` == playerValidationString) {
        colorChanger("3", "5", "7", player)

        setTime(player)
    }
}

function setTime(player) {
    setTimeout(function () {
        alert(player + " hat gewonnen!");
    }, 100);

    setTimeout(restart, 2000);
    return true;
}
function computer() {
    let Btn1Value = document.getElementById('Btn1').innerText;
    let Btn2Value = document.getElementById('Btn2').innerText;
    let Btn3Value = document.getElementById('Btn3').innerText;
    let Btn4Value = document.getElementById('Btn4').innerText;
    let Btn5Value = document.getElementById('Btn5').innerText;
    let Btn6Value = document.getElementById('Btn6').innerText;
    let Btn7Value = document.getElementById('Btn7').innerText;
    let Btn8Value = document.getElementById('Btn8').innerText;
    let Btn9Value = document.getElementById('Btn9').innerText;

    almost_winning_constelation = `${player_2}${player_2}`
    almost_loosing_constelation = `${player_1}${player_1}`

    // The code below is used for Winning when there's the Opportunity Horizontal
    if (`${Btn1Value}${Btn2Value}` === almost_winning_constelation && !usedButtons.includes('Btn3')) {
        changeField('Btn3');
    } else if (`${Btn2Value}${Btn3Value}` === almost_winning_constelation && !usedButtons.includes('Btn1')) {
        changeField('Btn1');
    } else if (`${Btn1Value}${Btn3Value}` === almost_winning_constelation && !usedButtons.includes('Btn2')) {
        changeField('Btn2');
    } else if (`${Btn4Value}${Btn5Value}` === almost_winning_constelation && !usedButtons.includes('Btn6')) {
        changeField('Btn6');
    } else if (`${Btn5Value}${Btn6Value}` === almost_winning_constelation && !usedButtons.includes('Btn4')) {
        changeField('Btn4');
    } else if (`${Btn4Value}${Btn6Value}` === almost_winning_constelation && !usedButtons.includes('Btn5')) {
        changeField('Btn5');
    } else if (`${Btn7Value}${Btn8Value}` === almost_winning_constelation && !usedButtons.includes('Btn9')) {
        changeField('Btn9');
    } else if (`${Btn8Value}${Btn9Value}` === almost_winning_constelation && !usedButtons.includes('Btn7')) {
        changeField('Btn7');
    } else if (`${Btn7Value}${Btn9Value}` === almost_winning_constelation && !usedButtons.includes('Btn8')) {
        changeField('Btn8');
    }

    // The code below is used to win Vertical
    else if (`${Btn1Value}${Btn4Value}` === almost_winning_constelation && !usedButtons.includes('Btn7')) {
        changeField('Btn7');
    } else if (`${Btn4Value}${Btn7Value}` === almost_winning_constelation && !usedButtons.includes('Btn1')) {
        changeField('Btn1');
    } else if (`${Btn1Value}${Btn7Value}` === almost_winning_constelation && !usedButtons.includes('Btn4')) {
        changeField('Btn4');
    } else if (`${Btn2Value}${Btn5Value}` === almost_winning_constelation && !usedButtons.includes('Btn8')) {
        changeField('Btn8');
    } else if (`${Btn5Value}${Btn8Value}` === almost_winning_constelation && !usedButtons.includes('Btn2')) {
        changeField('Btn2');
    } else if (`${Btn2Value}${Btn8Value}` === almost_winning_constelation && !usedButtons.includes('Btn5')) {
        changeField('Btn5');
    } else if (`${Btn3Value}${Btn6Value}` === almost_winning_constelation && !usedButtons.includes('Btn9')) {
        changeField('Btn9');
    } else if (`${Btn6Value}${Btn9Value}` === almost_winning_constelation && !usedButtons.includes('Btn3')) {
        changeField('Btn3');
    } else if (`${Btn3Value}${Btn9Value}` === almost_winning_constelation && !usedButtons.includes('Btn6')) {
        changeField('Btn6');
    }

    // The code below is used for winning Diagonally
    else if (`${Btn1Value}${Btn5Value}` === almost_winning_constelation && !usedButtons.includes('Btn9')) {
        changeField('Btn9');
    } else if (`${Btn5Value}${Btn9Value}` === almost_winning_constelation && !usedButtons.includes('Btn1')) {
        changeField('Btn1');
    } else if (`${Btn1Value}${Btn9Value}` === almost_winning_constelation && !usedButtons.includes('Btn5')) {
        changeField('Btn5');
    } else if (`${Btn3Value}${Btn5Value}` === almost_winning_constelation && !usedButtons.includes('Btn7')) {
        changeField('Btn7');
    } else if (`${Btn5Value}${Btn7Value}` === almost_winning_constelation && !usedButtons.includes('Btn3')) {
        changeField('Btn3');
    } else if (`${Btn7Value}${Btn3Value}` === almost_winning_constelation && !usedButtons.includes('Btn5')) {
        changeField('Btn5');
    }

    // The code below is used for Blocking the Opponent Horizontally
    else if (`${Btn1Value}${Btn2Value}` === almost_loosing_constelation && !usedButtons.includes('Btn3')) {
        changeField('Btn3');
    } else if (`${Btn2Value}${Btn3Value}` === almost_loosing_constelation && !usedButtons.includes('Btn1')) {
        changeField('Btn1');
    } else if (`${Btn1Value}${Btn3Value}` === almost_loosing_constelation && !usedButtons.includes('Btn2')) {
        changeField('Btn2');
    } else if (`${Btn4Value}${Btn5Value}` === almost_loosing_constelation && !usedButtons.includes('Btn6')) {
        changeField('Btn6');
    } else if (`${Btn5Value}${Btn6Value}` === almost_loosing_constelation && !usedButtons.includes('Btn4')) {
        changeField('Btn4');
    } else if (`${Btn4Value}${Btn6Value}` === almost_loosing_constelation && !usedButtons.includes('Btn5')) {
        changeField('Btn5');
    } else if (`${Btn7Value}${Btn8Value}` === almost_loosing_constelation && !usedButtons.includes('Btn9')) {
        changeField('Btn9');
    } else if (`${Btn8Value}${Btn9Value}` === almost_loosing_constelation && !usedButtons.includes('Btn7')) {
        changeField('Btn7');
    } else if (`${Btn7Value}${Btn9Value}` === almost_loosing_constelation && !usedButtons.includes('Btn8')) {
        changeField('Btn8');
    }

    // The code below is used for Blocking the Opponent Vertically
    else if (`${Btn1Value}${Btn4Value}` === almost_loosing_constelation && !usedButtons.includes('Btn7')) {
        changeField('Btn7');
    } else if (`${Btn4Value}${Btn7Value}` === almost_loosing_constelation && !usedButtons.includes('Btn1')) {
        changeField('Btn1');
    } else if (`${Btn1Value}${Btn7Value}` === almost_loosing_constelation && !usedButtons.includes('Btn4')) {
        changeField('Btn4');
    } else if (`${Btn2Value}${Btn5Value}` === almost_loosing_constelation && !usedButtons.includes('Btn8')) {
        changeField('Btn8');
    } else if (`${Btn5Value}${Btn8Value}` === almost_loosing_constelation && !usedButtons.includes('Btn2')) {
        changeField('Btn2');
    } else if (`${Btn2Value}${Btn8Value}` === almost_loosing_constelation && !usedButtons.includes('Btn5')) {
        changeField('Btn5');
    } else if (`${Btn3Value}${Btn6Value}` === almost_loosing_constelation && !usedButtons.includes('Btn9')) {
        changeField('Btn9');
    } else if (`${Btn6Value}${Btn9Value}` === almost_loosing_constelation && !usedButtons.includes('Btn3')) {
        changeField('Btn3');
    } else if (`${Btn3Value}${Btn9Value}` === almost_loosing_constelation && !usedButtons.includes('Btn6')) {
        changeField('Btn6');

        // The code below is used for Blocking the Opponent Diagonally
    } else if (`${Btn1Value}${Btn5Value}` === almost_loosing_constelation && !usedButtons.includes('Btn9')) {
        changeField('Btn9');
    } else if (`${Btn5Value}${Btn9Value}` === almost_loosing_constelation && !usedButtons.includes('Btn1')) {
        changeField('Btn1');
    } else if (`${Btn1Value}${Btn9Value}` === almost_loosing_constelation && !usedButtons.includes('Btn5')) {
        changeField('Btn5');
    } else if (`${Btn3Value}${Btn5Value}` === almost_loosing_constelation && !usedButtons.includes('Btn7')) {
        changeField('Btn7');
    } else if (`${Btn5Value}${Btn7Value}` === almost_loosing_constelation && !usedButtons.includes('Btn3')) {
        changeField('Btn3');
    } else if (`${Btn7Value}${Btn3Value}` === almost_loosing_constelation && !usedButtons.includes('Btn5')) {
        changeField('Btn5');
    } else {

        let randomChoice = Math.floor(Math.random() * 9 + 1)

        if (usedButtons.length < 9) {
            while (usedButtons.includes("Btn" + `${randomChoice}`)) {

                randomChoice = Math.floor(Math.random() * 9 + 1)
            }

            changeField("Btn" + `${randomChoice}`, false);

        } else {
            setTimeout(function () {
                alert("Unentschidenen");
            }, 100);

            setTimeout(restart, 2000);
            return true;
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

        if (gameAttributes.SpieleGegenPC && awaitingPlay) {
            computer()
        }

        tie()
        setLastTurn();

    }
}
function tie() {
    if (usedButtons.length < 9) {
        return false
    } else {
        document.getElementById('WinnerLabel').innerText = "Unentschieden!";

        setTimeout(function () {
            alert("Unentschieden!");
        }, 100);

        setTimeout(restart, 2000);
        return true;
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
    Button1.style.display = `${Attribute}`;
    Button2.style.display = `${Attribute}`;
    Button3.style.display = `${Attribute}`;
    Button4.style.display = `${Attribute}`;
    Button5.style.display = `${Attribute}`;
    Button6.style.display = `${Attribute}`;
    Button7.style.display = `${Attribute}`;
    Button8.style.display = `${Attribute}`;
    Button9.style.display = `${Attribute}`;

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

    if (player === "X"){
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