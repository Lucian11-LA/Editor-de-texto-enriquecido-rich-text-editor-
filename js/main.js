var texto = document.getElementById('texto');


var btnFontFamily = document.getElementById('font-family');
var btnUnderline = document.getElementById("underline");


function italicText(){
    texto.style['font-style'] = "italic";
}

function boldText(){
    texto.style["font-weight"] = "bold";
}



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


function noBoldText(){
    texto.style["font-weight"] = "0";

}


//btnUnderline.addEventListener('click',underlineText())