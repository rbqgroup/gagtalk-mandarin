import Nzh from 'nzh';
import { ConditionalHandler } from '../index.js';
import pinyin from '../pinyin.js';
import { isHanzi, isNumeric } from '../util/char.js';

const handlers: ConditionalHandler[] = [{
    predicate: isHanzi,
    func: text => pinyin(text).map((py) => ' ¯ˊˇˋ'[pinyin.parts(py).tone] ?? '¯').join(''),
}, {
    predicate: isNumeric,
    func: text => pinyin(Nzh.cn.encodeS(text))
        .map((py) => ' ¯ˊˇˋ'[pinyin.parts(py).tone] ?? '¯').join(''),
}];

export { handlers };
export default handlers;
