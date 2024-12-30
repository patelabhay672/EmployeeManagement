const express = require("express");
const bcrypt = require("bcrypt");
const User = require("../models/User");

const router = express.Router();
// Sign-Up Endpoint
router.post("/signup", async (req, res) => {
  try {
    const { name, age, email, password } = req.body; // Request body se user data extract karte hain

    // Check karte hain ki email se user pehle se exist karta hai ya nahi
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists with this email" }); // Agar user exist kare toh error return karte hain
    }

    // User ke password ko securely hash karte hain using bcrypt
    const hashedPassword = await bcrypt.hash(password, 10);

    // Naya user database mein save karte hain
    const newUser = new User({ name, age, email, password: hashedPassword });
    await newUser.save(); // MongoDB par data save hota hai

    res.status(201).json({ message: "User registered successfully", user: newUser }); // Success response bhejte hain
  } catch (error) {
    res.status(500).json({ message: "Error signing up", error: error.message }); // Server-side errors handle karte hain
  }
});

// Sign-In Endpoint
router.post("/signin", async (req, res) => {
  try {
    const { email, password } = req.body; // User ka email aur password request body se lete hain

    // Database mein user ka email find karte hain
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: "User not found" }); // Agar user na mile toh error return karte hain
    }

    // Password validate karte hain by comparing hash
    const isValidPassword = await bcrypt.compare(password, user.password);
    if (!isValidPassword) {
      return res.status(401).json({ message: "Invalid email or password" }); // Agar password galat ho toh error return karte hain
    }

    res.status(200).json({ message: "Sign-In successful", user }); // Successful login response bhejte hain
  } catch (error) {
    res.status(500).json({ message: "Error signing in", error: error.message }); // Server-side errors handle karte hain
  }
});

module.exports = router;
