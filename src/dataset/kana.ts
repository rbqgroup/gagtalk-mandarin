export const Consonants = [
    '',
    'k', 's', 't', 'n', 'h', 'm', 'y', 'r', 'w',
    'g', 'z', 'd', 'b', 'p',
] as const;
export const ConsonantSet = new Set(Consonants);

export const Vowels = ['a', 'i', 'u', 'e', 'o'] as const;
export const VowelSet = new Set(Vowels);

export const Romajis = [
    'a', 'i', 'u', 'e', 'o',
    'ka', 'ki', 'ku', 'ke', 'ko',
    'sa', 'si', 'su', 'se', 'so',
    'ta', 'ti', 'tu', 'te', 'to',
    'na', 'ni', 'nu', 'ne', 'no',
    'ha', 'hi', 'hu', 'he', 'ho',
    'ma', 'mi', 'mu', 'me', 'mo',
    'ya', 'yu', 'yo',
    'ra', 'ri', 'ru', 're', 'ro',
    'wa', 'wo',
    'n',
    'ga', 'gi', 'gu', 'ge', 'go',
    'za', 'zi', 'zu', 'ze', 'zo',
    'da', 'di', 'du', 'de', 'do',
    'ba', 'bi', 'bu', 'be', 'bo',
    'pa', 'pi', 'pu', 'pe', 'po',
    'kya', 'kyu', 'kyo',
    'sya', 'syu', 'syo',
    'tya', 'tyu', 'tyo',
    'nya', 'nyu', 'nyo',
    'hya', 'hyu', 'hyo',
    'mya', 'myu', 'myo',
    'rya', 'ryu', 'ryo',
    'gya', 'gyu', 'gyo',
    'zya', 'zyu', 'zyo',
    'bya', 'byu', 'byo',
    'pya', 'pyu', 'pyo',
] as const;
export const RomajiSet = new Set(Romajis);

export const Hiraganas = [
    'あ', 'い', 'う', 'え', 'お',
    'か', 'き', 'く', 'け', 'こ',
    'さ', 'し', 'す', 'せ', 'そ',
    'た', 'ち', 'つ', 'て', 'と',
    'な', 'に', 'ぬ', 'ね', 'の',
    'は', 'ひ', 'ふ', 'へ', 'ほ',
    'ま', 'み', 'む', 'め', 'も',
    'や', 'ゆ', 'よ',
    'ら', 'り', 'る', 'れ', 'ろ',
    'わ', 'を',
    'ん',
    'が', 'ぎ', 'ぐ', 'げ', 'ご',
    'ざ', 'じ', 'ず', 'ぜ', 'ぞ',
    'だ', 'ぢ', 'づ', 'で', 'ど',
    'ば', 'び', 'ぶ', 'べ', 'ぼ',
    'ぱ', 'ぴ', 'ぷ', 'ぺ', 'ぽ',
    'きゃ', 'きゅ', 'きょ',
    'しゃ', 'しゅ', 'しょ',
    'ちゃ', 'ちゅ', 'ちょ',
    'にゃ', 'にゅ', 'にょ',
    'ひゃ', 'ひゅ', 'ひょ',
    'みゃ', 'みゅ', 'みょ',
    'りゃ', 'りゅ', 'りょ',
    'ぎゃ', 'ぎゅ', 'ぎょ',
    'じゃ', 'じゅ', 'じょ',
    'びゃ', 'びゅ', 'びょ',
    'ぴゃ', 'ぴゅ', 'ぴょ',
] as const;
export const HiraganaSet = new Set(Hiraganas);

export const Katakanas = [
    'ア', 'イ', 'ウ', 'エ', 'オ',
    'カ', 'キ', 'ク', 'ケ', 'コ',
    'サ', 'シ', 'ス', 'セ', 'ソ',
    'タ', 'チ', 'ツ', 'テ', 'ト',
    'ナ', 'ニ', 'ヌ', 'ネ', 'ノ',
    'ハ', 'ヒ', 'フ', 'ヘ', 'ホ',
    'マ', 'ミ', 'ム', 'メ', 'モ',
    'ヤ', 'ユ', 'ヨ',
    'ラ', 'リ', 'ル', 'レ', 'ロ',
    'ワ', 'ヲ',
    'ン',
    'ガ', 'ギ', 'グ', 'ゲ', 'ゴ',
    'ザ', 'ジ', 'ズ', 'ゼ', 'ゾ',
    'ダ', 'ヂ', 'ヅ', 'デ', 'ド',
    'バ', 'ビ', 'ブ', 'ベ', 'ボ',
    'パ', 'ピ', 'プ', 'ペ', 'ポ',
    'キャ', 'キュ', 'キョ',
    'シャ', 'シュ', 'ショ',
    'チャ', 'チュ', 'チョ',
    'ニャ', 'ニュ', 'ニョ',
    'ヒャ', 'ヒュ', 'ヒョ',
    'ミャ', 'ミュ', 'ミョ',
    'リャ', 'リュ', 'リョ',
    'ギャ', 'ギュ', 'ギョ',
    'ジャ', 'ジュ', 'ジョ',
    'ビャ', 'ビュ', 'ビョ',
    'ピャ', 'ピュ', 'ピョ',
] as const;
export const KatakanaSet = new Set(Katakanas);

export const HiraganaToRomajiDict = Hiraganas.reduce(
    (obj, hiragana, index) => (obj[hiragana] = Romajis[index], obj),
    <{ [Key in Hiragana]: Romaji }>{});

export const RomajiToHiraganaDict = Romajis.reduce(
    (obj, romaji, index) => (obj[romaji] = Hiraganas[index], obj),
    <{ [Key in Romaji]: Hiragana }>{});

export type Consonant = typeof Consonants[number];
export type Vowel = typeof Vowels[number];
export type Romaji = typeof Romajis[number];
export type Hiragana = typeof Hiraganas[number];
export type Katakana = typeof Katakanas[number];
export type Kana = Hiragana | Katakana;
