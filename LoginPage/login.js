document.getElementById("loginForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const mobile = document.getElementById("mobile").value;
    const password = document.getElementById("password").value;
    const message = document.getElementById("message");
    const container = document.querySelector(".login-container");
    const loginBtn = document.querySelector("#loginForm button");

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
        loginBtn.classList.toggle("loading", isLoading);
        loginBtn.disabled = isLoading;
        loginBtn.textContent = isLoading ? "Logging in..." : "Login";
    }

    if (!mobile || !password) {
        showMessage("All fields are required!", "error");
        shakeCard();
        return;
    }

    setLoading(true);

    fetch("http://localhost:5000/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        credentials: "include",   // 🔥 VERY IMPORTANT FOR SESSION
        body: JSON.stringify({
            mobile: mobile,
            password: password
        })
    })
    .then(res => res.json())
    .then(data => {

        if (data.success) {

            showMessage("Login Successful!", "success");

            // fade the card out, then go to home page
            setTimeout(() => {
                container.classList.remove("shake");
                container.classList.add("leaving");
            }, 700);

            setTimeout(() => {
                window.location.href = "/Home/index.html";
            }, 1200);

        } else {
            setLoading(false);
            showMessage(data.message || "Invalid login details", "error");
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