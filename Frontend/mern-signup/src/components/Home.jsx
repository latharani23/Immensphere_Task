import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

const Home = () => {
  const navigate = useNavigate();
  const user = localStorage.getItem("userLoggedIn") === "true"; // Check if the user is logged in

  const handleLogout = () => {
    localStorage.removeItem('userLoggedIn'); // Remove the userLoggedIn flag from localStorage on logout
    navigate('/login'); // Redirect to login page after logout
  };
  return (
    <div>
      {/* First Navbar */}
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">Udemy</a>
        <a className="nav-link" onClick={() => navigate('/categories')}
          style={{ fontSize: '22px', fontFamily: 'sans-serif' }}> Categories </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo02"
          aria-controls="navbarTogglerDemo02"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul className="navbar-nav mr-auto">
            {/* Navbar items can be listed here */}
          </ul>

          {/* Search bar section */}
          <form className="form-inline my-2 my-lg-0">
            <div className="search-container">
              <input className="form-control" type="search" placeholder="Search for anything" /> 
            </div>
          </form>

          {/* Menu after Search Bar */}
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <button className="nav-link" onClick={() => navigate('/plans')}>Plans & Pricing</button>
            </li>
            <li className="nav-item">
              <button className="nav-link" onClick={() => navigate('/business')}>Udemy Business</button>
            </li>
            <li className="nav-item">
              <button className="nav-link" onClick={() => navigate('/teach')}>Teach on Udemy</button>
            </li>
            <li className="nav-item">
              <i className="bi bi-globe" onClick={() => navigate('/globe')}></i>
            </li>

            {/* Heart Icon */}
            <li className="nav-item">
              <i className="bi bi-heart" onClick={() => navigate('/Wishlist')}></i>
            </li>

            {/* Cart Icon */}
            <li className="nav-item">
              <i className="bi bi-cart3" onClick={() => navigate('/cart')}></i>
            </li>

            {/* Notification Icon */}
            <li className="nav-item">
              <i className="bi bi-bell" onClick={() => navigate('/notification')}></i>
            </li>

            <li className="nav-item">
              <i className="bi bi-person-circle" onClick={() => navigate('/profile')}></i>
              </li>
              <li className="nav-item">
                <button className="btn btn-link nav-button logout-btn" onClick={handleLogout}>Logout</button>
              </li>
            
          </ul>
        </div>
      </nav>

      {/* Second Navbar (Development Section) */}
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item dropdown">
              <button
                className="nav-link dropdown-toggle"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Development
              </button>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><span className="dropdown-item">Web Development</span></li>
                <li><span className="dropdown-item">Mobile Development</span></li>
                <li><span className="dropdown-item">Programming Langauages</span></li>
                <li><span className="dropdown-item">Game Development</span></li>
                <li><span className="dropdown-item">Database Design & Development</span></li>
                <li><span className="dropdown-item">Software Testing</span></li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <button
                className="nav-link dropdown-toggle"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Business
              </button>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><span className="dropdown-item">Enterprenuership</span></li>
                <li><span className="dropdown-item">Communication</span></li>
                <li><span className="dropdown-item">Management</span></li>
                <li><span className="dropdown-item">Sales</span></li>
                <li><span className="dropdown-item">Business Strategy</span></li>
  
              </ul>
            </li>
            <li className="nav-item dropdown">
              <button
                className="nav-link dropdown-toggle"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
              Finance & Accounting
              </button>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><span className="dropdown-item">Accounting & Bookkeeping</span></li>
                <li><span className="dropdown-item">Cryptocurrency</span></li>
                <li><span className="dropdown-item">Finance</span></li>
                <li><span className="dropdown-item">Financial Modeling & Analysis</span></li>
                <li><span className="dropdown-item">Investing & Trading</span></li>
               
              </ul>
            </li>
            <li className="nav-item dropdown">
              <button
                className="nav-link dropdown-toggle"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
              IT & Services
              </button>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><span className="dropdown-item">IT Certifications</span></li>
                <li><span className="dropdown-item">Network & Security</span></li>
                <li><span className="dropdown-item">Hardware</span></li>
                <li><span className="dropdown-item">Operating System & Servers</span></li>
                <li><span className="dropdown-item">Other IT & Software</span></li>
               
              </ul>
            </li>
            <li className="nav-item dropdown">
              <button
                className="nav-link dropdown-toggle"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
              Office Productivity
              </button>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><span className="dropdown-item">Microsoft</span></li>
                <li><span className="dropdown-item">Apple</span></li>
                <li><span className="dropdown-item">Google</span></li>
                <li><span className="dropdown-item">SAP</span></li>
                <li><span className="dropdown-item">Oracle</span></li>
                <li><span className="dropdown-item">Other Office Productivity</span></li>
              
              </ul>
            </li>
            <li className="nav-item dropdown">
              <button
                className="nav-link dropdown-toggle"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
              Personal Development
              </button>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><span className="dropdown-item">Personal Transformation</span></li>
                <li><span className="dropdown-item">Personal Productivity</span></li>
                <li><span className="dropdown-item">Leadership</span></li>
                <li><span className="dropdown-item">Career Development</span></li>
                <li><span className="dropdown-item">Parenting & Relationships</span></li>
                
              </ul>
            </li>
            <li className="nav-item dropdown">
              <button
                className="nav-link dropdown-toggle"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
              Design
              </button>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><span className="dropdown-item">Web Design</span></li>
                <li><span className="dropdown-item">Graphic Design & Illustration</span></li>
                <li><span className="dropdown-item">Design Tools</span></li>
                <li><span className="dropdown-item">User Experience Design</span></li>
                <li><span className="dropdown-item">Game Design</span></li>
                <li><span className="dropdown-item">3D & Animation</span></li>
                
              </ul>
            </li>
            <li className="nav-item dropdown">
              <button
                className="nav-link dropdown-toggle"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
              Marketing
              </button>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><span className="dropdown-item">Digital Marketing</span></li>
                <li><span className="dropdown-item">Search Engine Optimization</span></li>
                <li><span className="dropdown-item">Social Media Marketing</span></li>
                <li><span className="dropdown-item">Branding </span></li>
                <li><span className="dropdown-item">Marketing Fundamentals</span></li>
                <li><span className="dropdown-item">Marketing Analytics & Automation</span></li>
            
              </ul>
            </li>
            <li className="nav-item dropdown">
              <button
                className="nav-link dropdown-toggle"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Health & Fitness
              </button>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><span className="dropdown-item">Fitness</span></li>
                <li><span className="dropdown-item">General Health</span></li>
                <li><span className="dropdown-item">Sports</span></li>
                <li><span className="dropdown-item">Nutrition & Diet</span></li>
                <li><span className="dropdown-item">Yoga</span></li>
                <li><span className="dropdown-item">Mental Health</span></li>
                </ul>
            </li>
          </ul>  
        </div>
        </nav>
        <div className="carousel-container">
  <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
    <div className="carousel-inner">
    
      <div className="carousel-item active">
        <div className="carousel-content-container">
          <img className="d-block w-100" src="https://plus.unsplash.com/premium_photo-1664477129473-35c28d5446f2?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="First slide" />
          <div className="carousel-caption">
            <h1>Welcome Back</h1>
          </div>
        </div>
      </div>

      
      <div className="carousel-item">
        <div className="carousel-content-container">
          <img className="d-block w-100" src="https://images.unsplash.com/photo-1664575600796-ffa828c5cb6e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Second slide" />
          <div className="carousel-caption">
            <h3>Powered by community<br />Trust ratings and reviews to make a smarter choice. Get started with our top-rated courses.</h3>
          </div>
        </div>
      </div>

      
      <div className="carousel-item">
        <div className="carousel-content-container">
          <img className="d-block w-100" src="https://images.unsplash.com/photo-1665686304355-0b09b1e3b03c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Third slide" />
          <div className="carousel-caption">
            <h4>Go further in web development<br />Subscribe to a collection of our top courses in Javascript, CSS, React, and more with Personal Plan.</h4>
          </div>
        </div>
      </div>
    </div>

    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Previous</span>
    </button>
    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Next</span>
    </button>
  </div>
</div>


<div className="recommended-section">
  <h1>What to Learn Next</h1>
  <h3>Recommended for you</h3><br></br><br></br>
</div>
<div className="d-flex justify-content-start">
  <div className="card" style={{ width: '19rem', marginLeft: '27px', marginRight:'27px'}}>
    <img className="card-img-top" src="https://cdn-upmostlymulti.pressidium.com/wp-content/uploads/react-on-hover-event-handling.jpg" alt="Card image cap" />
    <div className="card-body">
      <h5 className="card-title">Mastering ReactJS</h5>
      <p className="card-text">Learn how to build dynamic, responsive, and high-performance web applications from scratch. using ReactJS, in this course we will learn basic to advanced </p>
      <a href="#" className="btn btn-primary">Go somewhere</a>
    </div>
  </div>

  <div className="card" style={{ width: '19rem', marginLeft: '27px', marginRight:'27px' }}>
    <img className="card-img-top" src="https://cdn.create-learn.us/next-image/create-learn-prod/uploads/apcsa/thumbnail/m6h-apcsa_java.png?width=640" alt="Card image cap" />
    <div className="card-body">
      <h5 className="card-title">Java Programming: Master OOP'S Concept</h5>
      <p className="card-text">it emphasizes both learning the fundamentals and mastering advanced concepts for building robust applications.</p>
      <a href="#" className="btn btn-primary">Go somewhere</a>
    </div>
  </div>
    <div className="card" style={{ width: '19rem', marginLeft: '27px', marginRight:'27px' }}>
    <img className="card-img-top" src="https://nietm.in/wp-content/uploads/2022/12/AI3.png" alt="Card image cap" />
    <div className="card-body">
      <h5 className="card-title">AI & Machine Learning</h5>
      <p className="card-text">Learn how to leverage data to train models and  make predictions, and build intelligent systems capable of solving complex problems across various domains.</p>
      <a href="#" className="btn btn-primary">Go somewhere</a>
    </div> 
  </div>
  {/* Second Set of 3 Cards */}
  <div className="card" style={{ width: '19rem', marginLeft: '27px', marginRight:'27px' }}>
    <img className="card-img-top" src="https://media.geeksforgeeks.org/wp-content/cdn-uploads/20200214170056/Web-Thumbnail.jpg" alt="Card image cap" />
    <div className="card-body">
      <h5 className="card-title">Web Development: Building Website</h5>
      <p className="card-text">learn how to create web pages using HTML, CSS, and JS, and explore powerful frameworks, like React.js and Angular.</p>
      <a href="#" className="btn btn-primary">Go somewhere</a>
    </div>
  </div>

  <div className="card" style={{ width: '19rem', marginLeft: '27px', marginRight:'27px' }}>
    <img className="card-img-top" src="data:image/png;base64,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" alt="Card image cap" />
    <div className="card-body">
      <h5 className="card-title">Mastering MongoDB </h5>
      <p className="card-text"> learn how to set up and manage a MongoDB database connection, perform CRUD operations, and understand the structure of documents and collections.</p>
      <a href="#" className="btn btn-primary">Go somewhere</a>
    </div>
  </div>

  <div className="card" style={{ width: '19rem', marginLeft: '27px', marginRight:'27px' }}>
    <img className="card-img-top" src="https://www.analyticssteps.com/backend/media/thumbnail/439166/9775751_1599214921_SQL%20(2).jpg" alt="Card image cap" />
    <div className="card-body">
      <h5 className="card-title">DBMS Techniques</h5>
      <p className="card-text">This course is designed for developers who want to deepen their understanding of SQL. writing queries and learn ACID properties, and also learn Normalization</p>
      <a href="#" className="btn btn-primary">Go somewhere</a>
    </div>
  </div>
  </div>

  <br></br><br></br>
     <br />
      <br />
      <div>
      <footer class="footer">
  
  <div class="footer-section first">
    <h2>Teach the world online</h2>
    <h5>Create an online video course, reach students across the globe, and earn money.</h5>
  </div>

  <div class="divider"></div>


  <div class="footer-section second">
    <h3>Top companies choose Udemy Business to build in-demand career skills.</h3>
  </div>


  <div class="divider"></div>


  <div class="footer-links">
    <div class="footer-column">
      <h4>Udemy Business</h4>
      <ul>
        <li><a href="#">Teach on Udemy</a></li>
        <li><a href="#">Get the app</a></li>
      </ul>
    </div>

    <div class="footer-column">
      <h4>About Us</h4>
      <ul>
        <li><a href="#">About us</a></li>
        <li><a href="#">Contact us</a></li>
        <li><a href="#">Careers</a></li>
        <li><a href="#">Blog</a></li>
      </ul>
    </div>

    <div class="footer-column">
      <h4>Help and Support</h4>
      <ul>
        <li><a href="#">Help and Support</a></li>
        <li><a href="#">Affiliate</a></li>
        <li><a href="#">Investors</a></li>
      </ul>
    </div>

    <div class="footer-column">
      <h4>Legal</h4>
      <ul>
        <li><a href="#">Terms</a></li>
        <li><a href="#">Privacy policy</a></li>
        <li><a href="#">Sitemap</a></li>
        <li><a href="#">Accessibility statement</a></li>
      </ul>
    </div>
  </div>
</footer>
<footer>
  <p class="copyright-text">© 2024 Udemy, Inc.</p>
</footer>
</div>
</div>
);
};
export default Home;
