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
  //converts the valuse put in to numbers
  const dividendNumber = Number(dividend);
  const dividerNumber = Number(divider);
  // checks for special characters, letters from input
  const regEX = /^[a-zA-Z]+$/;
  
});












