let display=document.getElementById("display")
function appendValue(value){
display.value+= value;
}


function clearDisplay(){
    display.value= "";
}

function deleteLast(){
    display.value=display.value.slice(0,-1);
}

function calculate(){
    try{
        display.value=eval(display.value);
    }
    catch(error){
        display.value="Error";
    }

    
}

function square(){
    display.value=Math.pow(Number(display.value),2);

}

function squareRoot(){
   display.value=Math.sqrt(Number(display.value));   
}




