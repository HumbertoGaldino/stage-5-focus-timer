import state from "./state.js";
import { controls } from "./elements.js";
import * as actions from "./actions.js";
import * as elements from "./elements.js"
import { updateDisplay } from "./timer.js";

export function registerControls() {
    controls.addEventListener('click', (event) => {
        const action = event.target.dataset.action;
        
        if(typeof actions[action] != "function"){
            return;
        }

        actions[action]();
    })
}

export function setMinutes(){
    elements.minutes.addEventListener('focus', () => {
        elements.minutes.textContent = "";
    });

    // embora esteja riscado por estar deprecated, a estratégia ainda funciona
    // o código abaixo permitirá que sejam digitados apenas números na aplicação
    elements.minutes.onkeypress = (event) => /\d/.test(event.key);

    // ao sair do foco determine que no máximo serão apenas 60 minutos
    elements.minutes.addEventListener('blur', (event) => {
        let time = event.currentTarget.textContent;
        time = time > 60 ? 60 : time;

        state.minutes = time;
        state.seconds = 0;

        updateDisplay();
        
        elements.minutes.removeAttribute('contenteditable');
    });
}