import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Signup: React.FC = () => {
  const [fullname, setFullname] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("customer");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    try {
      const response = await fetch("http://localhost:8080/api/v1/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullname,
          username,
          email,
          password,
          role,
          active: true,
          avatar: "https://example.com/default-avatar.png",
          createdAt: new Date().toISOString(),
        }),
      });

      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.message || "Signup failed");
      }

      navigate("/login");
    } catch (err: any) {
      setError(err.message);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#efe2db] px-4">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
        <h2 className="text-3xl font-bold text-center text-[#7c160f] mb-6">Sign Up</h2>
        {error && <p className="text-red-500 text-center mb-4">{error}</p>}
        <form onSubmit={handleSignup}>
          <div className="mb-4">
            <label className="block text-[#1e0907] text-sm font-bold mb-2" htmlFor="fullname">
              Full Name
            </label>
            <input
              className="w-full px-3 py-2 border rounded text-[#1e0907] focus:outline-none focus:ring-2 focus:ring-[#bb6f57]"
              id="fullname"
              type="text"
              placeholder="Enter your full name"
              value={fullname}
              onChange={(e) => setFullname(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-[#1e0907] text-sm font-bold mb-2" htmlFor="username">
              Username
            </label>
            <input
              className="w-full px-3 py-2 border rounded text-[#1e0907] focus:outline-none focus:ring-2 focus:ring-[#bb6f57]"
              id="username"
              type="text"
              placeholder="Enter your username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-[#1e0907] text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              className="w-full px-3 py-2 border rounded text-[#1e0907] focus:outline-none focus:ring-2 focus:ring-[#bb6f57]"
              id="email"
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-[#1e0907] text-sm font-bold mb-2" htmlFor="password">
              Password
            </label>
            <input
              className="w-full px-3 py-2 border rounded text-[#1e0907] focus:outline-none focus:ring-2 focus:ring-[#bb6f57]"
              id="password"
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-[#1e0907] text-sm font-bold mb-2">Account Type</label>
            <div className="flex items-center mb-2">
              <input
                className="mr-2 leading-tight"
                type="radio"
                id="customer"
                name="accountType"
                value="customer"
                checked={role === "customer"}
                onChange={(e) => setRole(e.target.value)}
              />
              <label className="text-[#1e0907]" htmlFor="customer">Customer</label>
            </div>
            <div className="flex items-center">
              <input
                className="mr-2 leading-tight"
                type="radio"
                id="restaurantOwner"
                name="accountType"
                value="restaurantOwner"
                checked={role === "restaurantOwner"}
                onChange={(e) => setRole(e.target.value)}
              />
              <label className="text-[#1e0907]" htmlFor="restaurantOwner">Restaurant Owner</label>
            </div>
          </div>
          <div className="flex flex-col space-y-4">
            <button
              className="w-full bg-[#7c160f] hover:bg-[#bb6f57] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Sign Up
            </button>
            <div className="text-center text-sm text-[#1e0907]">
              Already have an account?
              <Link to="/login" className="text-[#7c160f] font-bold hover:underline ml-1">
                Login
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;