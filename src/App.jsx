import React, { useState } from 'react';
    import './App.css';

    function SignUpForm({ onClose }) {
      return (
        <div className="signup-overlay">
          <div className="signup-form">
            <h3>Sign Up</h3>
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <button className="primary-button">Sign Up</button>
            <button className="close-button" onClick={onClose}>Close</button>
          </div>
        </div>
      );
    }

    function App() {
      const [showSignUp, setShowSignUp] = useState(false);

      const handleLoginClick = () => {
        setShowSignUp(true);
      };

      const handleCloseSignUp = () => {
        setShowSignUp(false);
      };

      return (
        <div className="app">
          <nav className="navbar">
            <div className="navbar-logo">
              <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2L2 22H22L12 2Z" fill="#FFC107"/>
              </svg>
              TriWare
            </div>
            <ul className="navbar-menu">
              <li><a href="#">Pricing</a></li>
              <li>
                <a href="#">
                  Products
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7 10L12 15L17 10H7Z" fill="#555"/>
                  </svg>
                </a>
              </li>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Contact Us</a></li>
            </ul>
            <div className="navbar-buttons">
              <button onClick={handleLoginClick}>Login</button>
              <button className="primary-button">Get Started Free</button>
            </div>
          </nav>
          <header className="header">
            <h1>Grow Better With TriWare</h1>
            <p>Marketing, sales, and service software that helps your business grow without compromise. Because "good for the business" should also mean "good for the customer."</p>
            <button className="primary-button">Start Free or Get a Demo</button>
          </header>
          <main className="main-content">
            <div className="features-section">
              <div className="feature-card">
                <h3>Marketing Hub</h3>
                <p>Marketing software to help you grow traffic, convert more visitors, and run complete inbound marketing campaigns at scale.</p>
                <a href="#">Learn More</a>
              </div>
              <div className="feature-card">
                <h3>Sales Hub</h3>
                <p>Sales CRM software to help you get deeper insights into prospects, automate tasks, and close more deals faster.</p>
                <a href="#">Learn More</a>
              </div>
              <div className="feature-card">
                <h3>Service Hub</h3>
                <p>Customer service software to help you connect with customers, exceed expectations, and turn them into promoters.</p>
                <a href="#">Learn More</a>
              </div>
            </div>
          </main>
          <footer className="footer">
            {/* Footer content */}
          </footer>
          {showSignUp && <SignUpForm onClose={handleCloseSignUp} />}
        </div>
      );
    }

    export default App;
