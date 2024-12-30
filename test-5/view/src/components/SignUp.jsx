import React, { useState } from "react"; // React library import karte hain aur useState hook use karte hain state management ke liye
import axios from "axios"; // Axios library import karte hain API requests handle karne ke liye

// SignUp component banate hain
const SignUp = () => { 
  // State management ke liye hooks ka use
  const [formData, setFormData] = useState({
    name: "", // User ka name
    age: "", // User ka age
    email: "", // User ka email
    password: "", // User ka password
  });
  const [message, setMessage] = useState(""); // Signup success/error ka message store karte hain

  // Input fields ki values update karte hain
  const handleChange = (e) => {
    const { name, value } = e.target; // Input field ke name aur value ko destructure karte hain
    setFormData({ ...formData, [name]: value }); // State ko update karte hain
  };

  // Form submit hone par signup request send karte hain
  const handleSubmit = async (e) => {
    e.preventDefault(); // Default form submission behavior ko prevent karte hain
    try {
      // POST request API par bhejte hain signup data ke saath
      const response = await axios.post("http://localhost:8059/api/signup", formData);
      setMessage(response.data.message); // API response ka success message set karte hain
      setFormData({ name: "", age: "", email: "", password: "" }); // Form ko reset karte hain
    } catch (error) {
      // Agar error aata hai toh error message set karte hain
      setMessage(error.response?.data?.message || "Error occurred during signup");
    }
  };

  // JSX render karte hain signup form ko
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900 text-white">
      <form className="bg-gray-800 p-8 rounded-lg shadow-lg w-96" onSubmit={handleSubmit}>
        <h1 className="text-2xl font-bold mb-6 text-center">Sign Up</h1>

        {/* Name input field */}
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-2" htmlFor="name">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name} // State se input ki value set karte hain
            onChange={handleChange} // Change hone par state update hoti hai
            className="w-full p-2 bg-gray-700 border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your name"
            required
          />
        </div>

        {/* Age input field */}
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-2" htmlFor="age">
            Age
          </label>
          <input
            type="number"
            id="age"
            name="age"
            value={formData.age}
            onChange={handleChange}
            className="w-full p-2 bg-gray-700 border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your age"
            required
          />
        </div>

        {/* Email input field */}
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-2" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-2 bg-gray-700 border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your email"
            required
          />
        </div>

        {/* Password input field */}
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-2" htmlFor="password">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="w-full p-2 bg-gray-700 border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Create a password"
            required
          />
        </div>

        {/* Submit button */}
        <button
          type="submit"
          className="w-full bg-yellow-400 hover:bg-yellow-600 text-white font-semibold py-2 rounded"
        >
          Sign Up
        </button>

        {/* Success or error message */}
        {message && <p className="mt-4 text-center">{message}</p>}
      </form>
    </div>
  );
};

export default SignUp; // Component ko export karte hain taaki dusre files mein use kiya ja sake
