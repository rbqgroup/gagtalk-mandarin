import { Kana, Hiragana, Katakana } from '../dataset/kana.js';

export function isNumeric(char: string | number) {
    char = typeof char == 'string' ? char.charCodeAt(0) : char;
    return char >= 0x30 && char <= 0x39;
}
export function isASCIILetter(char: string | number) {
    char = typeof char == 'string' ? char.charCodeAt(0) : char;
    return (char >= 0x41 && char <= 0x5A)
        || (char >= 0x61 && char <= 0x7A);
}
export function isHanzi(char: string | number) {
    char = typeof char == 'string' ? char.charCodeAt(0) : char;
    return char >= 0x4E00 && char <= 0x9FFF;
}
export function isKana(char: string | number): char is Kana {
    char = typeof char == 'string' ? char.charCodeAt(0) : char;
    return isHiragana(char) || isKatakana(char);
}
export function isHiragana(char: string | number): char is Hiragana {
    char = typeof char == 'string' ? char.charCodeAt(0) : char;
    return (char >= 0x3041 && char <= 0x3094);
}
export function isKatakana(char: string | number): char is Katakana {
    char = typeof char == 'string' ? char.charCodeAt(0) : char;
    return (char >= 0x30A1 && char <= 0x30F4);
}
