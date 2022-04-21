// This function takes as main argument a number with one digit
// and form the adequate roman numeral using the context given with the three last arguments.

// For example, if the given number refers to the first digit of a hundred (let's say 4[00]),
// the 'small' argument refers to the smallest roman numeral that can be used to form the number (here C),
// the 'big' argument refers to the bigger roman numeral that can be used to form the number (here D),
// and the 'nextUnit' argument refers to the next unit (here M).

function placeNumbers (currentNumber, small, big, nextUnit) {
    if (currentNumber == 9) {
        return numRoman += `${small}${nextUnit}`
    } else if (currentNumber >= 5) {
        return numRoman += `${big}${small.repeat(currentNumber - 5)}`
    } else if (currentNumber == 4) {
        return numRoman += `${small}${big}`
    }  else if (currentNumber < 5 && currentNumber !== 4) {
        return numRoman += `${small.repeat(currentNumber)}`
    }
}

let numRoman = ''
function convertToRoman(numDecimal) {
    numRoman = '';
    if (numDecimal == 0) {
        numRoman = 'Nullus do not existus ! Comum back quelquæ century later.'
        return numRoman     
    } else if (numDecimal >= 1000) {
        // Add asy many 'M' as there are thousands
        numRoman = 'M'.repeat(Math.floor(numDecimal / 1000))
        numDecimal = numDecimal - Math.floor(numDecimal / 1000) * 1000
    }
    // Add the hundreds
    if (numDecimal >= 100) {
        console.log(Math.floor(numDecimal / 100));
        numRoman = placeNumbers(Math.floor(numDecimal / 100), 'C', 'D', 'M')
        numDecimal = numDecimal - Math.floor(numDecimal / 100) * 100
    }
    // Add the tens
    if (numDecimal >= 10) {
        numRoman = placeNumbers(Math.floor(numDecimal / 10), 'X', 'L', 'C')
        numDecimal = numDecimal - Math.floor(numDecimal / 10) * 10
    }
    // Add the units
    if (numDecimal >= 1) {
        numRoman = placeNumbers(numDecimal, 'I', 'V', 'X')
    }
    return numRoman;
   }
   
const question = document.querySelector('.question');
const answer = document.querySelector('.answer');


question.addEventListener('change', () => {
    convertToRoman(question.value);
    console.log(numRoman);
    answer.innerHTML = numRoman;
})