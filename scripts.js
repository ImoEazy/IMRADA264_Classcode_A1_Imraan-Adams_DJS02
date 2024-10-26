const form = document.querySelector("[data-form]");//gets 'formdisplay' element fr
const result = document.querySelector("[data-result]");// gets 'result display element from Dom

//event listener for form submit button. runs specified function 
form.addEventListener("submit", (event) => {
  
  //prevents default behavior of form submission, which usually refresh page of the form submission
  event.preventDefault();
  

  //FormData is used to collect the input values from the form. The Object.fromEntries method converts the entries into an object, where dividend and divider represent the values from the respective input fields.
  const entries = new FormData(event.target);
  const { dividend, divider } = Object.fromEntries(entries);






  //clear previous error msg
  //Any previous error messages are cleared from the result display.
  result.classList.remove("error-message");
  result.innerText = "";

  //validate checks
  //The code checks if either input is not a valid number (isNaN), or if the divider is zero (to avoid division by zero). In either case, an appropriate error message is displayed.
  if (isNaN(dividendNum) || isNaN(dividerNum)) { 
  result.innerText = "Division not performed. Both values are required in inputs. Try again";
  result.classList.add("error-message");
  return;
}

  if (dividerNum === 0) {
  result.innerText = "Division not performed. Invalid number provided. Try again.";
  result.classList.add("error-message");
  return;
}
//if (divedenum === (CharacterData)){   
  //result.innerText = "Division not performed. Invalid number provided. Try again.";
 //result.classList.add("error-message");
 //return;
 //}



//perform the dividion
//If validation passes, the division is performed. Math.floor is used to round down the result to the nearest whole number, which is then displayed in the result element.
const quotient = Math.floor(dividendNum / dividerNum);
result.innerText = `Result: ${quotient}`;

});




