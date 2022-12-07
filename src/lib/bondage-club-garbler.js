// https://gitgud.io/BondageProjects/Bondage-College/-/blob/master/BondageClub/Scripts/Speech.js

/**
 * The core of the speech garble function, usable without being tied to a specific character
 * @param {number} GagEffect - The gag level of the speech
 * @param {string} CD - The character's dialog to alter
 * @return {string} - Garbled text
 */
export function SpeechGarbleByGagLevel(GagEffect, CD) {

    // Variables to build the new string and check if we are in a parentheses
    var NS = "";
    if (CD == null) CD = "";
    if (GagEffect === 0) return CD;

    for (let L = 0; L < CD.length; L++) {
        const H = CD.charAt(L).toLowerCase();

        // VeryHeavy garble - Close to no letter stays the same
        if (GagEffect >= 7) {
            if ('aeiouy'.includes(H)) NS += 'e';
            else if ('jklr'.includes(H)) NS += 'a';
            else if ('szh'.includes(H)) NS += 'h';
            else if ('dfgnmwtcqxpv'.includes(H)) NS += 'm';
            else if (H == 'b') NS += H;
        }

        // Heavy garble - Almost no letter stays the same
        else if (GagEffect >= 6) {
            if ('aeiouyt'.includes(H)) NS += 'e';
            else if ('cqx'.includes(H)) NS += 'k';
            else if ('jklrw'.includes(H)) NS += 'a';
            else if ('szh'.includes(H)) NS += 'h';
            else if ('bpv'.includes(H)) NS += 'f';
            else if ('dfgnm'.includes(H)) NS += 'm';
        }

        // Medium garble - Some letters stays the same
        else if (GagEffect >= 5) {
            if ('eiouyt'.includes(H)) NS += 'e';
            else if ('cqxk'.includes(H)) NS += 'k';
            else if ('jlrwa'.includes(H)) NS += 'a';
            else if ('szh'.includes(H)) NS += 'h';
            else if ('bpv'.includes(H)) NS += 'f';
            else if ('dfgm'.includes(H)) NS += 'm';
            else if (H == 'n') NS += H;
        }

        // Normal garble, keep vowels and a few letters the same
        else if (GagEffect >= 4) {
            if ('vbct'.includes(H)) NS += 'e';
            else if ('qkx'.includes(H)) NS += 'k';
            else if ('wyjlr'.includes(H)) NS += 'a';
            else if ('sz'.includes(H)) NS += 'h';
            else if ('df'.includes(H)) NS += 'm';
            else if (H == "p") NS += 'f';
            else if (H == "g") NS += 'n';
            else if ('aeioumnh'.includes(H)) NS += H;
        }

        // Easy garble, keep vowels and a some letters the same
        else if (GagEffect >= 3) {
            if ('vbct'.includes(H)) NS += 'e';
            else if ('qkx'.includes(H)) NS += 'k';
            else if ('wyjlr'.includes(H)) NS += 'a';
            else if ('sz'.includes(H)) NS += 's';
            else if (H == "d") NS += 'm';
            else if (H == "p") NS += 'f';
            else if (H == "g") NS += 'h';
            else if ('aeioumnhf'.includes(H)) NS += H;
        }

        // Light garble, half of the letters stay the same
        else if (GagEffect >= 2) {
            if ('ct'.includes(H)) NS += 'e';
            else if ('qkx'.includes(H)) NS += 'k';
            else if ('jlr'.includes(H)) NS += 'a';
            else if (H == "s") NS += 'z';
            else if (H == "z") NS += 's';
            else if (H == "f") NS += 'h';
            else if ('dmg'.includes(H)) NS += 'm';
            else if ('bhnvwpaeiouy'.includes(H)) NS += H;
        }

        // Very Light garble, most of the letters stay the same
        else if (GagEffect >= 1) {
            if (H == "t") NS += 'e';
            else if ('cqkx'.includes(H)) NS += 'k';
            else if ('jlr'.includes(H)) NS += 'a';
            else if ('dmg'.includes(H)) NS += 'm';
            else if ('bhnvwp'.includes(H) || 'aeiouyfsz'.includes(H)) NS += H;
        }
    }

    return NS;
}

export default {
    SpeechGarbleByGagLevel,
};
