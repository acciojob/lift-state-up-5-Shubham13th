
import React from "react";
import './../styles/App.css';

const App = () => {
  return (
     <div style={{ textAlign: "center", marginTop: "50px" }}>
      {isLoggedIn ? (
        <h2>Welcome! You are logged in.</h2>
      ) : (
        <LoginForm isLoggedIn={isLoggedIn} onLogin={handleLogin} />
      )}
    </div>
  )
}

export default App
