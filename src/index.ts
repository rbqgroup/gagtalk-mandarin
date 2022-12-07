import mouthCorset from './speech-model/mouth-corset.js';
import deepthroat from './speech-model/deepthroat.js';
import solidBall from './speech-model/solid-ball.js';
import hollowedBall from './speech-model/hollowed-ball.js';
import ringMask from './speech-model/ring-mask.js';
import cleave from './speech-model/cleave.js';
import robot from './speech-model/robot.js';

const AllowedSymbols = new Set(' \n\t.。?？,，!！…~～—');

function garble(text: string, handlers: ConditionalHandler[]) {
    handlers.unshift({
        predicate: char => AllowedSymbols.has(char),
        func: text => text,
    });
    handlers.push({
        predicate: char => true,
        func: text => text.length <= 3
            ? 'm'.repeat(text.length)
            : 'm'.repeat(text.length - 2) + 'ph',
    });
    let result = '';
    let pendingHandler: ConditionalHandler['func'] = text => '';
    let pendingStartIndex = 0;
    for (let i = 0; i < text.length; i++) {
        const char = text[i];
        for (const handler of handlers) {
            if (handler.predicate(char)) {
                if (handler.func != pendingHandler) {
                    result += pendingHandler(text.slice(pendingStartIndex, i));
                    pendingHandler = handler.func;
                    pendingStartIndex = i;
                }
                break;
            }
        }
    }
    result += pendingHandler(text.slice(pendingStartIndex));
    return result;
}

const GagTypes = {
    mouthCorset,
    deepthroat,
    solidBall,
    hollowedBall,
    ringMask,
    cleave,
    robot,
};

export type ConditionalHandler = {
    predicate: (char: string) => boolean;
    func: (text: string) => string;
}

export { garble, GagTypes };
export default { garble, GagTypes };
