function equalsTo(input) {
    var res = eval(input);
    
    if(res.toString().split('.')!=2){
        var verify = res.toString().split('.')[0];
        if(verify.length>8){
            document.getElementById("ShowDisplay").value = "Error";
            return;
        }
        res = res.toFixed(5);
    }
    // 8 digits limit of the display, inclusive of the decimal
    var temp = res.toString().substring(0,8);
    
    // keep original values in the toEval string so that calculations are accurate, 
    // only display is limited
    stringToEval = res;
    
    document.getElementById("showDisplay").value = temp;
    
}

function resetLastDigit(){
    if(operatorUsed === 1){
        reset();
        operatorUsed = 0;
    }
    else{

        displayString = displayString.toString().split(0,displayString.length-1);
        stringToEval = stringToEval.toString().split(0, stringToEval.length-1);
        document.getElementById('showDisplay').value = displayString;
    }
}

function reset() {
    stringToEval = "";
    displayString = "";
    document.getElementById("showDisplay").value = stringToEval;
}

function addToString(input) {
    operatorUsed = 0;
    displayString += input;
    //displayString = parseFloat(displayString);
    stringToEval += input;

    console.log(stringToEval);
    document.getElementById("showDisplay").value = displayString;
}

function add() {

    stringToEval += '+';
    displayString = "";
    operatorUsed = 1;
}

function subtract() {
    stringToEval += '-';
    displayString = "";
    operatorUsed = 1;

}

function multiply() {
    stringToEval += '*';
    displayString = "";
    operatorUsed = 1;
}

function divide() {
    stringToEval += '/';
    displayString = "";
    operatorUsed = 1;

}

function takeSqrt() {
    var temp = eval(stringToEval);
    var root = Math.sqrt(temp);
    displayString = root.toFixed(5);
    stringToEval = root;
    console.log(displayString);
    document.getElementById("showDisplay").value = displayString;

}