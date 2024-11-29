// Home.jsx
import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const user = localStorage.getItem("userLoggedIn") === "true"; // Check if the user is logged in

  return (
    <div className="home-container">
      <nav className="navbar">
        
    

        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/courses">Courses</Link></li>
          <li><Link to="/categories">Categories</Link></li>
          {user && (
            <>
              <li><Link to="/my-courses">My Courses</Link></li>
              <li><Link to="/profile">Profile</Link></li>
              <li><Link to="/wishlist">Wishlist</Link></li>
              <li><Link to="/instructor-dashboard">Instructor Dashboard</Link></li>
            </>
          )}
          {!user ? (
            <>
              <li><Link to="/login">Login</Link></li>
              <li><Link to="/signup">Sign Up</Link></li>
            </>
          ) : (
            <li><Link to="/logout">Logout</Link></li>
          )}
        </ul>

        <div className="search-bar">
          <input type="text" placeholder="Search courses..." />
        </div>
      </nav>

      <div className="home-content">
        <h1>Welcome to LearnPlatform</h1>
        {user ? (
          <p>Welcome back! Explore your courses and more.</p>
        ) : (
          <p>Get started by logging in or signing up to explore courses.</p>
        )}
      </div>
    </div>
  );
};

export default Home;
