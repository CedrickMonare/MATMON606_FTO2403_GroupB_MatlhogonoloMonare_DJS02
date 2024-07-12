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
 // Validation for division by zero
    if (dividerNumber === 0) {
      result.innerText = "Division not performed. Invalid number provided. Try again.";
      console.error("Error: Division by zero");
      return;
    }

    // Function to calculate the result
    const divisionResult = Math.floor(dividendNumber / dividerNumber);
    result.innerText = divisionResult;

  } catch (error) {
    // Handle critical errors
    document.body.innerHTML = "<h1>Something went wrong. Please reload the page</h1>";
    console.error(error);
  }
});
