import React, { useState } from "react";
import axios from "axios";
import './Login.css'; 

const Login = () => {
  
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });


  const [message, setMessage] = useState("");

  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };


  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      
      const response = await axios.post("http://localhost:3000/api/login", formData);

    
      localStorage.setItem("token", response.data.token);

      
      setMessage("Login successful!");

    } catch (error) {
      
      setMessage(error.response ? error.response.data.message : "An error occurred");
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>

      {message && <p>{message}</p>}

  
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
