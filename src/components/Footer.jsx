import "../styling/footer.css";
import { Link } from 'react-router-dom';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import FavoriteIcon from '@mui/icons-material/Favorite';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "About Breast Cancer", path: "/about" },
    { name: "Facts & Statistics", path: "/facts-stats" },
    { name: "Self-Exam Guide", path: "/self-exam" },
    { name: "FAQ & Myths", path: "/faq-myths" },
  ];

  const resources = [
    { name: "Doctors", path: "/doctors" },
    { name: "About Us", path: "/about-us" },
  ];

  const sescSocialMedia = [
    { name: "Facebook", icon: <FacebookIcon />, url: "https://www.facebook.com/Setifian.Scientific.Club" },
    { name: "Instagram", icon: <InstagramIcon />, url: "https://www.instagram.com/setifian.scientific.club/" },
    { name: "LinkedIn", icon: <LinkedInIcon />, url: "https://www.linkedin.com/company/setifian-scientific-club-sesc/?originalSubdomain=d" },
  ];

  return (
    <footer className="footer">
      <div className="footer-content">
        {/* Brand Section */}
        <div className="footer-section footer-brand">
          <div className="footer-logo">
            <img src="../src/pictures/logo.png" alt="OctobreRose Logo" />
            <h3>OctobreRose</h3>
          </div>
          <p className="footer-tagline">
            Raising awareness about breast cancer and promoting early detection for a healthier Algeria.
          </p>
        </div>

        {/* Quick Links */}
        <div className="footer-section">
          <h4 className="footer-title">Quick Links</h4>
          <ul className="footer-links">
            {quickLinks.map((link, index) => (
              <li key={index}>
                <Link to={link.path} className="footer-link">
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Resources */}
        <div className="footer-section">
          <h4 className="footer-title">Resources</h4>
          <ul className="footer-links">
            {resources.map((link, index) => (
              <li key={index}>
                <Link to={link.path} className="footer-link">
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div className="footer-section">
          <h4 className="footer-title">Contact Us</h4>
                    <div className="sesc-social">
            {sescSocialMedia.map((social, index) => (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="sesc-social-link"
                aria-label={social.name}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </div>


       <p className="copyright">
            © {currentYear} OctobreRose. All rights reserved.
          </p>
    </footer>
  );
}