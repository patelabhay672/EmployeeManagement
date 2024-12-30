const express = require("express"); // Express framework ko import kar rahe hain
const cors = require("cors"); // Cross-Origin Resource Sharing handle karne ke liye
const bodyParser = require("body-parser"); // Request body ko parse karne ke liye
const employeeRoutes = require("./routes/EmployeeRoute"); // Employee routes ko import kar rahe hain
const Employee = require("./models/Employee"); // Employee model ko import karte hain, jo database ke employee data ko represent karta hai
const userRoutes = require("./routes/UserRoutes"); // User-related routes ko handle karne ke liye import

// App ko initialize kar rahe hain
const server = express();

// Middleware setup kar rahe hain
server.use(cors()); // Cross-Origin requests allow kar raha hai
server.use(bodyParser.json()); // Request body ko JSON format mein parse kar raha hai
server.use(express.json()); // Modern JSON parsing middleware use kar rahe hain

// Database connection setup kar rahe hain
require("./database/Connection"); // Database connection file ko include kiya hai

// Routes setup kar rahe hain
server.use("/", employeeRoutes); // "/" route par EmployeeRoute ko handle kar rahe hain

server.get("/showemp", async (req, res) => {
  try {
    const users = await Employee.find(); // Database se saare employees ko fetch karte hain
    res.status(200).json(users); // Response me data bhejte hain
  } catch (error) {
    res.status(500).json({ message: "Error fetching employees", error: error.message });
  }
});

server.use("/api", userRoutes); // "/api" route par UserRoutes handle karta hai

// Server ko start kar rahe hain
server.listen(8059, () => {
  console.log("Server is running on http://localhost:8059"); // Server successful start hone par message print karega
});
