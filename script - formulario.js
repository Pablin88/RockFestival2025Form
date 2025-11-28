// precios asociados a cada ID
const prices = {
    pass1: 375000,
    pass2: 650000,
    pass3: 1150000,
    pass4: 1450000,
    day1a: 150000,
    day1b: 250000,
    day1c: 350000,
    day1d: 450000,
    day2a: 150000,
    day2b: 250000,
    day2c: 350000,
    day2d: 450000,
    day3a: 150000,
    day3b: 250000,
    day3c: 350000,
    day3d: 450000,
};

function updateQty(id, change) {
    const el = document.getElementById(id);
    let qty = parseInt(el.innerText) + change;
    if (qty < 0) qty = 0;
    el.innerText = qty;
    calcTotal();
}

function calcTotal() {
    let totalQty = 0;
    let totalPrice = 0;
    for (const id in prices) {
        const qty = parseInt(document.getElementById(id).innerText);
        totalQty += qty;
        totalPrice += qty * prices[id];
    }
    document.getElementById("totalQty").innerText = totalQty;
    document.getElementById("totalPrice").innerText = `$ ${totalPrice.toLocaleString("es-AR")}`;

    document.getElementById("toStep2").disabled = totalQty === 0;
}

// navegación entre pasos
const steps = document.querySelectorAll(".step");

function showStep(n) {
    steps.forEach(step => step.classList.remove("active"));
    steps[n].classList.add("active");
}

document.getElementById("toStep2").onclick = () => showStep(1);
document.getElementById("backToStep1").onclick = () => showStep(0);

if(document.getElementById("checkoutForm")) {
  document.getElementById("checkoutForm").onsubmit = e => {
    e.preventDefault();
    showStep(3);
  };
}


// Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
      if (!form.checkValidity()) {
        event.preventDefault()
        event.stopPropagation()
      }

      form.classList.add('was-validated')
    }, false)
  })
})()