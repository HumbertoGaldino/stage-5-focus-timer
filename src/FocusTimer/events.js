import { controls } from "./elements.js";
import * as actions from "./actions.js";
import * as elements from "./elements.js"

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
        elements.minutes.textContent = ""
    })

    // embora esteja riscado por estar deprecated, a estratégia ainda funciona
    // o código abaixo permitirá que sejam digitados apenas números na aplicação
    elements.minutes.onkeypress = (event) => /\d/.test(event.key)
}