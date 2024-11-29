import React, { useState } from "react";
import Signup from "../src/components/Signup";
import Login from "../src/components/Login";
import Home from "../src/components/Home";


import "./App.css";

function App() {
  const [activeComponent, setActiveComponent] = useState(null); // Track which component to show

  const handleNavigation = (component) => {
    setActiveComponent(component); // Update the active component
  };

  return (
    <div className="App">
      <nav>
        <div className="logo">UniverseOfTechHub</div>
        <ul className="nav-links">
          <li>
            <button onClick={() => handleNavigation("signup")}>Sign Up</button>
          </li>
          <li>
            <button onClick={() => handleNavigation("login")}>Login</button>
          </li>
        </ul>
      </nav>
      <h1>Welcome to the UniverseOfTechHub</h1>
      <div className="content">
        {/* Conditionally render components */}
        {activeComponent === "signup" && <Signup />}
        {activeComponent === "login" && <Login />}
        {activeComponent === "home" && <Home />}


      </div>
    </div>
  );
}

export default App;
