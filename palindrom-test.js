const singlePalindrome = (palindromParam) => {
  const setToLowerCaseWord = palindromParam.toLowerCase();
  const reversWord = palindromParam.toLowerCase().split("").reverse().join("");
  let result = false;

  if (reversWord === setToLowerCaseWord) {
    result = true;
  }

  console.log(`string: ${palindromParam}`);
  console.log(`single palindrom: ${result}`);
  console.log("=========================");
};

singlePalindrome("SAIPPUAKIVIKAUPPIAS");
singlePalindrome("Aibohphobia");
singlePalindrome("Anna");
singlePalindrome("Civic");
