texto = window.document.getElementById("texto");

btnFontSize = window.document.getElementById("fontSize");

boldBtn = window.document.getElementById('bold');



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

function noBoldText(){
    texto.style["font-weight"] = "0";

}

boldBtn.addEventListener('click',boldText());
boldBtn.addEventListener('change',noBoldText())