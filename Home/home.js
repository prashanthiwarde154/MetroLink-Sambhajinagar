// document.addEventListener("DOMContentLoaded", () => {
//   const planBtn = document.getElementById("planJourneyBtn");
//   if (planBtn) {
//     planBtn.addEventListener("click", planJourney);
//   }
//   function planJourney() {
//     const from = document.getElementById("fromStation")?.value.trim();
//     const to = document.getElementById("toStation")?.value.trim();
//     const passengers = parseInt(document.getElementById("passengers")?.value);
//     if (!from || !to) {
//       alert("Please select both stations");
//       return;
//     }
//     if (from === to) {
//       alert("Source and Destination cannot be same");
//       return;
//     }
//     if (passengers <= 0 || isNaN(passengers)) {
//       alert("Passenger must be at least 1");
//       return;
//     }
//     const stations = [
//       "WALUJ MIDC",
//       "OASIS CHOWK",
//       "AS CLUB",
//       "NAGAR NAKA",
//       "PANCHAVATI HOTEL",
//       "DISTRIC COURT",
//       "KRANTI CHOWK",
//       "AKASHWANI",
//       "SEVEN HILL",
//       "CIDCO BUS STAND",
//       "CHIKHALTHANA",
//       "SHENDRA MIDC",
//     ];
//     const fromIndex = stations.indexOf(from);
//     const toIndex = stations.indexOf(to);
//     if (fromIndex === -1 || toIndex === -1) {
//       alert("Please select valid stations from list");
//       return;
//     }
//     const stationGap = Math.abs(toIndex - fromIndex);
//     const distance = stationGap * 2;
//     const farePerKm = 5;
//     const farePerPerson = distance * farePerKm;
//     const totalFare = farePerPerson * passengers;
//     localStorage.setItem("from", from);
//     localStorage.setItem("to", to);
//     localStorage.setItem("passengers", passengers);
//     localStorage.setItem("fare", totalFare);
//     localStorage.setItem("distance", distance);
//     window.location.href = "/ticket-preview";
//   }
//   const menuBtn = document.getElementById("menuBtn");
//   const menuDrawer = document.getElementById("menuDrawer");
//   const closeMenu = document.querySelector(".close-menu");
//   if (menuBtn && menuDrawer) {
//     menuBtn.addEventListener("click", () => {
//       menuDrawer.classList.add("active");
//     });
//   }
//   if (closeMenu && menuDrawer) {
//     closeMenu.addEventListener("click", () => {
//       menuDrawer.classList.remove("active");
//     });
//   }
//   const profileBtn = document.getElementById("profileBtn");
//   const profileDrawer = document.getElementById("profileDrawer");
//   const closeProfileBtn = document.getElementById("closeProfile");
//   const overlay = document.getElementById("profileOverlay");
//   if (profileBtn && profileDrawer && overlay) {
//     profileBtn.addEventListener("click", () => {
//       profileDrawer.classList.add("active");
//       overlay.classList.add("active");
//       document.body.style.overflow = "hidden";
//     });
//   }
//   function closeProfile() {
//     if (profileDrawer) profileDrawer.classList.remove("active");
//     if (overlay) overlay.classList.remove("active");
//     document.body.style.overflow = "";
//   }
//   if (closeProfileBtn) closeProfileBtn.addEventListener("click", closeProfile);
//   if (overlay) overlay.addEventListener("click", closeProfile);
//   const authButtons = document.getElementById("authButtons");
//   const authButtonsMobile = document.getElementById("authButtonsMobile");
//   const logoutBtn = document.getElementById("logoutBtn");
// });
// document.getElementById("authBtnDesktop")?.addEventListener("click", openAuth);
// document.getElementById("authBtnMobile")?.addEventListener("click", openAuth);
// function openAuth() {
//   window.location.href = "/LoginPage/login.html";
// }
document.addEventListener("DOMContentLoaded", () => {
  const planBtn = document.getElementById("planJourneyBtn");
  if (planBtn) {
    planBtn.addEventListener("click", planJourney);
  }
  function planJourney() {
    const from = document.getElementById("fromStation")?.value.trim();
    const to = document.getElementById("toStation")?.value.trim();
    const passengers = parseInt(document.getElementById("passengers")?.value);
    if (!from || !to) {
      alert("Please select both stations");
      return;
    }
    if (from === to) {
      alert("Source and Destination cannot be same");
      return;
    }
    if (passengers <= 0 || isNaN(passengers)) {
      alert("Passenger must be at least 1");
      return;
    }
    const stations = [
      "WALUJ MIDC",
      "OASIS CHOWK",
      "AS CLUB",
      "NAGAR NAKA",
      "PANCHAVATI HOTEL",
      "DISTRIC COURT",
      "KRANTI CHOWK",
      "AKASHWANI",
      "SEVEN HILL",
      "CIDCO BUS STAND",
      "CHIKHALTHANA",
      "SHENDRA MIDC",
    ];
    const fromIndex = stations.indexOf(from);
    const toIndex = stations.indexOf(to);
    if (fromIndex === -1 || toIndex === -1) {
      alert("Please select valid stations from list");
      return;
    }
    const stationGap = Math.abs(toIndex - fromIndex);
    const distance = stationGap * 2;
    const farePerKm = 5;
    const farePerPerson = distance * farePerKm;
    const totalFare = farePerPerson * passengers;
    localStorage.setItem("from", from);
    localStorage.setItem("to", to);
    localStorage.setItem("passengers", passengers);
    localStorage.setItem("fare", totalFare);
    localStorage.setItem("distance", distance);
    window.location.href = "/ticket-preview";
  }
  const menuBtn = document.getElementById("menuBtn");
  const menuDrawer = document.getElementById("menuDrawer");
  const closeMenu = document.querySelector(".close-menu");
  if (menuBtn && menuDrawer) {
    menuBtn.addEventListener("click", () => {
      menuDrawer.classList.add("active");
    });
  }
  if (closeMenu && menuDrawer) {
    closeMenu.addEventListener("click", () => {
      menuDrawer.classList.remove("active");
    });
  }
  const profileBtn = document.getElementById("profileBtn");
  const profileDrawer = document.getElementById("profileDrawer");
  const closeProfileBtn = document.getElementById("closeProfile");
  const overlay = document.getElementById("profileOverlay");
  if (profileBtn && profileDrawer && overlay) {
    profileBtn.addEventListener("click", () => {
      profileDrawer.classList.add("active");
      overlay.classList.add("active");
      document.body.style.overflow = "hidden";
    });
  }
  function closeProfile() {
    if (profileDrawer) profileDrawer.classList.remove("active");
    if (overlay) overlay.classList.remove("active");
    document.body.style.overflow = "";
  }
  if (closeProfileBtn) closeProfileBtn.addEventListener("click", closeProfile);
  if (overlay) overlay.addEventListener("click", closeProfile);
  const authButtons = document.getElementById("authButtons");
  const authButtonsMobile = document.getElementById("authButtonsMobile");
  const logoutBtn = document.getElementById("logoutBtn");
});
document.getElementById("authBtnDesktop")?.addEventListener("click", openAuth);
document.getElementById("authBtnMobile")?.addEventListener("click", openAuth);
function openAuth() {
  window.location.href = "/LoginPage/login.html";
}

/* =====================================================
   SCROLL REVEAL ANIMATION (added)
   Adds reveal classes automatically, no HTML changes needed
   ===================================================== */
document.addEventListener("DOMContentLoaded", () => {
  const groups = [
    { sel: ".trip-planner", cls: "reveal-left" },
    { sel: ".amenities-fade-section", cls: "reveal-right" },
    { sel: ".card", cls: "" },
    { sel: ".services-subtitle, .services-title", cls: "" },
    { sel: ".service-card", cls: "" },
    { sel: ".services-map-box", cls: "reveal-right" },
    { sel: ".exp-top-text, .exp-heading", cls: "" },
    { sel: ".exp-card", cls: "" },
    { sel: ".left-content", cls: "reveal-left" },
    { sel: ".right-images", cls: "reveal-right" },
    { sel: ".promo-banner", cls: "" },
  ];

  const elements = [];
  groups.forEach(({ sel, cls }) => {
    document.querySelectorAll(sel).forEach((el) => {
      el.classList.add("reveal");
      if (cls) el.classList.add(cls);
      // stagger siblings (cards, service cards, etc.)
      const index = [...el.parentElement.children].indexOf(el);
      el.style.animationDelay = Math.min(index, 5) * 0.1 + "s";
      elements.push(el);
    });
  });

  // Fallback for very old browsers without IntersectionObserver
  if (!("IntersectionObserver" in window)) {
    elements.forEach((el) => el.classList.add("visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target); // animate only once
        }
      });
    },
    { threshold: 0.15 }
  );

  elements.forEach((el) => observer.observe(el));
});