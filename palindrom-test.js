const singlePalindrome = (palindromParam) => {
  // Set string to lowercase
  const setToLowerCaseWord = palindromParam.toLowerCase();
  // Split the strings by word, reverse them, and concatenate them
  const reversWord = setToLowerCaseWord.split("").reverse().join("");
  // Set default result to false
  let result = false;
  // Check if reverse word is same with original string when already set to lowercase and set to true
  if (reversWord === setToLowerCaseWord) {
    result = true;
  }

  console.log(`string: ${setToLowerCaseWord}`);
  console.log(`single palindrom: ${result}`);
  console.log("=========================");
};

singlePalindrome("SAIPPUAKIVIKAUPPIAS");
singlePalindrome("Aibohphobia");
singlePalindrome("Anna");
singlePalindrome("Civic");
