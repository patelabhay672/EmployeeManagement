// Mongoose ko import kar rahe hain database ke saath kaam karne ke liye
const mongoose = require("mongoose");

// MongoDB connection URI define kiya gaya hai
const db = "mongodb+srv://abhay0302:abhay%40123@cluster0.mqab4.mongodb.net/abhay-1?retryWrites=true&w=majority&replicaSet=atlas-d2clq0-shard-0&authSource=admin&ssl=true&appName=Cluster0";

// Database ke saath connection establish karne ki koshish kar rahe hain
mongoose
  .connect(db) // Deprecated options remove kar diye hain
  .then(() => console.log("MongoDB connection successful")) // Agar connection successful hua to message print hoga
  .catch((error) => console.error("MongoDB connection error:", error)); // Agar error aaya to error message print hoga
