import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const UpdateEmployee = () => {
  const { id } = useParams(); // URL se employee ka id nikalna (Extract id from URL)

  // State banaya form ke data ko track karne ke liye
  const [formData, setFormData] = useState({
    name: "", // Employee ka naam
    mail: "", // Employee ka email
    salary: "", // Employee ka salary
    place: "", // Employee ka jagah (place)
  });

  // Update status ko track karne ke liye state
  const [status, setStatus] = useState("");

  // useEffect ka use karke employee ka data fetch karna id ke basis pe
  useEffect(() => {
    axios
      .get(`http://localhost:8059/showemp/${id}`) // Backend API se data mangwana
      .then((response) => setFormData(response.data)) // Response se formData ko set karna
      .catch((error) =>
        console.error("Error fetching employee data:", error) // Agar error aaye to console me dikhana
      );
  }, [id]); // id jab change ho tabhi useEffect chalega

  // Form ke inputs ka value handle karne ke liye function
  const handleChange = (e) => {
    const { name, value } = e.target; // Input ke name aur value ko destructure karna
    setFormData({ ...formData, [name]: value }); // State me input ka value update karna
  };

  // Form submit karte waqt handle karne ka function
  const handleSubmit = async (e) => {
    e.preventDefault(); // Default form submit behavior ko rokna
    setStatus(""); // Status message reset karna

    try {
      // Backend ko updated data bhejna
      const response = await axios.put(
        `http://localhost:8059/UpdateEmployee/${id}`, // Specific employee ka ID
        formData // Updated form data
      );

      if (response.status === 200) {
        setStatus("Employee updated successfully!"); // Agar update ho gaya, success message
      } else {
        setStatus("Failed to update employee."); // Agar update nahi hua, failure message
      }
    } catch (error) {
      console.error(error); // Agar error aaye to console me dikhana
      setStatus("An error occurred while updating the employee."); // Error message set karna
    }
  };

  // Component ka return part - form aur UI render karta hai
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900 text-white">
      <form
        className="bg-gray-800 p-8 rounded-lg shadow-lg w-96"
        onSubmit={handleSubmit} // Form submit karne par handleSubmit chalega
      >
        <h1 className="text-2xl font-bold mb-6 text-center">Update Employee</h1>

        {/* Status message agar available ho to show karo */}
        {status && (
          <div
            className={`text-center mb-4 ${
              status.includes("successfully") // Success ya failure ke basis par color change
                ? "text-green-500"
                : "text-red-500"
            }`}
          >
            {status}
          </div>
        )}

        {/* Employee Name input */}
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-2" htmlFor="name">
            Employee Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name} // FormData se value set
            onChange={handleChange} // Input change par handleChange chalega
            className="w-full p-2 bg-gray-700 border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Employee Email input */}
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-2" htmlFor="mail">
            Employee Email
          </label>
          <input
            type="email"
            id="mail"
            name="mail"
            value={formData.mail} // FormData se value set
            onChange={handleChange} // Input change par handleChange chalega
            className="w-full p-2 bg-gray-700 border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Employee Salary input */}
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-2" htmlFor="salary">
            Employee Salary
          </label>
          <input
            type="number"
            id="salary"
            name="salary"
            value={formData.salary} // FormData se value set
            onChange={handleChange} // Input change par handleChange chalega
            className="w-full p-2 bg-gray-700 border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Employee Place input */}
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-2" htmlFor="place">
            Employee Place
          </label>
          <input
            type="text"
            id="place"
            name="place"
            value={formData.place} // FormData se value set
            onChange={handleChange} // Input change par handleChange chalega
            className="w-full p-2 bg-gray-700 border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Update button */}
        <button
          type="submit"
          className="w-full bg-yellow-400 hover:bg-yellow-600 text-white font-semibold py-2 rounded"
        >
          Update Employee
        </button>
      </form>
    </div>
  );
};

export default UpdateEmployee;
