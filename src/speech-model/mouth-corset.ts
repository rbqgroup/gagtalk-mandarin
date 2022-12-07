import { ConditionalHandler } from '../index.js';
import pinyin from '../pinyin.js';

const handlers: ConditionalHandler[] = [{
    predicate: char => char.charCodeAt(0) >= 0x4E00 && char.charCodeAt(0) < 0xA000,
    func: text => pinyin(text).map((py) => ' ¯ˊˇˋ'[pinyin.parts(py).tone] ?? '¯').join(''),
}];

export { handlers };
export default handlers;
