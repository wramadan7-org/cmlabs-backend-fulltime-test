const singleWord = (palindromeParam) => {
  // Set string to lowercase
  const setToLowerCaseWord = palindromeParam.toLowerCase();
  // Split the strings by word, reverse them, and concatenate them
  const reversWord = setToLowerCaseWord.split("").reverse().join("");
  // Set default result to false
  let result = false;
  // Check if reverse word is same with original string when already set to lowercase and set to true
  if (reversWord === setToLowerCaseWord) {
    result = true;
  }

  console.log(`string: ${setToLowerCaseWord}`);
  console.log(`single palindrome: ${result}`);
  console.log("=========================");
};

const multipleWord = (palindromeParam) => {
  // Set string to lowercase
  const setToLowerCaseWord = palindromeParam.toLowerCase();
  // Set result
  let result = false;

  // If word contain comma
  if (setToLowerCaseWord.indexOf(",") > -1) {
    // Set default array to word contain comma
    let wordComma = [];

    setToLowerCaseWord.split(",").map((value) => {
      // Remove first space
      const removeFirstSpace = value.trim();
      // Find index of space
      const spaceIndex = removeFirstSpace.indexOf(" ");
      // Reverse word
      const reverse = removeFirstSpace
        .replace(/\s/g, "")
        .split("")
        .reverse()
        .join("");
      // Add space
      const addSpace = `${reverse.substring(0, spaceIndex)} ${reverse.substring(
        spaceIndex,
        reverse.length
      )}`;
      // Insert in array
      wordComma.push(addSpace);
    });

    // Join the word with separate ,
    const resultWord = wordComma.join(", ");

    // Check if the word is palindrome or not
    if (resultWord === setToLowerCaseWord) {
      result = true;
    } else {
      result = false;
    }

    console.log(`string: ${setToLowerCaseWord}`);
    console.log(`multiple palindrome: ${result}`);
    console.log("=========================");
    return;
  }

  // Find space index
  const spaceIndex = setToLowerCaseWord.indexOf(" ");
  // Remove all space
  const removaAllSpace = setToLowerCaseWord.replace(/\s/g, "");
  // Reverse word
  const reverse = removaAllSpace.split("").reverse().join("");

  // Fill space by index
  const resultWord = `${reverse.substring(0, spaceIndex)} ${reverse.substring(
    spaceIndex,
    reverse.length
  )}`;

  if (resultWord === setToLowerCaseWord) {
    result = true;
  }

  console.log(`string: ${setToLowerCaseWord}`);
  console.log(`multiple palindrome: ${result}`);
  console.log("=========================");
};

singleWord("SAIPPUAKIVIKAUPPIAS");
singleWord("Aibohphobia");
singleWord("Anna");
singleWord("Civic");

multipleWord("No lemon, no melon");
multipleWord("My gym");
