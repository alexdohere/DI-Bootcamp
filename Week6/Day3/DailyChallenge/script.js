const API_KEY = "e92cac61381af6f0ec57e719";
const currencyCodesUrl = `https://v6.exchangerate-api.com/v6/${API_KEY}/codes`;
const exchangeRateUrl = `https://v6.exchangerate-api.com/v6/${API_KEY}/pair`;

const fromCurrency = document.getElementById("from-currency");
const toCurrency = document.getElementById("to-currency");
const amountInput = document.getElementById("amount");
const resultDiv = document.getElementById("result");
const convertBtn = document.getElementById("convert-btn");

async function fetchCurrencyCodes() {
  const response = await fetch(currencyCodesUrl);
  const data = await response.json();
  return data.supported_codes;
}

function populateCurrencyOptions(currencies) {
  currencies.forEach(([code, name]) => {
    const optionElement = document.createElement("option");
    optionElement.value = code;
    optionElement.textContent = `${code} - ${name}`;
    fromCurrency.appendChild(optionElement.cloneNode(true));
    toCurrency.appendChild(optionElement);
  });
}

async function convertCurrency(e) {
  e.preventDefault();
  const from = fromCurrency.value;
  const to = toCurrency.value;
  const amount = amountInput.value;

  const response = await fetch(`${exchangeRateUrl}/${from}/${to}/${amount}`);
  const data = await response.json();

  const conversionResult = data.conversion_result;
  resultDiv.textContent = `${amount} ${from} = ${conversionResult.toFixed(
    2
  )} ${to}`;
}

document.addEventListener("DOMContentLoaded", async () => {
  const currencies = await fetchCurrencyCodes();
  populateCurrencyOptions(currencies);
  convertBtn.addEventListener("click", convertCurrency);
});
