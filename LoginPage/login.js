
document.getElementById("loginForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const mobile = document.getElementById("mobile").value;
    const password = document.getElementById("password").value;
    const message = document.getElementById("message");

    if (!mobile || !password) {
        message.textContent = "All fields are required!";
        return;
    }

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

            alert("Login Successful!");
            window.location.href = "/Home/index.html";

        } else {
            message.textContent = data.message || "Invalid login details";
        }

    })
    .catch(err => {
        console.error(err);
        message.textContent = "Server error!";
    });
});