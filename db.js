
const mysql = require("mysql2");

const dbHost = process.env.DB_HOST || "localhost";

const db = mysql.createConnection({
    host: dbHost,
    port: Number(process.env.DB_PORT || 3306),
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME || "metrolink_db",

    // Use SSL when connecting to a remote database.
    ssl: dbHost === "localhost" || dbHost === "127.0.0.1"
        ? undefined
        : {
            ca: process.env.DB_SSL_CA,
            rejectUnauthorized: true
        }
});

db.connect((err) => {
    if (err) {
        console.error("Database connection failed:", err.message);
    } else {
        console.log("MySQL Connected");
    }
});

module.exports = db;
