import React, { useState, useEffect } from "react";

import Menu from "./Menu";

const TopBar = ({ user }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [showDropdown, setShowDropdown] = useState(false);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      try {
        setCurrentUser(JSON.parse(storedUser));
      } catch (e) {
        console.error("Error parsing user");
      }
    }
  }, [user]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    window.location.href = "/login";
  };

  return (
    <div className="topbar-container">
      <div className="indices-container">
        <div className="nifty">
          <p className="index">NIFTY 50</p>
          <p className="index-points">{100.2} </p>
          <p className="percent"> </p>
        </div>
        <div className="sensex">
          <p className="index">SENSEX</p>
          <p className="index-points">{100.2}</p>
          <p className="percent"></p>
        </div>
      </div>

      {/* User Welcome & Logout */}
      <div className="topbar-user">
        <div 
          className="user-welcome"
          onClick={() => setShowDropdown(!showDropdown)}
        >
          <span className="hi-text">Hi, </span>
          <span className="user-name">{currentUser?.username || user?.username || "User"}</span>
          <span className="welcome-arrow">▼</span>
        </div>
        
        {showDropdown && (
          <div className="topbar-dropdown">
            <div className="dropdown-user-info">
              <p className="dropdown-username">{currentUser?.username || user?.username}</p>
              <p className="dropdown-email">{currentUser?.email || user?.email}</p>
            </div>
            <hr />
            <button className="topbar-logout-btn" onClick={handleLogout}>
              🚪 Logout
            </button>
          </div>
        )}
      </div>

      <Menu />
    </div>
  );
};

export default TopBar;
