function backtostart(){
    restart()
}



let currentTurn = "X";
let LastTurn = "O";
let usedButtons = [];

let MitFreundBtn = document.getElementById('MitFreund')
let ComputerBtn = document.getElementById('MitComputer')
let ChooseMode = document.getElementById('ChooseMode')
let Welcome = document.getElementById('Welcome')

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
let ChangeGameMode = document.getElementById('ChangeGameMode')

let Label = document.getElementById('WinnerLabel')

let TempLabel = document.getElementById('Oder')

let SpieleGegenFreund;

let SpieleGegenPC;


player_1 = "X"

player_2 = "O"




function getLastTurn() {
    if (currentTurn == "X") {
        LastTurn = "O";
    } else {
        LastTurn = "X";
    }
}
function restart() {
    document.getElementById('Btn1').innerText = 1;
    document.getElementById('Btn2').innerText = 2;
    document.getElementById('Btn3').innerText = 3;
    document.getElementById('Btn4').innerText = 4;
    document.getElementById('Btn5').innerText = 5;
    document.getElementById('Btn6').innerText = 6;
    document.getElementById('Btn7').innerText = 7;
    document.getElementById('Btn8').innerText = 8;
    document.getElementById('Btn9').innerText = 9;

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
        WinnerLabel.innerText = player + " HAT GEWONNEN!";

        setTimeout(function () {
            alert(player + " hat gewonnen!");
        }, 100);

        setTimeout(restart, 2000);
        return true;
    } else if (`${Btn4Value}${Btn5Value}${Btn6Value}` == playerValidationString) {
        WinnerLabel.innerText = player + " HAT GEWONNEN!";

        setTimeout(function () {
            alert(player + " hat gewonnen!");
        }, 100);

        setTimeout(restart, 2000);
        return true;
    } else if (`${Btn7Value}${Btn8Value}${Btn9Value}` == playerValidationString) {
        WinnerLabel.innerText = player + " HAT GEWONNEN!";

        setTimeout(function () {
            alert(player + " hat gewonnen!");
        }, 100);

        setTimeout(restart, 2000);
        return true;
    } else if (`${Btn1Value}${Btn4Value}${Btn7Value}` == playerValidationString) {
        WinnerLabel.innerText = player + " HAT GEWONNEN!";

        setTimeout(function () {
            alert(player + " hat gewonnen!");
        }, 100);

        setTimeout(restart, 2000);
        return true;
    } else if (`${Btn2Value}${Btn5Value}${Btn8Value}` == playerValidationString) {
        WinnerLabel.innerText = player + " HAT GEWONNEN!";

        setTimeout(function () {
            alert(player + " hat gewonnen!");
        }, 100);

        setTimeout(restart, 2000);
        return true;
    } else if (`${Btn3Value}${Btn6Value}${Btn9Value}` == playerValidationString) {
        WinnerLabel.innerText = player + " HAT GEWONNEN!";

        setTimeout(function () {
            alert(player + " hat gewonnen!");
        }, 100);

        setTimeout(restart, 2000);
        return true;
    } else if (`${Btn1Value}${Btn5Value}${Btn9Value}` == playerValidationString) {
        WinnerLabel.innerText = player + " HAT GEWONNEN!";

        setTimeout(function () {
            alert(player + " hat gewonnen!");
        }, 100);

        setTimeout(restart, 2000);
        return true;
    } else if (`${Btn3Value}${Btn5Value}${Btn7Value}` == playerValidationString) {
        WinnerLabel.innerText = player + " HAT GEWONNEN!";

        setTimeout(function () {
            alert(player + " hat gewonnen!");
        }, 100);

        setTimeout(restart, 2000);
        return true;
    }

}
function computer() {
    let fields = ['Btn1', 'Btn2', 'Btn3', 'Btn4', 'Btn5', 'Btn6', 'Btn7', 'Btn8', 'Btn9',]

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


        if (usedButtons.length < 9){
            while (usedButtons.includes("Btn" +  `${randomChoice}`)) {

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

        console.log("Hatt geklappt");

        if (SpieleGegenPC && awaitingPlay) {
            console.log("inside if")
            computer()
        }

        getLastTurn();
        tie()
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
    checkWinner(LastTurn);
}


function defaults(){
restart()



    MitFreundBtn.style.display = "";
    TempLabel.style.display = ""
    ComputerBtn.style.display = "";
    ChooseMode.style.display = "";

ChangeGameMode.style.display = "none";
Button1.style.display = "none";
Button2.style.display = "none";
Button3.style.display = "none";
Button4.style.display = "none";
Button5.style.display = "none";
Button6.style.display = "none";
Button7.style.display = "none";
Button8.style.display = "none";
Button9.style.display = "none";

Label.style.display = "none";

restartButton.style.display = "none";
}

defaults()

function comp() {
    
    MitFreundBtn.style.display = "none";
    TempLabel.style.display = "none"
    ComputerBtn.style.display = "none";
    Welcome.style.display = "none";
    ChooseMode.style.display = "none";


    // 
    ChangeGameMode.style.display = "";
    Button1.style.display = "";
    Button2.style.display = "";
    Button3.style.display = "";
    Button4.style.display = "";
    Button5.style.display = "";
    Button6.style.display = "";
    Button7.style.display = "";
    Button8.style.display = "";
    Button9.style.display = "";

    Label.style.display = "";

    restartButton.style.display = "";

    // Real Code Below

    SpieleGegenPC = true





}

function normal() {
    MitFreundBtn.style.display = "none";
    TempLabel.style.display = "none"
    ComputerBtn.style.display = "none";
    Welcome.style.display = "none";
    ChooseMode.style.display = "none";

    //
    ChangeGameMode.style.display = "";
    Button1.style.display = "";
    Button2.style.display = "";
    Button3.style.display = "";
    Button4.style.display = "";
    Button5.style.display = "";
    Button6.style.display = "";
    Button7.style.display = "";
    Button8.style.display = "";
    Button9.style.display = "";

    Label.style.display = "";

    restartButton.style.display = "";

    SpieleGegenFreund = true
}