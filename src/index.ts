import mouthCorset from './speech-model/mouth-corset.js';
import deepthroat from './speech-model/deepthroat.js';
import solidBall from './speech-model/solid-ball.js';
import hollowedBall from './speech-model/hollowed-ball.js';
import ringMask from './speech-model/ring-mask.js';
import cleave from './speech-model/cleave.js';
import robot from './speech-model/robot.js';
import { ChineseGarblerOptions } from './chinese-garbler.js';
import { isEmoji, isSymbol } from './util/char.js';

/**
 * @param handlers See GagTypes
 */
function garble(text: string, handlers: ConditionalHandler[], options?: GarbleOptions) {
    handlers.unshift({
        predicate: isSymbol,
        func: text => text,
    }, {
        predicate: options?.emoji ? isEmoji : () => false,
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
    let pendingText = '';
    for (const char of text) {
        for (const handler of handlers) {
            if (handler.predicate(char)) {
                if (handler.func != pendingHandler) {
                    result += pendingHandler(pendingText, options);
                    pendingHandler = handler.func;
                    pendingText = '';
                }
                pendingText += char;
                break;
            }
        }
    }
    result += pendingHandler(pendingText, options);
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

export type GarbleOptions =
    & ChineseGarblerOptions
    & {
        /**
         * @default false
         */
        emoji?: boolean;
    };
export type ConditionalHandler = {
    predicate: (char: string) => boolean;
    func: (text: string, options?: GarbleOptions) => string;
}

export { garble, GagTypes };
export default { garble, GagTypes };
