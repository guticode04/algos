// Write a function `pigLatinify(sentence)` which translates a sentence into pig latin.
// Rules for pig latin:
// In the English language, vowels are the following letters: ['a', 'e', 'i', 'o', 'u'] 
// Consonants are all other letters.
//  1. If the word begins with a vowel, simply append `ay` onto the end.
//      ex. 'apple' => 'appleay'
//  2. If the word begins with a consonant, move the starting consonants to the
//  end of the word and then append `ay`
//      ex1. 'pearl' => 'earlpay'
//      ex2. `school` => `oolschay`
//  3. Treat `qu` at the start of a word as a singular consonant.
//      ex1. `queen` => `eenquay`
//      ex2. `square` => `aresquay`

function pigLatinify(sent) {
   const words = sent.split(' ');
   const translate = (word) => {
      vowels = 'aeiou'.split('');
      if (vowels.indexOf(word[0]) != -1) {
         return `${word}ay`;
      } else {
         let phoneme = 0;

         while(!(vowels.indexOf(word[phoneme]) != -1)) {
            phoneme += 1;
         }

         if(word[phoneme -1] === 'q') phoneme += 1;
         return `${word.slice(phoneme)}${word.slice(0, phoneme)}ay`;

      }
   };

   return words.map( word => translate(word)).join(' ');
}