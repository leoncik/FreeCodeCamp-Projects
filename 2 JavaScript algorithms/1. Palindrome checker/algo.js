// PALINDROME CHECKER
// Return true if the given string is a palindrome. Otherwise, return false.

const validMessages = ['Indeed!', 'A wild palindrome appears!', 'This in an authentic palindrome!', 'What a wonderful palindrome!', 'As a palindrome expert, you have my congratulations for this one!', 'This word is Boustrophedon-friendly.', 'YOU WIN!', 'You are a true palindrome!'];
const invalidMessages = ['This is not a palindrome.', 'Nope!', 'This is not a palindrome at all!', 'Too bad, this is not a palindrome.', 'EPIC FAIL!', 'Do you even know what a palindrome is?', 'You should try something else.', 'There is no way I will validate this !'];

function palindrome(str) {

    // Remove all non-alphanumeric characters
    str = str.replace(/[^A-Za-z0-9]/g, '').toLowerCase();

    // Reverse string
    let reversed = str.split('').reverse().join('');

    // Compare strings
    if (str == reversed) {
        return true
    }
    return false
  }
  
document.querySelector('.entry').addEventListener('keydown', (e) => {
    if(e.key === 'Enter') {
        let input = document.querySelector('.entry').value;
        let result = palindrome(input);
        if(result && input.length > 1) {
            document.querySelector('.result').innerHTML = validMessages[Math.floor(Math.random() * validMessages.length)];
            document.querySelector('.result').style.color = 'springGreen';
        } else if(result && input.length === 0) {
            document.querySelector('.result').innerHTML = 'At least write something!';
            document.querySelector('.result').style.color = 'red';
        } else if (result && input.length === 1) {
            document.querySelector('.result').innerHTML ='Only one character? Come on, you can do better!';
            document.querySelector('.result').style.color = 'red';
        } else {
            document.querySelector('.result').innerHTML = invalidMessages[Math.floor(Math.random() * invalidMessages.length)];
            document.querySelector('.result').style.color = 'red';
        }
    }
})