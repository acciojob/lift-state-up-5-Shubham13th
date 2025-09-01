import React, { useState } from "react";

function LoginForm({ isLoggedIn, onLogin }) {
  const [username, setUsername] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username.trim() !== "") {
      onLogin(); 
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: "inline-block" }}>
      <h2>Please Login</h2>
      <input
        type="text"
        placeholder="Enter username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        style={{ padding: "8px", margin: "5px" }}
      />
      <button type="submit" style={{ padding: "8px 12px", cursor: "pointer" }}>
        Login
      </button>
    </form>
  );
}

export default LoginForm;
