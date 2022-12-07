import { pinyin } from 'pinyin';
import { ConditionalHandler } from '..';

const handlers: ConditionalHandler[] = [{
    predicate: char => true,
    func: text => pinyin(text, { segment: true, style: 'normal' }).join(' '),
}];

export { handlers };
export default handlers;
