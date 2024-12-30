import React from "react";

const SignIn = () => {
  // Function to handle form submission
  // Form submit karne ka function jo API ke saath interact karta hai
const handleSignIn = async (e) => {
  e.preventDefault(); // Form ke default reload behavior ko rokte hain

  // Form se email aur password ka data extract karte hain
  const formData = {
    email: e.target.email.value, // Email input ka value
    password: e.target.password.value, // Password input ka value
  };

  try {
    // Backend ke Sign-In API par POST request bhejte hain
    const response = await fetch("http://localhost:8059/api/signin", {
      method: "POST", // HTTP method set karte hain
      headers: {
        "Content-Type": "application/json", // Request ka content type JSON define karte hain
      },
      body: JSON.stringify(formData), // Form data ko JSON format mein convert karte hain
    });

    // API response ko JSON format mein parse karte hain
    const result = await response.json();

    if (response.ok) {
      // Agar response successful hai toh success message show karo
      alert("Sign-In successful!");
      console.log("User Info:", result.user); // User ka data console mein dikhate hain
    } else {
      // Agar API se error response aaye toh error message show karo
      alert(result.message);
    }
  } catch (error) {
    // Agar network ya backend error aaye toh error handle karte hain
    console.error("Error signing in:", error);
  }
};


  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900 text-white">
      <form onSubmit={handleSignIn} className="bg-gray-800 p-8 rounded-lg shadow-lg w-96">
        <h1 className="text-2xl font-bold mb-6 text-center">Sign In</h1>

        {/* Email Input */}
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-2" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full p-2 bg-gray-700 border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your email"
            required
          />
        </div>

        {/* Password Input */}
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-2" htmlFor="password">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            className="w-full p-2 bg-gray-700 border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your password"
            required
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-yellow-400 hover:bg-yellow-600 text-white font-semibold py-2 rounded"
        >
          Sign-In
        </button>
      </form>
    </div>
  );
};

export default SignIn;
