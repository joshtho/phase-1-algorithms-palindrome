function isPalindrome(word) {
  let string = word.split('').reverse().join('');
    return string === word
    // Write your algorithm here
}

/* 
 i need to take the word, split it into an array and see if the
 value is the same when i flip it somehow.  Add your pseudocode here
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
