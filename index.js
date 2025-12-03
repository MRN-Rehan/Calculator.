const display = document.getElementById("display");

function ATD(input){
    display.value += input;
}   

function CLEARDISPLAY(){
    display.value = "";
}

function CALCULATE(){
    try{
        display.value = eval(display.value);
    }
    
    catch(error){
        display.value = "Error";
    }
}