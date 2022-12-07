import { pinyin } from 'pinyin';
const handlers = [{
        predicate: char => true,
        func: text => pinyin(text, { segment: true, style: 'normal' }).join(' '),
    }];
export { handlers };
export default handlers;
//# sourceMappingURL=robot.js.map