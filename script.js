const ip_el = document.getElementById("ip");
const mftxt_el = document.querySelector(".mf_ptxt2");
const lgtxt_el = document.querySelector(".lg_ptxt2");
const kptxt_el = document.querySelector(".kp_ptxt2");
const btn = document.getElementById("hbtn");

btn.addEventListener("click", function () {
  ((mftxt_el.innerHTML = ""),
    (lgtxt_el.innerHTML = ""),
    (kptxt_el.innerHTML = ""));
  const ip = parseFloat(ip_el.value);
  if (ip == 0 || ip < 0) {
    alert("Please enter a valid number!");
    return;
  } else if (ip > 999) {
    alert("Please enter a small number!");
    return;
  }

  const meters = (ip / 3.28).toFixed(3);
  const feet = (ip * 3.28).toFixed(3);

  const ltrs = (ip / 3.785).toFixed(3);
  const glons = (ip * 3.785).toFixed(3);

  const pounds = (ip * 2.205).toFixed(3);
  const kilo = (ip / 2.205).toFixed(3);

  const sep = window.innerWidth <= 480 ? "<br>" : " | ";

  mftxt_el.innerHTML = `${ip} meters = ${feet} feet${sep}${ip} feet = ${meters} meters`;
  lgtxt_el.innerHTML = `${ip} liters = ${glons} gallons${sep}${ip} gallons = ${ltrs} liters`;
  kptxt_el.innerHTML = `${ip} kilos = ${pounds} pounds${sep}${ip} pounds = ${kilo} kilos`;
});

