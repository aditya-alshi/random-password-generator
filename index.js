
let passwordDspl = document.getElementById("password-display");
let selectChars = document.getElementById("selectChars");

const numCheckbox = document.getElementById("numbers");
const letterCheckbox = document.getElementById("letters");
const symCheckbox = document.getElementById("symbols")


const lettersList = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

const numbersList = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

const symbolsList = ["~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?", "/"];



function generatePassword(){
    let passwordString = "";
    const checkMap = {
        "numbers" : numbersList,
        "letters" : lettersList,
        "symbols" : symbolsList
    }
     

    let allChars = [];
    for(let key in checkMap){
        if(document.getElementById(key).checked){
            allChars.push(...checkMap[key])
        }
    }

    if(allChars.length === 0){
        passwordString = "No options selected";
    }else if(selectChars.value >= 8 && selectChars.value <= 15){
        for(let e=0; e<selectChars.value; e++){
            let rdindex = Math.floor(Math.random() * allChars.length);
            passwordString += allChars[rdindex];
        }
    }else{
        passwordString = "Select between 8 and 15";
    }

    
    passwordDspl.textContent = passwordString;
}

