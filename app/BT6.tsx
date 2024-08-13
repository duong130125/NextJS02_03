import React from "react";
import "./BT6.scss";

export default function BT6() {
  return (
    <nav className="navigation">
      <div className="navigation__logo">
        <img
          src="https://www.websiteessentials.com.au/wp-content/uploads/2023/03/logoipsum-logo-6.png"
          alt="Logoipsum"
        />
      </div>
      <ul className="navigation__menu">
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#updates">Updates</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#features">Features</a>
        </li>
        <li>
          <a href="#about">About Us</a>
        </li>
      </ul>
      <div className="navigation__user-icon">
        <img
          src="https://cellphones.com.vn/sforum/wp-content/uploads/2023/10/avatar-trang-4.jpg"
          alt="User"
        />
      </div>
    </nav>
  );
}
