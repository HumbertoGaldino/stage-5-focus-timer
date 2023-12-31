import state from "./state.js";
import * as elements from "./elements.js";
import { reset } from "./actions.js";
import { kitchenTimer } from "./sounds.js";

export function countdown(){
    clearTimeout(state.countdownId);

    if(!state.isRunning){
        return
    }

    let minutes = Number(elements.minutes.textContent);
    let seconds = Number(elements.seconds.textContent);

    seconds--;
    
    if(seconds < 0){
        seconds = 59;
        minutes--;
    }

    if(minutes < 0){
        reset();
        kitchenTimer.play();
        return;
    }

    updateDisplay(minutes, seconds);

    // recursão -> uma função chamando ela mesma
    state.countdownId = setTimeout(() => countdown(), 1000);
}

export function updateDisplay(minutes, seconds) {
    minutes = minutes ?? state.minutes;
    seconds = seconds ?? state.seconds;

    // A função pad adiciona um caracter ao inicio ou ao fim da string
    // dependendo da quantidade de caracters definida. Neste caso 2 caracteres
    // adicionando 0 ao inicio se ele não possuir 2 caracteres
    elements.minutes.textContent = String(minutes).padStart(2, "0");
    elements.seconds.textContent = String(seconds).padStart(2, "0");
}