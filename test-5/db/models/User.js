const mongoose = require("mongoose"); // Mongoose library ko import kar rahe hain, jo MongoDB ke saath interact karne ke liye use hoti hai

// User schema define karte hain
const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true }, // User ka name (required field)
    age: { type: Number, required: true }, // User ka age (required field)
    email: { type: String, required: true, unique: true }, // User ka email (unique aur required field)
    password: { type: String, required: true }, // User ka hashed password (required field)
  },
  { timestamps: true } // Automatic fields for createdAt and updatedAt timestamps
);

// User model ko export karte hain, jo "User" collection represent karega
module.exports = mongoose.model("User", userSchema);
