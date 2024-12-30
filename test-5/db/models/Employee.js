const mongoose = require("mongoose"); // Mongoose library ko import karte hain, jo MongoDB ke saath interact karne ke liye use hoti hai

// Employee schema (database ke structure ko define kar raha hai)
const employeeSchema = new mongoose.Schema(
  {
    id: { type: String, required: true, unique: true }, // Employee ka unique ID (required aur unique field)
    name: { type: String, required: true }, // Employee ka naam (required field)
    mail: { type: String, required: true, unique: true }, // Employee ka email (required aur unique field)
    salary: { type: Number, required: true }, // Employee ka salary (required field)
    place: { type: String, required: true }, // Employee ka location/place (required field)
  },
  { timestamps: true } // Automatic fields ke liye (createdAt aur updatedAt)
);

// Employee model create karte hain jo `employees` collection ko represent karega
const Employee = mongoose.model("Employee", employeeSchema);

// Is model ko export karte hain, taaki dusre files mein iska use kiya ja sake
module.exports = Employee;
