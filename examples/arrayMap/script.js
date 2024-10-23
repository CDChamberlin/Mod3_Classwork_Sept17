document.getElementById("calculate").addEventListener("click", () => {
    const pricesInput = document.getElementById("prices").value;
    const discountInput = parseFloat(document.getElementById("discount").value);

    // Convert the comma-separated prices string into an array of numbers
    const pricesArray = pricesInput
        .split(",")
        .map((price) => parseFloat(price.trim()));

    // Apply the discount using Array.map()
    const discountedPrices = pricesArray.map(
        (price) => price - price * (discountInput / 100)
    );

    // Display the discounted prices
    const discountedPricesList = document.getElementById("discountedPrices");
    discountedPricesList.innerHTML = ""; // Clear previous results
    discountedPrices.forEach((price) => {
        const li = document.createElement("li");
        li.textContent = `$${price.toFixed(2)}`;
        discountedPricesList.appendChild(li);
    });
});
