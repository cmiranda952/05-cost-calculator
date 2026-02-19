function addNumbers(a, b) {
  return a + b;
}

function multiplyNumbers(a, b) {
  return a * b;
}

// This function returns the base price for each pizza size.
function getSizePrice(size) {
  if (size === "small") {
    return 8;
  }

  if (size === "large") {
    return 12;
  }

  return 10;
}


// This function calculates the pizza total using base price + topping cost.
function calculatePizzaCost(basePrice, toppingCount, toppingPrice, hasDelivery, deliveryFee) {
  const toppingTotal = multiplyNumbers(toppingCount, toppingPrice);
  let totalCost = addNumbers(basePrice, toppingTotal);

  // Add delivery fee only when delivery is selected.
  if (hasDelivery) {
    totalCost = addNumbers(totalCost, deliveryFee);
  }

  return totalCost;
}

// This function updates the text on the page with the final total.
function updateTotalOnPage(totalCost) {
  const totalElement = document.getElementById("total");
  totalElement.textContent = `Total: $${totalCost}`;
}

// This event runs when the form is submitted.
const pizzaOrderForm = document.getElementById("pizza-order-form");

pizzaOrderForm.addEventListener("submit", function (event) {
  // Prevent the page from refreshing after submit.
  event.preventDefault();

  // Count how many topping checkboxes are selected.
  const selectedToppings = document.querySelectorAll('input[name="topping"]:checked');
  const toppingCount = selectedToppings.length;

  // Get the selected size and its base price.
  const sizeSelect = document.getElementById("size");
  const selectedSize = sizeSelect.value;
  const basePrice = getSizePrice(selectedSize);

  // Set the other pricing values from the page rules.
  const toppingPrice = 2;
  const deliveryFee = 5;

  // Check if the delivery box is selected.
  const deliveryCheckbox = document.getElementById("delivery");
  const hasDelivery = deliveryCheckbox.checked;

  // Calculate and show the total.
  const totalCost = calculatePizzaCost(basePrice, toppingCount, toppingPrice, hasDelivery, deliveryFee);
  updateTotalOnPage(totalCost);
});

