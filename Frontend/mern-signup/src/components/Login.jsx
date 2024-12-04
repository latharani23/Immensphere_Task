import React, { useState } from 'react';
import './Login.css';

 

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (event) => {
    event.preventDefault();

    // Retrieve credentials from localStorage
    const storedEmail = localStorage.getItem('email');
    const storedPassword = localStorage.getItem('password');

    // Compare entered credentials with stored credentials
    if (email === storedEmail && password === storedPassword) {
      alert('Login successful!');
      window.location.href = '/home'; // Redirect to home page after successful login
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <div className="login-container"> {/* Apply login-container style */}
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};
export default Login;