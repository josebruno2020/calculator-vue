const shortCut = (e) => {
    let button;
    switch(e.keyCode) {
        //Botoes;
        case 48: case 96: button = document.querySelector('#button0'); break;
        case 49: case 97: button = document.querySelector('#button1'); break;
        case 50: case 98: button = document.querySelector('#button2'); break;
        case 51: case 99: button = document.querySelector('#button3'); break;
        case 52: case 100: button = document.querySelector('#button4'); break;
        case 53: case 101: button = document.querySelector('#button5'); break;
        case 54: case 102: button = document.querySelector('#button6'); break;
        case 55: case 103: button = document.querySelector('#button7'); break;
        case 56: case 104: button = document.querySelector('#button8'); break;
        case 57: case 105: button = document.querySelector('#button9'); break;

        //Operacoes;
        case 107: button = document.querySelector('#buttonPlus'); break;
        case 106: button = document.querySelector('#buttonTimes'); break;
        case 109: button = document.querySelector('#buttonMinus'); break;
        case 111: button = document.querySelector('#buttonDivision'); break;
        
        //Resultados e auxiliares;
        case 110: button = document.querySelector('#buttonComma'); break;
        case 46: case 27: button = document.querySelector('#buttonClear'); break;
        case 8: button = document.querySelector('#buttonEnter'); break;
        case 13: button = document.querySelector('#buttonEqual'); break;
    }
    return button;


}

export default shortCut;