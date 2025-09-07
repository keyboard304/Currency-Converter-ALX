// Get DOM elements
const dropList = document.querySelectorAll("form select");
const fromCurrency = document.querySelector(".from select");
const toCurrency = document.querySelector(".to select");
const getButton = document.querySelector("form button");
const exchangeIcon = document.querySelector("form .icon");
const amount = document.querySelector("form input");
const exchangeRateTxt = document.querySelector("form .exchange-rate");

// Populate currency dropdowns
for (let i = 0; i < dropList.length; i++) {
    for (let currency_code in country_list) {
        // Set USD as default FROM currency and EGP as default TO currency
        let selected = i == 0 ? currency_code == "USD" ? "selected" : "" : currency_code == "EGP" ? "selected" : "";
        let optionTag = `<option value="${currency_code}" ${selected}>${currency_code}</option>`;
        dropList[i].insertAdjacentHTML("beforeend", optionTag);
    }
    // Add change event listener to update flags
    dropList[i].addEventListener("change", e => {
        loadFlag(e.target);
    });
}

// Function to load appropriate flag based on currency selection
function loadFlag(element) {
    for (let code in country_list) {
        if (code == element.value) {
            let imgTag = element.parentElement.querySelector("img");
            imgTag.src = `https://flagcdn.com/48x36/${country_list[code].toLowerCase()}.png`;
        }
    }
}

// Load exchange rate on page load
window.addEventListener("load", () => {
    getExchangeRate();
});

// Button click event
getButton.addEventListener("click", e => {
    e.preventDefault();
    getExchangeRate();
});

// Exchange icon click event to swap currencies
exchangeIcon.addEventListener("click", () => {
    let tempCode = fromCurrency.value;
    fromCurrency.value = toCurrency.value;
    toCurrency.value = tempCode;
    loadFlag(fromCurrency);
    loadFlag(toCurrency);
    getExchangeRate();
});

// Function to get exchange rate from API
function getExchangeRate() {
    let amountVal = amount.value;
    if (amountVal == "" || amountVal == "0") {
        amount.value = "1";
        amountVal = 1;
    }
    exchangeRateTxt.innerText = "Getting exchange rate...";
    
    let url = `https://v6.exchangerate-api.com/v6/YOUR_ACTUAL_API_KEY_HERE/latest/${fromCurrency.value}`;
    
    fetch(url)
        .then(response => response.json())
        .then(result => {
            let exchangeRate = result.conversion_rates[toCurrency.value];
            let totalExRate = (amountVal * exchangeRate).toFixed(2);
            exchangeRateTxt.innerText = `${amountVal} ${fromCurrency.value} = ${totalExRate} ${toCurrency.value}`;
        })
        .catch(() => {
            exchangeRateTxt.innerText = "Something went wrong";
        });
}