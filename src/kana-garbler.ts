import {
    Consonant,
    Vowel,
    Romaji,
    Kana,
    Hiragana,
    Katakana,
    Romajis,
    HiraganaSet,
    RomajiSet,
    HiraganaToRomajiDict,
    RomajiToHiraganaDict,
} from './dataset/kana.js';
import { isKatakana } from './util/char.js';

export default class KanaGarbler {
    consonantMap: ConsonantMap;
    vowelMap: VowelMap;

    constructor(
        consonantMap: ConsonantMap,
        vowelMap: VowelMap,
    ) {
        this.consonantMap = consonantMap;
        this.vowelMap = vowelMap;
        this.checkUnhandledCases();
    }

    garble(text: string) {
        let result = '';
        for (let i = 0; i < text.length; i++) {
            const char = text[i] as Kana;
            const nextChar = text[i + 1] as Kana | undefined;
            const _isKatakana = isKatakana(char);
            let hiragana = (_isKatakana ? katakanaToHiragana(char): char);
            const isSmall = 'ぁぃぅぇぉ'.includes(hiragana);
            if (hiragana as string == 'ゔ') {
                hiragana = 'う';
            }
            if (isSmall) {
                hiragana = String.fromCharCode(hiragana.charCodeAt(0) + 1) as Hiragana;
            }
            const nextHiragana = nextChar && (isKatakana(nextChar) == _isKatakana)
                ? isKatakana(nextChar) ? katakanaToHiragana(nextChar) : nextChar
                : null;
            let garbled: Hiragana;

            if (HiraganaSet.has((hiragana + nextHiragana) as Hiragana)) {
                const romaji = HiraganaToRomajiDict[(hiragana + nextHiragana) as Hiragana];
                garbled = RomajiToHiraganaDict[this.garbleRomaji(romaji)];
                i++;
            } else if (HiraganaSet.has(hiragana)) {
                const romaji = HiraganaToRomajiDict[hiragana];
                garbled = RomajiToHiraganaDict[this.garbleRomaji(romaji)];
                if (isSmall) {
                    garbled = String.fromCharCode(garbled.charCodeAt(0) - 1) as Hiragana;
                }
            }
            garbled ??= 'ん';
            result += _isKatakana ? hiraganaToKatakana(garbled) : garbled;
        }
        return result;
    }

    garbleRomaji(romaji: Romaji) {
        if (romaji == 'n') {
            return 'n';
        }
        const consonant = romaji.length > 1 ? romaji[0] as Consonant : '';
        const vowel = romaji[romaji.length - 1] as Vowel;
        const garbledConsonant = this.consonantMap[consonant] ?? '';
        const garbledVowel = this.vowelMap[vowel];
        let garbled: Romaji;
        if (romaji[1] == 'y' &&
            this.vowelMap.i == 'i' &&
            'auo'.includes(this.vowelMap[garbledVowel])
        ) {
            garbled = (garbledConsonant + 'y' + garbledVowel) as Romaji;
        } else {
            garbled = (garbledConsonant + garbledVowel) as Romaji;
        }
        return RomajiSet.has(garbled) ? garbled : this.vowelMap[vowel];
    }

    private checkUnhandledCases() {
        const set = new Set();
        for (const romaji of Romajis) {
            const garbled = this.garbleRomaji(romaji);
            if (!RomajiSet.has(garbled)) {
                set.add(garbled);
            }
        }
        if (set.size) {
            console.warn(`[WARN] ${set.size} unhandled psuedo romaji: ${[...set].join(' ')}`);
        }
    }
}

function hiraganaToKatakana(kana: Hiragana) {
    return String.fromCharCode(kana.charCodeAt(0) + 0x60) as Katakana;
}
function katakanaToHiragana(kana: Katakana) {
    return String.fromCharCode(kana.charCodeAt(0) - 0x60) as Hiragana;
}

export type ConsonantMap = { [Key in Consonant]?: Consonant };
export type VowelMap = { [Key in Vowel]: Vowel };
