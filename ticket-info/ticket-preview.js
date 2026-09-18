document.addEventListener("DOMContentLoaded", () => {

  const from = localStorage.getItem("from");
  const to = localStorage.getItem("to");
  const passengersCount = parseInt(localStorage.getItem("passengers"));
  const fare = localStorage.getItem("fare");
  const distance = localStorage.getItem("distance");

  if (!from || !to || !passengersCount || !fare || !distance) {
    alert("No journey data found. Please plan journey again.");
    window.location.href = "/";
    return;
  }

  // Fill ticket info
  document.getElementById("routeText").innerText = `${from} → ${to}`;
  document.getElementById("fareText").innerText = fare;
  document.getElementById("distanceText").innerText = `${distance} KM`;
  document.getElementById("ticketId").innerText = "TEMP-" + Date.now();
  document.getElementById("ticketDate").innerText =
    new Date().toLocaleDateString();

  // Generate Passenger Fields
  const passengerContainer = document.getElementById("passengerFields");

  for (let i = 1; i <= passengersCount; i++) {
    const div = document.createElement("div");
    div.style.marginBottom = "10px";

    div.innerHTML = `
      <strong>Passenger ${i}</strong><br>
      <input type="text" placeholder="Name" id="name${i}" required>
      <input type="number" placeholder="Age" id="age${i}" required>
    `;

    passengerContainer.appendChild(div);
  }

  // ✅ Confirm Button Working Properly
  const confirmBtn = document.getElementById("confirmBtn");

//   confirmBtn.addEventListener("click", () => {

//     let passengerData = [];

//     for (let i = 1; i <= passengersCount; i++) {
//       const name = document.getElementById(`name${i}`).value.trim();
//       const age = document.getElementById(`age${i}`).value.trim();

//       if (!name || !age) {
//         alert("Please fill all passenger details");
//         return;
//       }

//       passengerData.push({ name, age });
//     }

//     fetch("/process-payment", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json"
//       },
//       credentials: "include",
//       body: JSON.stringify({
//        from: from,
//        to: to,
//       passengers: passengerData
// })
//     })
//     .then(res => res.json())
//     .then(data => {

//       console.log("SERVER RESPONSE:", data);

//       if (data.success) {
//         alert("Ticket Booked Successfully ✅");
//         window.location.href = "/ticket-info/my-tickets.html";
//         // window.location.href = "ticket-info/my-tickets.html";
//       } else {
//         alert(data.message || "Booking Failed");
//       }

//     })
//     .catch(err => {
//       console.error("Booking Error:", err);
//       alert("Server error while booking");
//     });

//   });
confirmBtn.addEventListener("click", () => {

  let passengerData = [];

  for (let i = 1; i <= passengersCount; i++) {
    const name = document.getElementById(`name${i}`).value.trim();
    const age = document.getElementById(`age${i}`).value.trim();

    if (!name || !age) {
      alert("Please fill all passenger details");
      return;
    }

    passengerData.push({ name, age });
  }

  // ✅ Save data for payment page
  localStorage.setItem("passengerData", JSON.stringify(passengerData));

  // Redirect to payment page
  window.location.href = "/ticket-info/payment.html";

});

});