document.getElementById("signupForm").addEventListener("submit", function (e) {
    e.preventDefault();
    const name = document.getElementById("name").value.trim();
    const mobile = document.getElementById("mobile").value.trim();
    const age = document.getElementById("age").value.trim();
    const address = document.getElementById("address").value.trim();
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;
    if (name === "") {
        alert("Please enter your name");
        return;
    }
    if (!/^[A-Za-z ]+$/.test(name)) {
        alert("Name should contain only letters");
        return;
    }
    if (name.length < 3) {
        alert("Name must be at least 3 characters long");
        return;
    }

    // ================= MOBILE VALIDATION =================
    if (!/^[0-9]{10}$/.test(mobile)) {
        alert("Enter a valid 10-digit mobile number");
        return;
    }

    // ================= AGE VALIDATION =================
    if (age === "" || age < 12 || age > 100) {
        alert("Age must be between 12 and 100");
        return;
    }

    // ================= ADDRESS VALIDATION =================
    if (address.length < 5) {
        alert("Please enter a valid address");
        return;
    }

    // ================= PASSWORD VALIDATION =================
    if (password.length < 6) {
        alert("Password must be at least 6 characters");
        return;
    }

    if (password !== confirmPassword) {
        alert("Passwords do not match");
        return;
    }



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
            alert("Account created successfully!");
            window.location.href = "login.html";
        } else {
            message.textContent = data.message || "Signup failed!";
        }
    })
    .catch(err => {
        console.error(err);
        message.textContent = "Server error!";
    });
});
