// const sohagpurVillages = [
//   "Ajabgaon", "Ajera", "Ajneri", "Akola", "Amadehi", "Amgaon", "Atashri", "Badai Khedi", "Bainganiya", "Bamari",
//   "Bamori Khurd", "Bankhedi Rewa", "Banskhapa", "Barangi", "Barbatpur", "Barbhud", "Bareli", "Baruadhana", "Barwani",
//   "Bhajiya Dhana", "Bhanpur", "Bhatgaon", "Bhatti", "Bhaukhedi Kalan", "Bhiladiya", "Bhonkhedi Khurd", "Bichhua",
//   "Bija Kheri", "Bineka", "Bodana Gujar", "Bodana Mitha", "Bodi", "Chanderi", "Chandi Khedi", "Chargaon", "Chhedka",
//   "Chichli", "Chitor Pattan", "Churna", "Daringa", "Dhana", "Dhapada Kalan", "Dhapada Khurd", "Dhikwada", "Dunda Khapa",
//   "Dundadeh", "Gajnai", "Galacha", "Gaurigaon", "Ghoghari", "Ghurkhedi", "Godikhedi Malgujari", "Gohanadeh Malgujari",
//   "Gohanadeh Raiyatwari", "Gondi Markadhana", "Gopal Pur", "Gujar Khapa", "Gujar Khedi", "Gundrai", "Guram Khedi",
//   "Gurari", "Hathnabad", "Hirapur", "Isarpur", "Jam", "Jamuniya", "Jhalai", "Jhirmita", "Jijwada", "Jirran", "Kajal Khedi",
//   "Kalmesara", "Kamti", "Kankdi", "Karanpur", "Katiya Khapa", "Keolari", "Khada Deori", "Khakrapura", "Khamda", "Khapa",
//   "Khapariya", "Kharpawad", "Khidiya", "Khimara", "Kishanpur", "Kohani", "Kukara", "Lakhanpur", "Macha", "Madaka Dhana",
//   "Madanpur", "Magariya", "Mahari Rewa", "Mahua Kheda", "Mahuwa Kheda Kalan", "Mallupura", "Malni", "Mana", "Manakwada",
//   "Marka Dhana", "Mokalwadi", "Mudiya Kheda", "Nagtara", "Nakatua", "Nandner", "Nawalgaon", "Nayagaon", "Nibhora",
//   "Niman Mudha", "Niwari", "Pala Deori", "Pala Khedi", "Pamali", "Panjara", "Paraspani", "Paraswada", "Pathai", "Patharai",
//   "Pipariya Bandichhod", "Pipariya Kalan", "Pipariya Khurd", "Podar", "Raini Pani", "Raipura", "Ramnagar", "Rani Gohan",
//   "Ranmautha", "Ratibandar", "Rital Khapa", "Saini", "Sakot", "Samna Pur", "Sankai", "Sankala", "Sarangpur",
//   "Semri Harchand", "Shobhapur", "Shri Rangpur", "Sihar Kheda", "Singwada", "Sitiya Gohna", "Sodara", "Sonpur",
//   "Sonsar Kheda", "Sothar", "Sukari", "Sukha Khedi", "Sukri", "Suplai", "Tala Khedi", "Tekapar Chourmahri", "Telsir",
//   "Thikari", "Tighda", "Turakhapa", "Untiya Shankar", "Urdon"
// ];
// // Get select element
// const select = document.getElementById("jcbLocation");
  
// // Populate dropdown
// sohagpurVillages.forEach(village => {
//   const option = document.createElement("option");
//   option.value = village;
//   option.text = village;
//   select.appendChild(option);
// });


// function populateVillageDropdown(id) {
//   const select = document.getElementById(id);
//   sohagpurVillages.forEach(village => {
//     const option = document.createElement("option");
//     option.value = village;
//     option.text = village;
//     select.appendChild(option);
//   });
// }

// // Call it for each form
// populateVillageDropdown("jcbLocation");
// populateVillageDropdown("boringLocation");
// populateVillageDropdown("compressorLocation");

// function showBookingForm(machine) {
//   document.getElementById("machineSelection").style.display = "none";
//   document.getElementById("bookingForms").style.display = "block";

//   // Hide all forms first
//   document.getElementById("jcbForm").style.display = "none";
//   document.getElementById("boringForm").style.display = "none";
//   document.getElementById("compressorForm").style.display = "none";

//   // Show selected form
//   if (machine === "JCB Machine") {
//     document.getElementById("jcbForm").style.display = "block";
//   } else if (machine === "Boring Machine") {
//     document.getElementById("boringForm").style.display = "block";
//   } else if (machine === "Compressor Machine") {
//     document.getElementById("compressorForm").style.display = "block";
//   }
// }

// function goBack() {
//   document.getElementById("bookingForms").style.display = "none";
//   document.getElementById("machineSelection").style.display = "flex";
// }

// // -------- JCB QUOTE ----------
// function getJCBQuote() {
//   const qty = Number(document.getElementById("jcbQty").value);
//   const purpose = document.getElementById("jcbPurpose").value;
//   const location = document.getElementById("jcbLocation").value;
//   const rate = qty > 8 ? 1000 : 1200;
//   const total = qty * rate;

//   if (!qty || !purpose || !location) return;

//   document.getElementById("jcbResult").innerHTML = `
//     <h5>Total Quotation: ₹${total}</h5>
//     <button class="btn btn-success mt-2" onclick="downloadQuotation('JCB Machine', '${location}', ${qty}, ${total})">Download Quotation</button>
//   `;
// }

// // -------- Boring QUOTE ----------
// function getBoringQuote() {
//   const duration = Number(document.getElementById("boringDuration").value);
//   const location = document.getElementById("boringLocation").value;
//   const rate = duration > 5 ? 1300 : 1500;
//   const total = duration * rate;

//   if (!duration || !location) return;

//   document.getElementById("boringResult").innerHTML = `
//     <h5>Total Quotation: ₹${total}</h5>
//     <button class="btn btn-success mt-2" onclick="downloadQuotation('Boring Machine', '${location}', ${duration}, ${total})">Download Quotation</button>
//   `;
// }

// // -------- Compressor QUOTE ----------
// function getCompressorQuote() {
//   const duration = Number(document.getElementById("compressorDuration").value);
//   const location = document.getElementById("compressorLocation").value;
//   const rate = 4000;
//   const total = duration * rate;

//   if (!duration || !location) return;

//   document.getElementById("compressorResult").innerHTML = `
//     <h5>Total Quotation: ₹${total}</h5>
//     <button class="btn btn-success mt-2" onclick="downloadQuotation('Compressor Machine', '${location}', ${duration}, ${total})">Download Quotation</button>
//   `;
// }

// // -------- Download Function ----------
// function downloadQuotation(machine, location, duration, total) {
//   const { jsPDF } = window.jspdf;
//   const doc = new jsPDF();

//   const content = `
//     Saif Borewell & Construction Quotation

//     Machine: ${machine}
//     Location: ${location}
//     Duration: ${duration} hours
//     Total: ₹${total}
    
//     Thank you for choosing us!
//   `;

//   doc.setFontSize(12);
//   doc.text(content, 10, 20);
//   doc.save("quotation.pdf");
// }



  function showBookingForm(machineType) {
    // Hide machine selection
    document.getElementById("machineSelection").style.display = "none";
    // Show booking form section
    document.getElementById("bookingForms").style.display = "block";

    // Hide all individual forms first
    document.getElementById("jcbForm").style.display = "none";
    document.getElementById("boringForm").style.display = "none";
    document.getElementById("compressorForm").style.display = "none";

    // Show selected form
    if (machineType === "boring") {
      document.getElementById("boringForm").style.display = "block";
    } else if (machineType === "jcb") {
      document.getElementById("jcbForm").style.display = "block";
    } else if (machineType === "compressor") {
      document.getElementById("compressorForm").style.display = "block";
    }
  }

  function goBack() {
    // Show machine selection again
    document.getElementById("machineSelection").style.display = "flex";
    document.getElementById("bookingForms").style.display = "none";

    // Hide all forms
    document.getElementById("jcbForm").style.display = "none";
    document.getElementById("boringForm").style.display = "none";
    document.getElementById("compressorForm").style.display = "none";
  }
