let characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z",
"a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", 
"0", "1", "2", "3", "4", "5", "6", "7", "8", "9",
"~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
let firstPass = document.querySelector('#pass1');
let secondPass = document.querySelector('#pass2');

function generate(){
    let pass =""
    for( let i = 0; i < 15; i++) {
    let passtring = (Math.floor (Math.random()*characters.length))
    pass += characters[passtring];
 }
 return pass
}

function random() {
   firstPass.textContent = generate();
   secondPass.textContent = generate();

}

function copy() {
    navigator.clipboard.writeText(firstPass.textContent);
    var tooltip = document.querySelector('#myTooltip');
    tooltip.textContent = 'Copied'
}

function copy2() {
    navigator.clipboard.writeText(secondPass.textContent);
}