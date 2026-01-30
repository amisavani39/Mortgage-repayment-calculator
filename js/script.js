const btn = document.getElementById("calculate");
const clear = document.getElementById("clear");

btn.addEventListener("click", function () {
  const amount = parseFloat(document.getElementById("amount").value);
  const years = parseFloat(document.getElementById("years").value);
  const rate = parseFloat(document.getElementById("rate").value);

  const typeInput = document.querySelector("input[name='type']:checked");

  // Validation
  if (!amount || !years || !rate || !typeInput) {
    document.getElementById("error").innerText =
      "Please fill all fields and select mortgage type";
    return;
  }

  document.getElementById("error").innerText = "";

  const type = typeInput.value;

  const months = years * 12;
  const monthlyRate = rate / 100 / 12;

  let monthly = 0;

  if (type === "repayment") {
    monthly =
      (amount * monthlyRate * Math.pow(1 + monthlyRate, months)) /
      (Math.pow(1 + monthlyRate, months) - 1);
  } else {
    // Interest only
    monthly = amount * monthlyRate;
  }

  const total = monthly * months;

  document.getElementById("placeholder").classList.add("hidden");
  document.getElementById("results").classList.remove("hidden");

  document.getElementById("monthly").innerText = "£" + monthly.toFixed(2);
  document.getElementById("total").innerText = "£" + total.toFixed(2);
});

clear.addEventListener("click", function () {
  document.querySelectorAll("input").forEach((input) => {
    if (input.type === "radio") input.checked = false;
    else input.value = "";
  });

  document.getElementById("results").classList.add("hidden");
  document.getElementById("placeholder").classList.remove("hidden");
  document.getElementById("error").innerText = "";
});
