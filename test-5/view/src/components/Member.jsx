import axios from "axios"; // API requests handle karne ke liye axios import karte hain
import React, { useState, useEffect } from "react"; // React aur hooks import karte hain
import { useNavigate } from "react-router-dom"; // Navigation ke liye hook use karte hain

// Member component banate hain
const Member = () => {
  const [data, setData] = useState([]); // Employee list ko store karne ke liye state
  const navigate = useNavigate(); // Page navigation handle karne ke liye hook

  // Component ke render hone par employee data fetch hota hai
  useEffect(() => {
    fetchEmployees(); // Employees fetch karne ke liye function call
  }, []);

  // Employees ko backend se fetch karne ka function
  const fetchEmployees = () => {
    axios
      .get("http://localhost:8059/showemp") // API endpoint se data fetch karte hain
      .then((result) => setData(result.data)) // Data ko state me store karte hain
      .catch((error) => console.error("Error fetching data:", error)); // Error handle karte hain
  };

  // Employee ko delete karne ka function
  const deleteEmployee = (id) => {
    axios
      .delete(`http://localhost:8059/DeleteEmployee/${id}`) // Backend delete endpoint ko call karte hain
      .then(() => {
        alert("Employee deleted successfully"); // Successful deletion ka alert
        fetchEmployees(); // List ko refresh karte hain
      })
      .catch((error) => console.error("Error deleting employee:", error)); // Error handle karte hain
  };

  // Component ka JSX render
  return (
    <div className="min-h-screen bg-gray-900 text-white"> {/* Dark background and white text */}
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold text-center mb-6">Employee List</h1>
        {/* Employee list table */}
        <table className="table-auto w-full border border-gray-300">
          <thead>
            <tr className="bg-slate-800">
              <th className="px-4 py-2 border">ID</th>
              <th className="px-4 py-2 border">Name</th>
              <th className="px-4 py-2 border">Email</th>
              <th className="px-4 py-2 border">Salary</th>
              <th className="px-4 py-2 border">Place</th>
              <th className="px-4 py-2 border">Update</th>
              <th className="px-4 py-2 border">Delete</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              // Table rows generate karte hain fetched data ke liye
              <tr key={item.id} className="hover:bg-gray-100">
                <td className="px-4 py-2 border">{item.id}</td>
                <td className="px-4 py-2 border">{item.name}</td>
                <td className="px-4 py-2 border">{item.mail}</td>
                <td className="px-4 py-2 border">{item.salary}</td>
                <td className="px-4 py-2 border">{item.place}</td>
                <td className="px-4 py-2 border">
                  {/* Employee update button */}
                  <button
                    className="bg-yellow-500 text-white px-4 py-1 rounded hover:bg-yellow-600"
                    onClick={() => navigate(`/update/${item._id}`)} // Pass the employee's _id in the URL
                  >
                    Edit
                  </button>
                </td>
                <td className="px-4 py-2 border">
                  {/* Employee delete button */}
                  <button
                    className="bg-red-500 text-white px-4 py-1 rounded hover:bg-red-600"
                    onClick={() => deleteEmployee(item._id)} // Employee ko delete karne ka function call
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Member;
