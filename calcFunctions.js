function equalsTo(input) {
    var res = eval(input);
    document.getElementById("showDisplay").value = res;
}

function reset() {
    stringToEval = "";
    document.getElementById("showDisplay").value = stringToEval;
}

function addToString(input) {
    displayString += input;
    //displayString = parseFloat(displayString);
    stringToEval += input;

    console.log(stringToEval);
    document.getElementById("showDisplay").value = displayString;
}

function add() {

    stringToEval += '+';
    displayString = "";
}

function subtract() {
    stringToEval += '-';
    displayString = "";

}

function multiply() {
    stringToEval += '*';
    displayString = "";

}

function divide() {
    stringToEval += '/';
    displayString = "";

}

function takeSqrt() {
    stringToEval += '+';
    displayString = "";

}