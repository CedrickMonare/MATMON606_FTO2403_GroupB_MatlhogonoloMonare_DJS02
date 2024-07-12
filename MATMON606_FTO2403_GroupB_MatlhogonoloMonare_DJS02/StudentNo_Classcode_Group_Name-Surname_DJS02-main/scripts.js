// Form and result elements
const form = document.querySelector("[data-form]");
const result = document.querySelector("[data-result]");

// Initial message to be displayed
result.innerText = "No calculation performed";

form.addEventListener("submit", (event) => {
  event.preventDefault();
  
  // Form entries retrieved
  const entries = new FormData(event.target);
  const { dividend, divider } = Object.fromEntries(entries);
  result.innerText = dividend / divider;

 try {
    // Validation for missing values
    if (!dividend || !divider) {
      result.innerText = "Operation not performed. Both values are required in inputs. Please Try again.";
      return;
    }

    // Function to convert values to integers
    const dividendNumber = parseInt(dividend, 10);
    const dividerNumber = parseInt(divider, 10);

    // Function to check if the values are numbers
    if (isNaN(dividendNumber) || isNaN(dividerNumber)) {
      throw new Error("Invalid input: not a number");
    }
