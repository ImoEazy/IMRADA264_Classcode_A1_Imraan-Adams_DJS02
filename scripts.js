const form = document.querySelector("[data-form]");
const result = document.querySelector("[data-result]");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const entries = new FormData(event.target);
  const { dividend, divider } = Object.fromEntries(entries);

  if (dividend === "" || divider === "") {
    result.innerText = `divisiion not incorrect, both inputs need values.`;
    return;
    
  }
  //converts the valuse input in to numbers
  const dividendNumber = Number(dividend);
  const dividerNumber = Number(divider);
  // checks for special characters, letters from input
  const regEX = /^[a-zA-Z]+$/;


  try {
    if (dividerNumber === 0){
      throw new Error ("division cant be performed, Invalid number.");
    }
    if (regEX.test(dividend) || regEX.test(divider)) {
      throw new Error("Something critical went wrong. Please reload the page.");
    }

    result.innerText = Math.floor(dividendNumber/dividerNumber);
    } catch (error) {
    console.error(Error);

    if (error.message.includes('Invalid number')) {
      result.innerText = error.message;
    }

    if (error.message.includes('Something critical')) {
      document.body.innerHTML = error.message;
    }
  }  
  
});












