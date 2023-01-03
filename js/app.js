console.log("Hola mundo!");



function encryptor(textUser){
    textUser = textUser.split("");
    for (var i =0; i < textUser.length; i++){
        if (textUser[i] == "e"){textUser[i] = "enter"}
        if (textUser[i] == "i"){textUser[i] = "imes"}
        if (textUser[i] == "a"){textUser[i] = "ai"}
        if (textUser[i] == "o"){textUser[i] = "ober"} 
        if (textUser[i] == "u"){textUser[i] = "ufat"}
    }
    var textServer = [...textUser].join("");
    var p = document.createElement("p");
    p.setAttribute("id", "ciphertext");
    var ciphertext = document.createTextNode(textServer);
    p.appendChild(ciphertext);
    document.getElementById("not-display").appendChild(p);
    user = true;    
}

function decryptor(textUser){
    var textServer = textUser;
    if (textServer.includes("enter")){textServer = textServer.replace(/enter/gi, "e");}
    if (textServer.includes("imes")){textServer = textServer.replace(/imes/gi, "i");}
    if (textServer.includes("ai")){textServer = textServer.replace(/ai/gi, "a");}
    if (textServer.includes("ober")){textServer = textServer.replace(/ober/gi, "o");}
    if (textServer.includes("ufat")){textServer = textServer.replace(/ufat/gi, "u");}
    var p = document.createElement("p");
    p.setAttribute("id", "ciphertext");
    var ciphertext = document.createTextNode(textServer);
    p.appendChild(ciphertext);
    document.getElementById("not-display").appendChild(p);
    user = true;    
}

var user = false;
function conection() {
    var comprobation = false;
    while (comprobation != true){
        if (user == true) {
            var div = document.getElementById("not-display");
            var p = document.getElementById("ciphertext");
            div.removeChild(p);
        }
        var textUser = document.getElementById('textarea-1').value.toString();
        if (textUser != textUser.toLowerCase() || textUser != textUser.normalize("NFD").replace(/[\u0300-\u036f]/g, "")){                                 //|| (/^[ÁÉÍÓÚáéíóúñÑ]+$/g.test(textUser))
            alert("Solo letras minúsculas y sin acentos")
            user = false;
            break;
        }
        else {
            comprobation = true;
            document.getElementById("display.imagen").style.visibility = "hidden";
            document.getElementById("display.mensajes").style.visibility = "hidden";
            if (button == 0){encryptor(textUser);}
            else {decryptor(textUser);}
            document.getElementById("not-display").style.display = "initial";}
    }
}

function copyToClipBoard(text) {
    const input = document.createElement("input");
    input.setAttribute('value', text.innerText);
    document.body.appendChild(input);
    input.select();
    document.execCommand("copy");
    document.body.removeChild(input);
}

function cutToClipBoard(text) {
    text.select();
    document.execCommand("cut");
}

//Botones
var button;
document.querySelector("#encrypt").addEventListener("click", ()=>{button = 0; conection()})
document.querySelector("#decrypt").addEventListener("click", ()=>{button = 1; conection()})
document.querySelector("#copy-ciphertext").addEventListener("click", ()=>{copyToClipBoard(document.querySelector("#ciphertext"));})
document.querySelector("#cut-text").addEventListener("click", ()=>{cutToClipBoard(document.querySelector("#textarea-1"));})