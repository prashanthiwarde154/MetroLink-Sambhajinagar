require("dotenv").config();
const express = require("express");
// const mysql = require("mysql2");
const path = require("path");
const cors = require("cors");
const session = require("express-session");
const app = express();

/* ================= MIDDLEWARE ================= */
app.use(cors({
    origin: "http://localhost:5000",
    credentials: true
}));


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false
}));

/* ================= DATABASE ================= */
// const db = mysql.createConnection({
//     host: process.env.DB_HOST,
//     user: process.env.DB_USER,
//     password: process.env.DB_PASSWORD,
//     database: process.env.DB_NAME
// });

// db.connect(err => {
//     if (err) {
//         console.log("❌ DB Error:", err);
//     } else {
//         console.log("✅ MySQL Connected");
//     }
// });
/* ================= DATABASE ================= */
const db = require("./db");

/* ================= STATIC FILES ================= */
app.use("/Home", express.static(path.join(__dirname, "Home")));
app.use("/LoginPage", express.static(path.join(__dirname, "LoginPage")));
app.use("/Assets", express.static(path.join(__dirname, "Assets")));
app.use("/recharge", express.static(path.join(__dirname, "recharge")));
app.use("/header", express.static(path.join(__dirname, "header")));
app.use("/ticket-info", express.static(path.join(__dirname, "ticket-info")));
app.use("/facility", express.static(path.join(__dirname, "facility")));
app.use("/security", express.static(path.join(__dirname, "security")));
app.use("/addonfeatures", express.static(path.join(__dirname, "addonfeatures")));
app.use("/contacts", express.static(path.join(__dirname, "contacts")));


/* ================= DEFAULT ROUTE ================= */
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "Home", "index.html"));
});

/* ================= SIGNUP API ================= */
app.post("/signup", (req, res) => {
    const { name, mobile, age, address, password } = req.body;

    if (!name || !mobile || !age || !address || !password) {
        return res.json({ success: false, message: "All fields are required" });
    }

    const checkQuery = "SELECT * FROM users WHERE mobile = ?";
    db.query(checkQuery, [mobile], (err, result) => {
        if (err) return res.json({ success: false, message: "DB error" });

        if (result.length > 0) {
            return res.json({
                success: false,
                message: "Mobile number already registered"
            });
        }

        const insertQuery =
            "INSERT INTO users (name, mobile, age, address, password) VALUES (?, ?, ?, ?, ?)";

        db.query(insertQuery, [name, mobile, age, address, password], err => {
            if (err) {
                return res.json({ success: false, message: "Signup failed" });
            }

            res.json({
                success: true,
                message: "Signup successful"
            });
        });
    });
});

/* ================= LOGIN API ================= */
app.post("/login", (req, res) => {
    const { mobile, password } = req.body;

    if (!mobile || !password) {
        return res.json({ success: false, message: "All fields are required" });
    }

    const loginQuery =
        "SELECT * FROM users WHERE mobile = ? AND password = ?";

    db.query(loginQuery, [mobile, password], (err, result) => {
        if (err) {
            return res.json({ success: false, message: "DB error" });
        }

        if (result.length > 0) {

            // ✅ SAVE USER IN SESSION
            req.session.user = result[0];

            res.json({
                success: true,
                message: "Login successful",
                user: result[0]
            });

        } else {
            res.json({
                success: false,
                message: "Invalid mobile number or password"
            });
        }
    });
});

/* ================= CHECK LOGIN ================= */
app.get("/check-login", (req, res) => {
    if (req.session.user) {
        res.json({
            loggedIn: true,
            user: req.session.user
        });
    } else {
        res.json({
            loggedIn: false
        });
    }
});

/* ================= LOGOUT ================= */
app.get("/logout", (req, res) => {
    req.session.destroy(err => {
        if (err) {
            return res.json({ success: false });
        }
        res.json({ success: true });
    });
});

/* ================= USER PROFILE API ================= */
app.get("/user-profile/:mobile", (req, res) => {
    const mobile = req.params.mobile;

    const sql =
        "SELECT id, name, mobile, age, address FROM users WHERE mobile = ?";

    db.query(sql, [mobile], (err, result) => {
        if (err) {
            return res.json({ success: false, message: "DB Error" });
        }

        if (result.length > 0) {
            res.json({
                success: true,
                user: result[0]
            });
        } else {
            res.json({
                success: false,
                message: "User not found"
            });
        }
    });
});
/* ================= MY TICKETS ================= */
app.get("/my-tickets", (req, res) => {
    if (!req.session.user) {
        return res.json({ success: false, message: "Please login first" });
    }

    const userId = req.session.user.id;

    const sql = "SELECT * FROM tickets WHERE user_id = ? ORDER BY booking_time DESC";

    db.query(sql, [userId], (err, results) => {
        if (err) {
            return res.json({ success: false, message: "DB Error" });
        }

        // safely parse passengers
        const tickets = results.map(ticket => {
            let passengers = [];
            try {
                passengers = Array.isArray(ticket.passengers)
                    ? ticket.passengers
                    : JSON.parse(ticket.passengers || "[]");
            } catch {
                passengers = [];
            }
            return { ...ticket, passengers };
        });

        res.json({ success: true, tickets });
    });
});


app.post("/process-payment", (req, res) => {

    if (!req.session.user) {
        return res.json({ success: false, message: "Login required" });
    }

    const { from, to, passengers, fare } = req.body;

    if (!from || !to || !passengers || !fare) {
        return res.json({ success: false, message: "Missing fields" });
    }

    const sql = `
        INSERT INTO tickets 
        (user_id, from_station, to_station, passengers, fare, travel_date)
        VALUES (?, ?, ?, ?, ?, ?)
    `;

    db.query(sql, [
        req.session.user.id,
        from,
        to,
        JSON.stringify(passengers),
        fare,
        new Date().toISOString().split("T")[0]
    ], (err, result) => {

        if (err) {
            console.log("INSERT ERROR:", err);
            return res.json({ success: false });
        }

        res.json({ success: true });

    });

});
/* ================= TICKET ROUTES ================= */
app.get("/ticket-preview", (req, res) => {
    res.sendFile(path.join(__dirname, "ticket-info", "ticket-preview.html"));
});
app.get("/ticket-preview.html", (req, res) => {
    res.sendFile(path.join(__dirname, "ticket-info", "ticket-preview.html"));
});

/* ================= SERVER ================= */
// app.listen(5000, () => {
//     console.log("🚀 Server running at http://localhost:5000");
// });
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
});