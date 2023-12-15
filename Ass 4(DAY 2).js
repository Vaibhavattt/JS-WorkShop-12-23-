/*
Assignment 4:
Write a JavaScript function that takes a string as a parameter and determines whether it's a palindrome or not.
 A palindrome is a word, phrase, number, or other sequence of characters that reads the same forward and backward (ignoring spaces, punctuation, and capitalization).

*/

// function Palindrome(word) {


//     let D1 = word.split("");
//     let D2 = D1;

//     let D3 = word.reverse()

//     let S1 = word.split("");
//     let S2 = word.split("").reverse();

//     console.log(S1)
//     console.log(S2)

//     console.log(S1 == S2)
//     if (S1 == S2) {
//         console.log("Word given is a Palindrome");
//     } else {
//         console.log("not a palindrome");
//     }
// }


// Palindrome("AMA")

// function isPalindrome(str) {
//     // Remove non-alphanumeric characters and convert to lowercase
//     const cleanStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();

//     // Reverse the cleaned string
//     const reversedStr = cleanStr.split('').reverse().join('');

//     // Check if the original and reversed strings are the same
//     return cleanStr === reversedStr;
// }

// // Example usage:
// const inputString = "A man, a plan, a canal, Panama!";
// if (isPalindrome(inputString)) {
//     console.log(`${inputString} is a palindrome.`);
// } else {
//     console.log(`${inputString} is not a palindrome.`);
// }



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