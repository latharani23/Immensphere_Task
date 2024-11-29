import React, { useState } from "react";
import axios from "axios";
import './Login.css';
import { useNavigate } from 'react-router-dom'; // Add this import

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [message, setMessage] = useState("");
  const navigate = useNavigate(); // Initialize the navigate hook

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

      // Store the token in localStorage
      localStorage.setItem("token", response.data.token);

      // Set success message
      setMessage("Login successful!");

      // Redirect to the home page after successful login
      navigate("/home"); // Redirect using navigate

    } catch (error) {
      setMessage(error.response ? error.response.data.message : "An error occurred");
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>

      {/* Display the message */}
      {message && <p>{message}</p>}

      {/* Login Form */}
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
        {this.state.allowLogin===true ? <Redirect to="/home" /> : <Redirect to="/" />}
      </form>
    </div>
  );
};

export default Login;
