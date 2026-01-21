function calculate() {
  let amount = +document.getElementById("amount").value;
  let years = +document.getElementById("years").value;
  let rate = +document.getElementById("rate").value;

  let monthlyRate = rate / 100 / 12;
  let months = years * 12;

  let type = document.querySelector('input[name="type"]:checked').value;

  let monthly, total;

  if (type === "repayment") {
    monthly = (amount * monthlyRate) / (1 - Math.pow(1 + monthlyRate, -months));
    total = monthly * months;
  } else {
    monthly = amount * monthlyRate;
    total = monthly * months;
  }

  document.getElementById("monthly").innerText = "£" + monthly.toFixed(2);
  document.getElementById("total").innerText = "£" + total.toFixed(2);
}

document.querySelectorAll('input[name="type"]').forEach((r) => r.addEventListener("change", calculate));

function clearAll() {
  document.getElementById("amount").value = "";
  document.getElementById("years").value = "";
  document.getElementById("rate").value = "";
  document.getElementById("monthly").innerText = "£0.00";
  document.getElementById("total").innerText = "£0.00";
}
