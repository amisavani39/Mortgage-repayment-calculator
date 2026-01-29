const btn = document.getElementById("calculate");
const clear = document.getElementById("clear");

btn.addEventListener("click", function () {
  const amount = document.getElementById("amount").value;
  const years = document.getElementById("years").value;
  const rate = document.getElementById("rate").value;
  const type = document.querySelector("input[name='type']:checked").value;

  if (amount === "" || years === "" || rate === "") {
    document.getElementById("error").innerText = "Please fill all fields";
    return;
  }

  document.getElementById("error").innerText = "";

  const principal = parseFloat(amount);
  const months = years * 12;
  const monthlyRate = rate / 100 / 12;

  let monthly = 0;

  if (type === "repayment") {
    monthly =
      (principal * monthlyRate * Math.pow(1 + monthlyRate, months)) /
      (Math.pow(1 + monthlyRate, months) - 1);
  } else {
    monthly = principal * monthlyRate;
  }

  const total = monthly * months;

  document.getElementById("placeholder").classList.add("hidden");
  document.getElementById("results").classList.remove("hidden");

  const hero = document.getElementById("hero");
  if (hero) hero.style.display = "none";

  document.getElementById("monthly").innerText = "£" + monthly.toFixed(2);
  document.getElementById("total").innerText = "£" + total.toFixed(2);
});

clear.addEventListener("click", function () {
  location.reload();
});


 function clearAll() {
  // clear text / number inputs
  document.querySelectorAll("input").forEach(input => {
    if (input.type === "radio" || input.type === "checkbox") {
      input.checked = false;
    } else {
      input.value = "";
    }
  });
}




