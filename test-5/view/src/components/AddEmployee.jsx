import React, { useState } from "react";
import axios from "axios";

const AddEmployee = () => {
  // State variables for form inputs
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [mail, setMail] = useState("");
  const [salary, setSalary] = useState("");
  const [place, setPlace] = useState("");
  const [message, setMessage] = useState(""); // To display success or error messages
  const [error, setError] = useState(null); // To display validation errors

  const handlePost = async (e) => {
    e.preventDefault();

    // Basic form validation
    if (!id || !name || !mail || !salary || !place) {
      setError("All fields are required.");
      return;
    }

    try {
      const response = await axios.post("http://localhost:8059/AddEmployee", {
        id,
        name,
        mail,
        salary,
        place,
      });
      setMessage("Employee added successfully!");
      setError(null);
      // Reset form fields after successful submission
      setId("");
      setName("");
      setMail("");
      setSalary("");
      setPlace("");
    } catch (err) {
      setError("Failed to add employee. Please try again.");
      setMessage("");
      console.error(err);
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center">
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold text-center mb-6">Add Employee</h1>
        <form
          className="bg-gray-800 p-8 rounded-lg shadow-lg mx-auto w-full max-w-md"
          onSubmit={handlePost}
        >
          {/* Display success or error messages */}
          {message && <p className="text-green-500 text-center mb-4">{message}</p>}
          {error && <p className="text-red-500 text-center mb-4">{error}</p>}

          <div className="mb-4">
            <label className="block text-sm font-semibold mb-2" htmlFor="id">
              Employee ID
            </label>
            <input
              type="text"
              id="id"
              name="id"
              value={id}
              className="w-full p-2 bg-gray-700 border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              onChange={(e) => setId(e.target.value)}
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-semibold mb-2" htmlFor="name">
              Employee Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              className="w-full p-2 bg-gray-700 border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-semibold mb-2" htmlFor="mail">
              Employee Email
            </label>
            <input
              type="email"
              id="mail"
              name="mail"
              value={mail}
              className="w-full p-2 bg-gray-700 border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              onChange={(e) => setMail(e.target.value)}
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-semibold mb-2" htmlFor="salary">
              Employee Salary
            </label>
            <input
              type="number"
              id="salary"
              name="salary"
              value={salary}
              className="w-full p-2 bg-gray-700 border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              onChange={(e) => setSalary(e.target.value)}
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-semibold mb-2" htmlFor="place">
              Employee Place
            </label>
            <input
              type="text"
              id="place"
              name="place"
              value={place}
              className="w-full p-2 bg-gray-700 border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              onChange={(e) => setPlace(e.target.value)}
            />
          </div>

          <button
            type="submit"
            className="w-full bg-yellow-400 hover:bg-yellow-600 text-white font-semibold py-2 rounded"
          >
            Add Employee
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddEmployee;
