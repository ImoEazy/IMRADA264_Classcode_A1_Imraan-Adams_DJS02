const form = document.querySelector("[data-form]");
const result = document.querySelector("[data-result]");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const entries = new FormData(event.target);
  const { dividend, divider } = Object.fromEntries(entries);
  //check if either dividende or divider input is empty
  if (dividend === "" || divider === "") {
    result.innerText = `divisiion not incorrect, both inputs need values.`;
    return;
    
  }
  //converts the valuse input in to numbers
  const dividendNumber = Number(dividend);
  const dividerNumber = Number(divider);
  // checks for special characters, letters from input
  const regEX = /^[a-zA-Z]+$/;

  //if divide by zero throw error
  try {
    if (dividerNumber === 0){
      throw new Error ("division cant be performed, Invalid number.");
    }
    //if either input contains letters/characters throw errror. Input validation
    if (regEX.test(dividend) || regEX.test(divider)) {
      throw new Error("Something critical went wrong. Please reload the page.");
    }
    //if no errors then perform calculation. use math.floor to round down for whole numbbers
    result.innerText = Math.floor(dividendNumber/dividerNumber);
    } catch (error) {
    console.error(Error);
    //If an error occurs during the division,(undefined or NaN), the code enters the catch block. It logs the error to the console for debugging purposes.
    if (error.message.includes('Invalid number')) {
      result.innerText = error.message;
    }

    if (error.message.includes('Something critical')) {
      document.body.innerHTML = error.message;
    }
  }  
  
});












