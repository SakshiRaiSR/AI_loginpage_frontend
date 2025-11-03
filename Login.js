import React, { useState } from "react";
import "./Login.css"; 

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simple validation
    if (!email || !password) {
      setError("Please enter both email and password.");
      return;
    }

    // Dummy authentication logic
    if (email === "admin@example.com" && password === "123456") {
      alert("Login Successful ✅");
      setError("");
    } else {
      setError("Invalid email or password ❌");
    }
  };

  return (

    <>
      {/* Navbar */}
      <nav className="navbar">
        <div className="navbar-logo">Chat Buddy</div>
        <ul className="navbar-links">
          <li>Home</li>
          <li>About</li>
          <li>FAQ</li>
        </ul>
      </nav>

  <div className="page-container">
    <div className="left-tagline">
      <h1><div>Connect.</div> 
      <div>Converse.</div> Create.</h1>
    </div>

    <div className="login-container">
      <h2>Get Started</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input 
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit">Log In</button>

        {error && <p className="error">{error}</p>}
      </form>

    </div>
    </div>
    </>
  );
}

export default Login;