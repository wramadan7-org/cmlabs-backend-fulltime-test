const FizzBuzz = () => {
  const range = 100;

  for (let i = 1; i <= range; i++) {
    // If the number series is a multiple of 3 and 5 then display FizzBuzz
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz");
      // If the number series is a multiple of 5 then display Buzz
    } else if (i % 5 === 0) {
      console.log("Buzz");
      // If the number series is a multiple of 3 then display Fizz
    } else if (i % 3 === 0) {
      console.log("Fizz");
      // If not contain multiple 3 or 5 or 3 and 5 then display number
    } else {
      console.log(i);
    }
  }
};

FizzBuzz();
