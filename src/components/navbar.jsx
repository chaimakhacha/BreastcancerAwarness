import PersonIcon from '@mui/icons-material/Person'; 
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LanguageIcon from '@mui/icons-material/Language';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styling/main.css';
import '../styling/navbar.css';

const navbarItems = [
  { name: "About Breast Cancer", path: "/about" },
  { name: "Services", path: "#", hasDropdown: true },
  { name: "Doctors", path: "/doctors" },
  { name: "About Us", path: "/about-us" }
];

export default function Navbar() {
  const [hoveredItem, setHoveredItem] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);

  const dropdownItems = [
    { name: "Facts & Statistics", path: "/facts-stats" },
    { name: "Self-Exam Guide", path: "/self-exam" },
    { name: "FAQ & Myths", path: "/faq-myths" },
  ];

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
    setMobileDropdownOpen(false);
  };

  const toggleMobileDropdown = () => {
    setMobileDropdownOpen(!mobileDropdownOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    setMobileDropdownOpen(false);
  };

  return (
    <nav className="nav">
      <div className="nav-left">
        <Link to="/" className="logo-link">
          <img src="../src/pictures/logo.png" alt="logo" />
          <span>OctobreRose</span>
        </Link>
      </div>

      {/* Desktop Menu */}
      <ul className="nav-center">
        {navbarItems.map((item) => (
          <li
            key={item.name}
            className="nav-item"
            onMouseEnter={() => setHoveredItem(item.name)}
            onMouseLeave={() => setHoveredItem(null)}
          >
            {item.hasDropdown ? (
              <>
                <span className="nav-link">
                  {item.name}
                  <KeyboardArrowDownIcon className="arrow-icon" />
                </span>
                {hoveredItem === item.name && (
                  <ul className="dropdown">
                    {dropdownItems.map((drop) => (
                      <li key={drop.name} className="dropdown-item">
                        <Link to={drop.path} className="dropdown-link">
                          {drop.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </>
            ) : (
              <Link to={item.path} className="nav-link">
                {item.name}
              </Link>
            )}
          </li>
        ))}
      </ul>

      <div className="nav-right">
        <DarkModeIcon className="icon" fontSize="large" />
        <LanguageIcon className="icon" fontSize="large" />
        <PersonIcon className="icon" fontSize="large" />
        <MenuIcon 
          className="icon hamburger-icon" 
          fontSize="large"
          onClick={toggleMobileMenu}
        />
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${mobileMenuOpen ? 'active' : ''}`}>
        <div className="mobile-menu-header">
          <span className="mobile-logo">OctobreRose</span>
          <CloseIcon 
            className="close-icon" 
            fontSize="large"
            onClick={toggleMobileMenu}
          />
        </div>

        <ul className="mobile-nav-list">
          {navbarItems.map((item) => (
            <li key={item.name} className="mobile-nav-item">
              {item.hasDropdown ? (
                <>
                  <div 
                    className="mobile-nav-link"
                    onClick={toggleMobileDropdown}
                  >
                    {item.name}
                    <KeyboardArrowDownIcon 
                      className={`mobile-arrow ${mobileDropdownOpen ? 'rotated' : ''}`}
                    />
                  </div>
                  <ul className={`mobile-dropdown ${mobileDropdownOpen ? 'open' : ''}`}>
                    {dropdownItems.map((drop) => (
                      <li key={drop.name} className="mobile-dropdown-item">
                        <Link 
                          to={drop.path} 
                          className="mobile-dropdown-link"
                          onClick={closeMobileMenu}
                        >
                          {drop.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </>
              ) : (
                <Link 
                  to={item.path} 
                  className="mobile-nav-link"
                  onClick={closeMobileMenu}
                >
                  {item.name}
                </Link>
              )}
            </li>
          ))}
        </ul>

        <div className="mobile-icons">
          <DarkModeIcon className="mobile-icon" fontSize="large" />
          <LanguageIcon className="mobile-icon" fontSize="large" />
          <PersonIcon className="mobile-icon" fontSize="large" />
        </div>
      </div>

      {/* Overlay */}
      {mobileMenuOpen && (
        <div className="mobile-overlay" onClick={toggleMobileMenu}></div>
      )}
    </nav>
  );
}