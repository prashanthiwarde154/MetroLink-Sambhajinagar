document.getElementById("signupForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const mobile = document.getElementById("mobile").value.trim();
    const age = document.getElementById("age").value.trim();
    const address = document.getElementById("address").value.trim();
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;

    const message = document.getElementById("message");
    const container = document.querySelector(".signup-container");
    const signupBtn = document.querySelector("#signupForm button");

    // Show an animated message (error or success)
    function showMessage(text, type) {
        message.textContent = text;
        message.className = "";
        void message.offsetWidth;          // restart animation
        message.classList.add(type);
    }

    // Shake the card on error
    function shakeCard() {
        container.classList.remove("shake");
        void container.offsetWidth;        // restart animation
        container.classList.add("shake");
    }

    // Button loading state
    function setLoading(isLoading) {
        signupBtn.classList.toggle("loading", isLoading);
        signupBtn.disabled = isLoading;
        signupBtn.textContent = isLoading ? "Creating account..." : "Create Account";
    }

    // Show validation error, highlight the field and shake the card
    function fail(text, fieldId) {
        showMessage(text, "error");
        shakeCard();
        const field = document.getElementById(fieldId);
        if (field) {
            field.classList.add("invalid");
            field.focus();
        }
    }

    // clear previous red highlights
    document
        .querySelectorAll("#signupForm input.invalid")
        .forEach((el) => el.classList.remove("invalid"));

    // ================= NAME VALIDATION =================
    if (name === "") {
        fail("Please enter your name", "name");
        return;
    }

    if (!/^[A-Za-z ]+$/.test(name)) {
        fail("Name should contain only letters", "name");
        return;
    }

    if (name.length < 3) {
        fail("Name must be at least 3 characters long", "name");
        return;
    }

    // ================= MOBILE VALIDATION =================
    if (!/^[0-9]{10}$/.test(mobile)) {
        fail("Enter a valid 10-digit mobile number", "mobile");
        return;
    }

    // ================= AGE VALIDATION =================
    if (age === "" || age < 12 || age > 100) {
        fail("Age must be between 12 and 100", "age");
        return;
    }

    // ================= ADDRESS VALIDATION =================
    if (address.length < 5) {
        fail("Please enter a valid address", "address");
        return;
    }

    // ================= PASSWORD VALIDATION =================
    if (password.length < 6) {
        fail("Password must be at least 6 characters", "password");
        return;
    }

    if (password !== confirmPassword) {
        fail("Passwords do not match", "confirmPassword");
        return;
    }

    message.textContent = "";
    message.className = "";
    setLoading(true);

    fetch("http://localhost:5000/signup", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            name,
            mobile,
            age,
            address,
            password
        })
    })
    .then(res => res.json())
    .then(data => {
        if (data.success) {

            showMessage("Account created successfully!", "success");

            // fade the card out, then go to login page
            setTimeout(() => {
                container.classList.remove("shake");
                container.classList.add("leaving");
            }, 800);

            setTimeout(() => {
                window.location.href = "login.html";
            }, 1300);

        } else {
            setLoading(false);
            showMessage(data.message || "Signup failed!", "error");
            shakeCard();
        }
    })
    .catch(err => {
        console.error(err);
        setLoading(false);
        showMessage("Server error!", "error");
        shakeCard();
    });
});

// Remove the red highlight as soon as the user starts fixing a field
document.querySelectorAll("#signupForm input").forEach((input) => {
    input.addEventListener("input", () => input.classList.remove("invalid"));
});