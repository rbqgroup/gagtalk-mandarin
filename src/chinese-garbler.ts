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
    defaultOptions: ChineseGarblerOptions;
    private options: ChineseGarblerOptions;

    constructor(
        initialMap: InitialMap,
        finalMap: FinalMap,
        specialMap: SpecialMap,
        excludedTonesSet = new Set<DefinedPronunciation>(),
        defaultOptions?: ChineseGarblerOptions,
    ) {
        this.initialMap = initialMap;
        this.finalMap = finalMap;
        this.specialMap = specialMap;
        this.excludedTones = excludedTonesSet;
        this.defaultOptions = defaultOptions ?? {};
        this.defaultOptions.toneStyle ??= 'right';
        this.defaultOptions.preserveUnaffectedHanzi ??= true;
        this.checkUnhandledCases();
    }

    garble(text: string, overrideOptions?: ChineseGarblerOptions) {
        this.options = { ...this.defaultOptions, ...overrideOptions };
        return pinyin(text)
            .map((py, index) => {
                const parts = pinyin.parts(py);
                const garbled = this.garblePinyin(py);
                const garbledLetters = garbled.slice(0, -1);
                const useTone = !this.excludedTones.has(garbled as DefinedPronunciation);
                return (
                    // original hanzi if mapped as is
                    (this.options.preserveUnaffectedHanzi &&
                        `${parts.initial}${parts.final}${parts.tone}` == garbled)
                        ? text[index]
                        // tone specific hanzi if exists
                        : (useTone ? PinyinToHanziDict[garbled] : null)
                        ?? (PinyinToHanziDict[garbledLetters]
                            // tone generic hanzi if exists
                            ? PinyinToHanziDict[garbled.slice(0, -1)] + this.getToneChar(parts.tone)
                            // pinyin letters
                            : ` ${garbled.slice(0, -1)} `)
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
        return this.options.toneStyle == 'above'
            ? ['', ...'̄́̌̀'][tone]
            : this.options.toneStyle == 'right'
                ? ['', ...'ˉˊˇˋ'][tone]
                : '';
    }

    private checkUnhandledCases() {
        this.options = { ...this.defaultOptions };
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

export type InitialMap = { [Key in Initial]?: StrictInitial | 'i' | 'u' };
export type FinalMap = { [Key in Final]: Final };
export type SpecialMap = { [Key in ValidPinyin]?: DefinedPronunciation };
export type ChineseGarblerOptions = {
    /**
     * @default "right"
     */
    toneStyle?: 'above' | 'right' | 'none';
    /**
     * @default true
     */
    preserveUnaffectedHanzi?: boolean;
}
