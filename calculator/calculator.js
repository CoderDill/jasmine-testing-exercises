window.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById("calc-form");
  if (form) {
    setupIntialValues();
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      update();
    });
  }
});

function getCurrentUIValues() {
  return {
    amount: +(document.getElementById("loan-amount").value),
    years: +(document.getElementById("loan-years").value),
    rate: +(document.getElementById("loan-rate").value),
  }
}

// Get the inputs from the DOM.
// Put some default values in the inputs
// Call a function to calculate the current monthly payment
function setupIntialValues() {
  const values = { amount: 10, years: 10, rate: 10 };
  document.getElementById("loan-amount").value = values.amount ;
  document.getElementById("loan-years").value = values.years  ;
  document.getElementById("loan-rate").value = values.rate   ;
  update();
}

// Get the current values from the UI
// Update the monthly payment
function update() {
    const curValues = getCurrentUIValues();
    updateMonthly(calculateMonthlyPayment(curValues));
  }

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment(values) {
  const i = (values.rate / 100) / 12;
  const n = Math.floor(values.years * 12);
  return ((values.amount * i) /
  (1 - Math.pow((1 + i), -n))
  ).toFixed(2);
  }

// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly) {
    document.getElementById("monthly-payment").innerText = "$" + monthly;
  }
