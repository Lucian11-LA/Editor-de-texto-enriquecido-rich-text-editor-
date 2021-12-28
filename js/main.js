texto = window.document.getElementById("texto");

btnFontSize = window.document.getElementById("fontSize");



function changeFontFamily(value){
    texto.style["font-family"] = value;

}

function changeFontSize(value){

    texto.style["font-size"] = value+"pt";

}

function changeFontColor(color){
    texto.style["color"] = color;
}

function underlineText(){
    texto.style["text-decoration"] = "underline";
}

function boldText(){
    texto.style["font-weight"] = "bold";
}
