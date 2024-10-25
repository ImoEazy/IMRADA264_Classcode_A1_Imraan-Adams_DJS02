const form = document.querySelector("[data-form]");
const result = document.querySelector("[data-result]");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const entries = new FormData(event.target);
  const { dividend, divider } = Object.fromEntries(entries);
  const dividendNum = parseInt(dividend, 10);
  const dividerNum = parseInt(divider, 10);

  if (isNaN(dividendNum) || isNaN(dividerNum)) { 
  result.innerText = dividend / divider;
  return;
});


