import pinyin from '../pinyin.js';
import { ConditionalHandler } from '..';

const handlers: ConditionalHandler[] = [{
    predicate: char => true,
    func: text => pinyin(text, { style: 'tone' }).join(' '),
}];

export { handlers };
export default handlers;
