'use client';

import { useState } from 'react';
import '../navbar/navbar.css'; // Import the CSS file

export default function Navbar() {
  const [expanded, setExpanded] = useState(false);

  return (
    <header className="navbar-header">
      <div className="navbar-container">
        <div className="navbar-inner">
          {/* Name Instead of Logo */}
          <div className="navbar-logo">
            <a href="#" className="navbar-logo-link">
              <h1 className="navbar-name">Muhib Siddiqui</h1> {/* Full Name */}
              {/* <h1 className="navbar-name">MS</h1> */} {/* Short Name */}
            </a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="navbar-mobile-toggle">
            <button
              type="button"
              className="navbar-toggle-button"
              onClick={() => setExpanded(!expanded)}
              aria-expanded={expanded}
            >
              {expanded ? (
                <svg
                  className="navbar-toggle-icon"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="navbar-toggle-icon"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>

          {/* Desktop Menu */}
          <div className="navbar-desktop-menu">
            <a href="#" className="navbar-menu-item">
              Home
            </a>
            <a href="#" className="navbar-menu-item">
              Portfolio
            </a>
            <a href="#" className="navbar-menu-item">
              About me
            </a>
            <a href="#" className="navbar-menu-item">
              Testimonials
            </a>
          </div>

          {/* Desktop Hire Me Button */}
          <nav className="navbar-hire-me">
            <a href="#" className="navbar-hire-button">
              Hire Me
            </a>
          </nav>
        </div>

        {/* Mobile Menu (Hidden by Default) */}
        <nav className={`navbar-mobile-menu ${expanded ? 'expanded' : ''}`}>
          <div className="navbar-mobile-container">
            <div className="navbar-mobile-links">
              <a href="#" className="navbar-mobile-item">
                Features
              </a>
              <a href="#" className="navbar-mobile-item">
                Pricing
              </a>
              <a href="#" className="navbar-mobile-item">
                Support
              </a>
              <a href="#" className="navbar-hire-button">
                Hire Me
              </a>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}