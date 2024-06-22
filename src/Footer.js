
import React from 'react';
import { FaInstagram, FaYoutube, FaTwitter, FaFacebook, FaLinkedin } from 'react-icons/fa';
import './Footer.css';

function Footer() {
  const socialIcons = [
    { name: 'Instagram', icon: FaInstagram, url: 'https://instagram.com' },
    { name: 'YouTube', icon: FaYoutube, url: 'https://youtube.com' },
    { name: 'Twitter', icon: FaTwitter, url: 'https://twitter.com' },
    { name: 'Facebook', icon: FaFacebook, url: 'https://facebook.com' },
    { name: 'LinkedIn', icon: FaLinkedin, url: 'https://linkedin.com' }
  ];

  return (
    <footer className="footer">
      <img src="./Frame 62.png" alt="s" className='la'/>
      <div className="container">
      
        <p className="text">Follow us on</p>
        <div className="socialIcons">
          {socialIcons.map((social, index) => {
            const Icon = social.icon;
            return (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="socialLink"
                aria-label={social.name}
              >
                <Icon />
              </a>
            );
          })}
        </div>
      </div>
      <img src="./Frame 62.png" alt="s" className='la1'/>
    </footer>
  );
}

export default Footer;