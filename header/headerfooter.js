// ================= HEADER + FOOTER SCRIPT =================
document.addEventListener("DOMContentLoaded", () => {

  const headerDiv = document.getElementById("header");
  const footerDiv = document.getElementById("footer");

  // ================= HEADER =================
  if (headerDiv) {
    headerDiv.innerHTML = `
    <!-- ================= TOP BAR ================= -->
    <div class="top-bar">
      <div class="top-left">
        <strong>Helpline:</strong>
        👨‍🦽 👩‍🦯 👨‍👩‍👦
        <span class="helpline-number">1800220220</span>
        <span class="helpline-number">1800220221</span>
      </div>
      <div class="top-right">
      <a href="/admin/admin.html" class="admin-btn">🧑‍💼Admin-portal ?</a>
      </div>
    </div>

    <!-- ================= NAVBAR ================= -->
    <header class="navbar-wrapper">
      <div class="branding">
        <img src="/Assets/logo.png" alt="Metro Logo">
        <div>
          <div class="metro-title">
            MetroLink Chh. Sambhajinagar Corporation LTD.
          </div>
          <div class="metro-sub">(Maha-Metro Maharashtra)</div>
        </div>
      </div>

      <nav class="nav desktop-nav">
        <a href="/Home/index.html">Home</a>
        <a href="/recharge/recharge.html">Recharge</a>
        <a href="/facility/facility.html">Facilities</a>
        <a href="/security/security.html">Security</a>
        <a href="/contacts/contacs.html">Contact</a>
        <a href="/contacts/faq.html">FAQ</a>
      </nav>

      <div class="nav-actions">
        <button id="profileBtn" class="profile-btn" style="display:none;">👤</button>
        <p><b><span id="p_name"></span></b></p>
        <button id="authBtnDesktop" class="auth-btn">Login / Signup</button>

        <button class="hamburger" id="menuBtn">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>

    <!-- ================= MOBILE MENU ================= -->
    <div id="menuDrawer" class="side-menu">
      <button class="close-menu" id="closeMenu">✖</button>

      <a href="/Home/index.html">Home</a>
      <a href="/recharge/recharge.html">Recharge</a>
      <a href="/facility/facility.html">Facilities</a>
      <a href="/security/security.html">Security</a>
      <a href="/contacts/contacs.html">Contact</a>
      <a href="/contacts/faq.html">FAQ</a>

      <div class="auth-buttons">
        <button id="authBtnMobile">Login / Signup</button>
      </div>
    </div>

    <!-- ================= PROFILE DRAWER ================= -->
    <div id="profileDrawer" class="side-profile">
      <div class="side-profile-header">
        <h3>👤 My Profile</h3>
        
        <button id="closeProfile">✖</button>
        
      </div>

      <p><b>Name:</b> <span id="p_namee"></span></p>
      <p><b>Mobile:</b> <span id="p_mobile"></span></p>
      <p><b>Age:</b> <span id="p_age"></span></p>
      <p><b>Address:</b> <span id="p_address"></span></p>
      <div class="profile-section-data">

        <button onclick="window.location.href='/ticket-info/my-tickets.html'" class="explore-btn">
          My Tickets
        </button>
        <button id="logoutBtn" class="explore-btn">Logout</button>
        <div class="profile-section-image">
          <img src="/Assets/img13.png" alt="Shivaji Maharaj">
        </div>
      </div>
    </div>

    <div id="profileOverlay" class="profile-overlay"></div>

    <div class="moving-text">
      <p>
        ---Welcome to Chh. Sambhajinagar MetroLink Official Website !
        Customer Care : 📞1800220220---
      </p>
    </div>
    `;
  }
  // ================= FOOTER =================
  if (footerDiv) {
    footerDiv.innerHTML = `
      <!-- footer.html -->
<!-- ================= FOOTER ================= -->
<footer class="footer">
    <div class="footer-container">
        <!-- Left Section (Logos) -->
        <div class="footer-left">            
            <div class="gov-logos">
                <img src="/Assets/img18.png" alt="Gov of India">
                <img src="/Assets/img19.png" alt="MyGov">
                <img src="/Assets/img20.png" alt="State Logo">
            </div>
        </div>

        <!-- Useful Links -->
        <div class="footer-links">
            <h3>Useful Links</h3>
            <a href="#">About Us</a>
            <a href="/contacts/contacs.html">Help & Contact</a>
            <a href="#">Careers</a>
            <a href="#">News & Updates</a>
        </div>

        <!-- Important Links -->
        <div class="footer-links">
            <h3>Important Links</h3>
            <a href="#">Guidelines</a>
            <a href="/contacts/faq.html">FAQs</a>
            <a href="/security/security.html">Security</a>
            <a href="#">Vigilance</a>
        </div>

        <!-- Legal -->
        <div class="footer-links">
            <h3>Legal</h3>
            <a href="#">Privacy Policy</a>
            <a href="#">Disclaimer</a>
            <a href="#">Web Information Manager</a>
        </div>

    </div>

    <!-- Bottom Section -->
    <div class="footer-bottom">
        <div class="bottom-left">
            © 2026 Metro Link Sambhajinagar. All Rights Reserved |
            LAST UPDATED: MAR 04, 2026 |
            VISITOR NO. 889836
        </div>

        <div class="bottom-right">
            <div class="social-icons">
                <a href="#"><i class="fab fa-x-twitter"></i></a>
                <a href="#"><i class="fab fa-facebook"></i></a>
                <a href="#"><i class="fab fa-instagram"></i></a>
                <a href="#"><i class="fab fa-linkedin"></i></a>
            </div>

            <div class="developer">
                Designed & Developed by <span>4 Idiots Solutions LTD</span>
            </div>
        </div>
    </div>

</footer>

    `;
  }

  // ================= SELECT ELEMENTS AFTER INJECTION =================
  const profileBtn = document.getElementById("profileBtn");
  const authBtnDesktop = document.getElementById("authBtnDesktop");
  const authBtnMobile = document.getElementById("authBtnMobile");
  const logoutBtn = document.getElementById("logoutBtn");
  const adminBtn = document.querySelector(".admin-btn");
  const menuBtn = document.getElementById("menuBtn");
  const menuDrawer = document.getElementById("menuDrawer");
  const closeMenu = document.getElementById("closeMenu");

  const profileDrawer = document.getElementById("profileDrawer");
  const closeProfileBtn = document.getElementById("closeProfile");
  const overlay = document.getElementById("profileOverlay");

  // ================= MENU =================
  menuBtn?.addEventListener("click", () => {
    menuDrawer?.classList.add("active");
  });

  closeMenu?.addEventListener("click", () => {
    menuDrawer?.classList.remove("active");
  });

  // ================= PROFILE DRAWER =================
  profileBtn?.addEventListener("click", () => {
    profileDrawer?.classList.add("active");
    overlay?.classList.add("active");
    document.body.style.overflow = "hidden";
  });

  function closeProfile() {
    profileDrawer?.classList.remove("active");
    overlay?.classList.remove("active");
    document.body.style.overflow = "";
  }

  closeProfileBtn?.addEventListener("click", closeProfile);
  overlay?.addEventListener("click", closeProfile);

  // ================= LOGIN CHECK =================
  
  fetch("/check-login", {
      credentials: "include"
  })

  .then(res => res.json())
  .then(data => {

    if (!data.loggedIn) {
      authBtnDesktop && (authBtnDesktop.style.display = "inline-block");
      authBtnMobile && (authBtnMobile.style.display = "inline-block");
      profileBtn && (profileBtn.style.display = "none");
    } else {
      authBtnDesktop && (authBtnDesktop.style.display = "none");
      authBtnMobile && (authBtnMobile.style.display = "none");
      profileBtn && (profileBtn.style.display = "inline-block");

      document.getElementById("p_namee").innerText = data.user.name;
      document.getElementById("p_name").innerText = data.user.name;
      document.getElementById("p_mobile").innerText = data.user.mobile;
      document.getElementById("p_age").innerText = data.user.age;
      document.getElementById("p_address").innerText = data.user.address;
    }

  })
  .catch(console.error);

  // ================= LOGIN BUTTON =================
  authBtnDesktop?.addEventListener("click", () => {
    window.location.href = "/LoginPage/login.html";
  });

  authBtnMobile?.addEventListener("click", () => {
    window.location.href = "/LoginPage/login.html";
  });

// ================= LOGOUT =================
logoutBtn?.addEventListener("click", async () => {
  try {
    const res = await fetch("/logout", {
      method: "POST",
      credentials: "include"
    });

    if (!res.ok) {
      throw new Error("Logout failed: " + res.status);
    }

    alert("Logged out successfully");
    window.location.href = "/Home/index.html";
  } catch (error) {
    console.error("Logout error:", error);
    alert("Unable to log out. Please try again.");
  }
});
});