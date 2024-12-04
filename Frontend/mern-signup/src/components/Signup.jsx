import React, { useState } from 'react';
import './Signup.css';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');  // Added state for username

  const handleSignup = (event) => {
    event.preventDefault();

    // Check if email, password, and username are valid
    if (email && password && username) {
      // Save credentials to localStorage (or sessionStorage)
      localStorage.setItem('email', email);
      localStorage.setItem('password', password);
      localStorage.setItem('username', username);  // Save username as well

      // Redirect user to login page after successful signup
      alert('Signup successful!');
      window.location.href = '/login';
    } else {
      alert('Please enter username, email, and password');
    }
  };

  return (
    <div className="signup-container">
      <h2>Signup</h2>
      <form onSubmit={handleSignup} className="signup-form">
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="input-field"
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="input-field"
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="input-field"
          required
        />
        <button type="submit" className="submit-button">Signup</button>
      </form>
    </div>
  );
};

export default Signup;
