let characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z",
"a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", 
"0", "1", "2", "3", "4", "5", "6", "7", "8", "9",
"~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
const appContainer = document.querySelector('#container')
let firstPass = document.querySelector('#pass1');
let secondPass = document.querySelector('#pass2');
let generateBtn = document.querySelector('#generate')

generateBtn.addEventListener('click', random);

function random() {
    firstPass.textContent = generate();
    secondPass.textContent = generate();
 
 }

function generate(){
    let pass =""
    for( let i = 0; i < 15; i++) {
    let passtring = (Math.floor (Math.random()*characters.length))
    pass += characters[passtring];
 }
 return pass
}

//function copy() {
  //  navigator.clipboard.writeText(firstPass.textContent);
//}

firstPass.addEventListener('click', function(){
    copyPasswordToClipboard(firstPass);
});

secondPass.addEventListener('click', function(){
    copyPasswordToClipboard(secondPass);
})

function copyPasswordToClipboard(passwordElement) {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(passwordElement.textContent);
      // Display feedback message to user
      const feedbackDiv = document.createElement('p');
      feedbackDiv.textContent = 'Copied';
      feedbackDiv.style.color = '#D5D4D8';
      feedbackDiv.style.textAlign = 'center'
      appContainer.insertBefore(feedbackDiv, appContainer.firstChild);
      // Hide feedback message after 2 seconds
      setTimeout(() => {
        appContainer.removeChild(feedbackDiv);
      }, 500);
    } else {
      // Clipboard API not supported
      console.log('Clipboard API not supported');
    }
}