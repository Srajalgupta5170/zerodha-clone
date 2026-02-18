import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);
  const [showDropdown, setShowDropdown] = useState(false);

  useEffect(() => {
    // Check if user is logged in
    const token = localStorage.getItem("token");
    const userData = localStorage.getItem("user");
    if (token && userData) {
      setIsLoggedIn(true);
      try {
        setUser(JSON.parse(userData));
      } catch (e) {
        console.error("Error parsing user data");
      }
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setIsLoggedIn(false);
    setUser(null);
    setShowDropdown(false);
    window.location.href = "/";
  };

  const getInitials = (name) => {
    if (!name) return "U";
    return name.substring(0, 2).toUpperCase();
  };

  return (
   
      <nav className="navbar navbar-expand-lg border-bottom " style={{backgroundColor:"#fff"}}>
        <div className="container p-2">
          <Link className="navbar-brand" to="/">
          <img src="/media/Images/logo.svg" alt="Zerodha Logo" className="img-fluid" style={{ width: "30%" }} />
            
          </Link>
          
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
           
            <div className="d-flex ms-auto align-items-center">
                 <ul className="navbar-nav mb-2 mb-lg-0">
              
              <li className="nav-item">
                <Link className="nav-link active" to="/about">
                  About
                </Link>
              </li>
               <li className="nav-item">
                <Link className="nav-link active" to="/product">
                  Product
                </Link>
              </li>
               <li className="nav-item">
                <Link className="nav-link active" to="/pricing">
                  Pricing
                </Link>
              </li>

               <li className="nav-item">
                <Link className="nav-link active" to="/support">
                  Support
                </Link>
              </li>
               </ul>

               {/* Auth Buttons */}
               <div className="auth-buttons">
                 {!isLoggedIn ? (
                   <>
                     <Link to="/signup" className="btn-signup">
                       Sign up
                     </Link>
                     <a href={`${process.env.REACT_APP_DASHBOARD_URL || 'http://localhost:3001'}/login`} className="btn-login">
                       Login
                     </a>
                   </>
                 ) : (
                   <div className="user-menu">
                     <div 
                       className="user-avatar-btn"
                       onClick={() => setShowDropdown(!showDropdown)}
                     >
                       <div className="avatar-circle">
                         {getInitials(user?.username)}
                       </div>
                       <span className="username-text">{user?.username}</span>
                       <span className="dropdown-arrow">▼</span>
                     </div>
                     
                     {showDropdown && (
                       <div className="user-dropdown">
                         <div className="dropdown-header">
                           <div className="dropdown-avatar">
                             {getInitials(user?.username)}
                           </div>
                           <div className="dropdown-info">
                             <p className="dropdown-name">{user?.username}</p>
                             <p className="dropdown-email">{user?.email}</p>
                           </div>
                         </div>
                         <hr />
                         <a href={process.env.REACT_APP_DASHBOARD_URL || 'http://localhost:3001'} className="dropdown-item">
                           <span>📊</span> Dashboard
                         </a>
                         <a href={`${process.env.REACT_APP_DASHBOARD_URL || 'http://localhost:3001'}/holdings`} className="dropdown-item">
                           <span>💼</span> Holdings
                         </a>
                         <a href={`${process.env.REACT_APP_DASHBOARD_URL || 'http://localhost:3001'}/funds`} className="dropdown-item">
                           <span>💰</span> Funds
                         </a>
                         <hr />
                         <button onClick={handleLogout} className="dropdown-item logout-item">
                           <span>🚪</span> Logout
                         </button>
                       </div>
                     )}
                   </div>
                 )}
               </div>
            </div>
            
          </div>
        </div>
      </nav>
    
  );
}

export default Navbar;
