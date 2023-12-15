/*
Assignment 4:
Write a JavaScript function that takes a string as a parameter and determines whether it's a palindrome or not.
 A palindrome is a word, phrase, number, or other sequence of characters that reads the same forward and backward (ignoring spaces, punctuation, and capitalization).

*/


function Palindrome(word) {

    let Strword = word.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();

    let Revword = Strword.split('').reverse().join('');

    return Strword === Revword;

}

const inputword = "AA, AA, AA";
if (Palindrome(inputword)) {
    console.log(inputword + "\tis a palindrome");
} else {
    console.log(inputword + "\tis not a palindrome")
}
