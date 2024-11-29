import React, { useState } from "react";
import axios from "axios";
import './Signup.css';



const Signup = () => {
  // State to store form input data
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  // State to store messages (success or error)
  const [message, setMessage] = useState("");

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      
      const response = await axios.post("http://localhost:3000/api/signup", formData);

      
      setMessage(response.data.message);
    } catch (error) {
      
      setMessage(error.response ? error.response.data.message : "An error occurred" );
    }
  };

  return (
    <div className="signup-container">
      <h2>Sign up</h2>

      
      {message && <p>{message}</p>}

  
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={formData.username}
            onChange={handleChange}
            required
          />
        </div>
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
        <button type="submit">Sign up</button>
      </form>
    </div>
  );
};

export default Signup;
