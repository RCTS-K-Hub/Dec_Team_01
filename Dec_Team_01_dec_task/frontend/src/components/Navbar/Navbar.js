import React, { useState } from "react";
import "./Navbar.css";
import odysseySVG from "../images/Odyssey.png";
import sidebarIcon from "../images/widgets.png"; // Import the sidebar icon

export const HomePage = () => {
  const [showMobileNav, setShowMobileNav] = useState(false);

  const toggleMobileNav = () => {
    setShowMobileNav(!showMobileNav);
  };

  return (
    <div className="header">
      <img className="odyssey" alt="Odyssey" src={odysseySVG} />
      <img
        className="sidebar-icon"
        alt="Sidebar"
        src={sidebarIcon}
        onClick={toggleMobileNav}
      />
      <div className={`header-elements ${showMobileNav ? "show-mobile" : ""}`}>
        <div className="text-wrapper-12">Stay Connected</div>
        <div className="text-wrapper-10">Community</div>
        <div className="text-wrapper-11">Education</div>
        <div className="text-wrapper-9">About Us</div>
        <div className="frame-3">
          <div className="text-wrapper-17">Sign in</div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;