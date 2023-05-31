const apiKey = "9c9449829213dddc617846ad";

// Fetch supported currencies and populate select elements
function fetchCurrencies() {
  const url = `https://v6.exchangerate-api.com/v6/${apiKey}/latest/USD`;

  fetch(url)
    .then(response => response.json())
    .then(data => {
      const currencyCodes = Object.keys(data.conversion_rates);
      const fromSelect = document.getElementById("current-currency");
      const toSelect = document.getElementById("target-currency");

      // Populate select elements with currency options
      currencyCodes.forEach(currency => {
        const option1 = document.createElement("option");
        const option2 = document.createElement("option");
        option1.text = currency;
        option1.value = currency;
        option2.text = currency;
        option2.value = currency;
        fromSelect.add(option1);
        toSelect.add(option2);
      });
    })
    .catch(error => console.log("Error fetching currencies:", error));
}

// Fetch conversion rate and calculate converted amount
function convertCurrency() {
  const fromCurrency = document.getElementById("current-currency").value;
  const toCurrency = document.getElementById("target-currency").value;
  const amount = document.getElementById("amount").value;

  const url = `https://v6.exchangerate-api.com/v6/${apiKey}/pair/${fromCurrency}/${toCurrency}/${amount}`;

  fetch(url)
    .then(response => response.json())
    .then(data => {
      const result = document.getElementById("result");
      const conversion = data.conversion_result;
      result.innerText = `${amount} ${fromCurrency} = ${conversion} ${toCurrency}`;
    })
    .catch(error => console.log("Error converting currency:", error));
}

// Switch the current and target currencies
function switchCurrencies() {
  const fromSelect = document.getElementById("current-currency");
  const toSelect = document.getElementById("target-currency");
  const temp = fromSelect.value;
  fromSelect.value = toSelect.value;
  toSelect.value = temp;
}

// Add event listeners
document.getElementById("convert-btn").addEventListener("click", convertCurrency);
document.getElementById("switch-btn").addEventListener("click", switchCurrencies);

// Fetch supported currencies on page load
fetchCurrencies();