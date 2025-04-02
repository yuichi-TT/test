import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
  
    try {
      const response = await fetch("http://localhost:8080/api/v1/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
  
      const data = await response.json();
      console.log("Response Data:", data); // In response để kiểm tra
  
      if (!response.ok) {
        throw new Error(data.message || "Login failed");
      }
  
      if (data.accessToken && data.username) { 
        localStorage.setItem("token", data.accessToken);
        console.log("Saved token:", data.accessToken);
        localStorage.setItem("username", data.username);
        console.log("Saved username:", data.username);
      } else {
        console.error("Username is missing from response");
      }
  
      navigate("/dashboard");
    } catch (err: any) {
      console.error("Error during login:", err);
      setError(err.message || "An unexpected error occurred.");
    }
  };
  

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#efe2db] px-4">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
        <h2 className="text-3xl font-bold text-center text-[#7c160f] mb-6">Login</h2>
        {error && <p className="text-red-500 text-center mb-4">{error}</p>}
        <form onSubmit={handleLogin}>
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
          <div className="flex flex-col space-y-4">
            <button
              className="w-full bg-[#7c160f] hover:bg-[#bb6f57] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Sign In
            </button>
            <div className="text-center text-sm text-[#1e0907]">
              Don't have an account?
              <Link to="/signup" className="text-[#7c160f] font-bold hover:underline ml-1">
                Sign Up
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
