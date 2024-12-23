import React from 'react'
    import './App.css'

    function App() {
      return (
        <div>
          <nav className="navbar">
            <div className="navbar-logo">HubSpot</div>
            <ul className="navbar-menu">
              <li><a href="#">Product</a></li>
              <li><a href="#">Sales</a></li>
              <li><a href="#">Service</a></li>
              <li><a href="#">CMS</a></li>
              <li><a href="#">Operations</a></li>
            </ul>
            <div className="navbar-buttons">
              <button>Log in</button>
              <button>Sign up</button>
            </div>
          </nav>
          <header className="header">
            <h1>Welcome to HubSpot Clone</h1>
            <p>This is a simplified clone of the HubSpot website.</p>
          </header>
          <main className="main-content">
            <p>Main content area.</p>
          </main>
          <footer className="footer">
            <p>&copy; 2023 HubSpot Clone</p>
          </footer>
        </div>
      )
    }

    export default App
