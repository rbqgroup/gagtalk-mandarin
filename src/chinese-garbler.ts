import {
    AllPinyinSet,
    Final,
    Initial,
    PinyinToHanziDict,
    PostProcessSpecialCases,
    StrictInitial,
    ValidPinyin,
    DefinedPronunciation,
} from './dataset/pinyin.js';
import pinyin from './pinyin.js';

export default class ChineseGarbler {
    initialMap: InitialMap;
    finalMap: FinalMap;
    specialMap: SpecialMap;
    excludedTones: Set<DefinedPronunciation>;
    options: ChineseGarblerOptions;

    constructor(
        initialMap: InitialMap,
        finalMap: FinalMap,
        specialMap: SpecialMap,
        excludedTonesSet = new Set<DefinedPronunciation>(),
        options?: ChineseGarblerOptions,
    ) {
        this.initialMap = initialMap;
        this.finalMap = finalMap;
        this.specialMap = specialMap;
        this.excludedTones = excludedTonesSet;
        this.options = options ?? {};
        this.options.tone ??= 'right';
        this.checkUnhandledCases();
    }

    garble(text: string) {
        return pinyin(text)
            .map((py, index) => {
                const parts = pinyin.parts(py);
                const garbled = this.garblePinyin(py);
                const useTone = !this.excludedTones.has(garbled as DefinedPronunciation);
                return (
                    // original hanzi if mapped as is
                    `${parts.initial}${parts.final}${parts.tone}` == garbled ? text[index] :
                        // tone specific hanzi if exists
                        (useTone ? PinyinToHanziDict[garbled] : null)
                        ?? (PinyinToHanziDict[garbled.slice(0, -1)]
                            // tone generic hanzi if exists
                            ? PinyinToHanziDict[garbled.slice(0, -1)]
                            + this.getToneChar(pinyin.parts(py).tone)
                            // pinyin letters
                            : ' ' + garbled.slice(0, -1) + ' ')
                );
            })
            .join('');
    }

    private garblePinyin(py: string) {
        const parts = pinyin.parts(py);
        let garbled =
            this.specialMap[parts.letters] ??
            `${this.initialMap[parts.initial] ?? ''}${this.finalMap[parts.final]}`;
        garbled = PostProcessSpecialCases[garbled] ?? garbled;
        return garbled + (/\d$/.test(garbled) ? '' : parts.tone);
    }

    private getToneChar(tone: number) {
        return this.options.tone == 'above'
            ? ['', ...'̄́̌̀'][tone]
            : this.options.tone == 'right'
                ? ['', ...'ˉˊˇˋ'][tone]
                : '';
    }

    private checkUnhandledCases() {
        const set = new Set();
        for (const py of AllPinyinSet) {
            const garbled = this.garblePinyin(py).slice(0, -1);
            if (!PinyinToHanziDict[garbled]) {
                set.add(garbled);
            }
        }
        if (set.size) {
            console.warn(`[WARN] ${set.size} unhandled cases: ${[...set].join(' ')}`);
        }
    }
}

export type InitialMap = { [initial in Initial]?: StrictInitial | 'i' | 'u' };
export type FinalMap = { [final in Final]: Final };
export type SpecialMap = { [pinyin in ValidPinyin]?: DefinedPronunciation };
interface ChineseGarblerOptions {
    tone?: 'above' | 'right' | 'none';
}
