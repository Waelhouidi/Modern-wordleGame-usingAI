let gameName="Word Game"
document.title=gameName;
document.querySelector("h1").innerHTML=gameName;
document.querySelector("footer").innerHTML=(`${gameName} created by  wael Houidi And don't forget to buy for a coffee`);


//table of words for my game
let words=["Email","Cloud","Linux","Virus","Router","Debug"];
let wordToGuess=words[Math.floor(Math.random()*words.length)].toLowerCase();
//for testing in validet exam
console.log(wordToGuess);
//Game area settings
let numbersOftry=5;
let numberOfinput=5;
let  tryCount=1;
 function generateInput(){
    const inputsContainer= document.querySelector(".inputs");

    for(let i=1;i<=numbersOftry;i++){
        const tryDiv=document.createElement("div");
        tryDiv.classList.add(`try-${i}`);
        tryDiv.innerHTML=`<span>try ${i}</span>`;
        if(i!==1){
            tryDiv.classList.add("disabled-inputs")
        }
        for(let j=1;j<=numberOfinput;j++){
            const inputField =document.createElement('input');
            inputField.setAttribute("type","text");
            inputField.id = `guess${i}-lettre${j}`;
            inputField.setAttribute("maxlength","1");
            tryDiv.appendChild(inputField);
        }
      

       inputsContainer.appendChild(tryDiv);
    }
    inputsContainer.children[0].children[1].focus();
    
    //disabled all inputs expecte first one 
    const inputsInDisabledDIv=document.querySelectorAll(".disabled-inputs input");
    inputsInDisabledDIv.forEach((input, index)=>(input.disabled=true));
    const inputs=document.querySelectorAll(".inputs input");
    inputs.forEach((input,index)=>{
        //make input uppercase
        input.addEventListener("input",function(){
            this.value = this.value.toUpperCase();
            //next input
            const nextInput=inputs[index+1];
            if(nextInput) nextInput.focus();
        });
    });
     }
     const handlButton=document.querySelector(".check");
     handlButton.addEventListener("click",handelGeusses);
function handelGeusses(){
  let win=true;
  for(let i=1;i<=numberOfinput;i++){
    const inputCarent = document.querySelector(`#guess${tryCount}-lettre${i}`);
    const letter=inputCarent.value.toLowerCase();
    const actualLetter= wordToGuess[i-1];
    //cheking wordds now
    if(letter===actualLetter){
        inputCarent.classList.add("correct");
    }else if(wordToGuess.includes(letter)&&letter!==""){
        inputCarent.classList.add("false-place");
        win=false;
    }else{
        inputCarent.classList.add("wrong");
        win=false;
    }
  }
  if(win){
    console.log("Bravo vous avez gagn");

  }
}
const voiceInputButton = document.getElementById('voiceInputButton');

voiceInputButton.addEventListener('click', () => {
    const recognition = new webkitSpeechRecognition() || new SpeechRecognition(); // Initialize speech recognition
    recognition.lang = 'en-US'; // Set recognition language

    recognition.onresult = function(event) {
        const spokenText = event.results[0][0].transcript.toLowerCase(); // Get recognized text
        fillInputWithSpokenText(spokenText); // Call function to fill input with spoken text
    };

    recognition.start(); // Start speech recognition
});

function fillInputWithSpokenText(spokenText) {
    const inputs = document.querySelectorAll('.inputs input');
    const letters = spokenText.split('');
    
    // Fill input fields with recognized letters
    letters.forEach((letter, index) => {
        if (inputs[index]) {
            inputs[index].value = letter.toUpperCase();
        }
    });
}





//setting language  
const en = {
    gameName: "Word Game",
    createdByText: "created by Wael Houidi. Don't forget to buy me a coffee!",
    checkButtonText: "Check Word",
    helpButtonText: "Help me",
    keyColorTitle: "Key Color",
    correctKeyText: "correct",
    falsePlaceKeyText: "correct character but wrong place",
    wrongKeyText: "wrong character"
};

const fr = {
    gameName: "Jeu de mots",
    createdByText: "créé par Wael Houidi. N'oubliez pas de m'acheter un café !",
    checkButtonText: "Vérifier le mot",
    helpButtonText: "Aidez-moi",
    keyColorTitle: "Couleurs clés",
    correctKeyText: "correct",
    falsePlaceKeyText: "caractère correct mais mauvaise place",
    wrongKeyText: "caractère incorrect"
};

let currentLanguage = en;

function updateLanguage() {
    document.title = currentLanguage.gameName;
    document.querySelector("h1").textContent = currentLanguage.gameName;
    document.querySelector("footer").textContent = currentLanguage.createdByText;
    document.querySelector(".check.buttons .check").textContent = currentLanguage.checkButtonText;
    document.querySelector(".check.buttons .help span").textContent = currentLanguage.helpButtonText;
    document.querySelector(".key-colors h2").textContent = currentLanguage.keyColorTitle;
    document.querySelector(".key.correct + .key-text").textContent = currentLanguage.correctKeyText;
    document.querySelector(".key.false-place + .key-text").textContent = currentLanguage.falsePlaceKeyText;
    document.querySelector(".key.wrong + .key-text").textContent = currentLanguage.wrongKeyText;
}

document.getElementById("language-select").addEventListener("change", function() {
    if (this.value === "fr") {
        currentLanguage = fr;
    } else {
        currentLanguage = en;
    }
    updateLanguage();
    const voiceInputButton = document.getElementById('voiceInputButton');

voiceInputButton.addEventListener('click', () => {
    const recognition = new webkitSpeechRecognition() || new SpeechRecognition(); // Initialize speech recognition
    recognition.lang = 'en-US'; // Set recognition language

    recognition.onresult = function(event) {
        const spokenText = event.results[0][0].transcript.toLowerCase(); // Get recognized text
        fillInputWithSpokenText(spokenText); // Call function to fill input with spoken text
    };

    recognition.start(); // Start speech recognition
});

function fillInputWithSpokenText(spokenText) {
    const inputs = document.querySelectorAll('.inputs input');
    const letters = spokenText.split('');
    
    // Fill input fields with recognized letters
    letters.forEach((letter, index) => {
        if (inputs[index]) {
            inputs[index].value = letter.toUpperCase();
        }
    });
}

});

updateLanguage();
 window.onload=function(){
    generateInput();
 }

 // voice game 
 