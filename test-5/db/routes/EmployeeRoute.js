const express = require("express"); // Express framework ko import karte hain
const Employee = require("../models/Employee"); // Employee model ko import karte hain

const router = express.Router(); // Router object create karte hain

// Naye employee ko add karne ka route
router.post("/AddEmployee", async (req, res) => {
  try {
    const { id, name, mail, salary, place } = req.body; // Request body se employee details extract karte hain

    // Employee ka ek naya instance create karte hain
    const newEmployee = new Employee({ id, name, mail, salary, place });
    await newEmployee.save(); // Database me save karte hain

    // Success response return karte hain
    res.status(201).json({ message: "Employee added successfully", newEmployee });
  } catch (error) {
    // Agar error aata hai to error message bhejte hain
    res.status(500).json({ message: "Error adding employee", error: error.message });
  }
});

// Saare employees ko fetch karne ka route (frontend listing ke liye optional ho sakta hai)
router.get("/GetEmployees", async (req, res) => {
  try {
    const employees = await Employee.find(); // Database se saare employees ko retrieve karte hain
    res.status(200).json(employees); // Employees list ko response me bhejte hain
  } catch (error) {
    // Agar error aata hai to error message bhejte hain
    res.status(500).json({ message: "Error fetching employees", error: error.message });
  }
});

// Delete an employee by ID
router.delete("/DeleteEmployee/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deletedEmployee = await Employee.findByIdAndDelete(id); // Find and delete employee by ID

    if (!deletedEmployee) {
      return res.status(404).json({ message: "Employee not found" });
    }

    res.status(200).json({ message: "Employee deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting employee", error: error.message });
  }
});

// Update an employee by ID
router.put("/UpdateEmployee/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const updatedEmployee = await Employee.findByIdAndUpdate(id, req.body, {
      new: true, // Return the updated document
      runValidators: true, // Validate the data against the schema
    });

    if (!updatedEmployee) {
      return res.status(404).json({ message: "Employee not found" });
    }

    res.status(200).json({ message: "Employee updated successfully", updatedEmployee });
  } catch (error) {
    res.status(500).json({ message: "Error updating employee", error: error.message });
  }
});

module.exports = router; // Router ko export karte hain taki baaki files me use ho sake
