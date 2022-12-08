import pinyin from '../pinyin.js';
const handlers = [{
        predicate: char => true,
        func: text => pinyin(text).join(' '),
    }];
export { handlers };
export default handlers;
//# sourceMappingURL=robot.js.map