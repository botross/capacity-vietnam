"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import axios from "axios";

export default function Footer1() {
  const [success, setSuccess] = useState(true);
  const [showMessage, setShowMessage] = useState(false);

  const handleShowMessage = () => {
    setShowMessage(true);
    setTimeout(() => {
      setShowMessage(false);
    }, 3000);
  };

  const sendEmail = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;

    try {
      const response = await axios.post(
        "https://express-brevomail.vercel.app/api/contacts",
        {
          email,
        }
      );

      if ([200, 201].includes(response.status)) {
        e.target.reset();
        setSuccess(true);
        handleShowMessage();
      } else {
        setSuccess(false);
        handleShowMessage();
      }
    } catch (error) {
      console.error("Error:", error.response?.data || "An error occurred");
      setSuccess(false);
      handleShowMessage();
      e.target.reset();
    }
  };

  return (
    <>
      <style jsx>{`
        .modern-footer {
          background: linear-gradient(135deg, #2d5175 0%, #1a3a52 50%, #2d5175 100%);
          position: relative;
          overflow: hidden;
          color: white;
          padding: 80px 0 0;
          margin-top: 100px;
        }
        
        .container {
          position: relative;
          z-index: 2;
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
        }
        
        .footer-top {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          align-items: center;
          margin-bottom: 60px;
          padding-bottom: 40px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }
        
        .footer-brand {
          display: flex;
          flex-direction: column;
        }
        
        .footer-logo {
          margin-bottom: 24px;
          transition: transform 0.3s ease;
        }
        
        .footer-logo:hover {
          transform: scale(1.05);
        }
        
        .brand-tagline {
          font-size: 24px;
          font-weight: 600;
          color: #68b0aa;
          margin-bottom: 12px;
          line-height: 1.3;
        }
        
        .brand-description {
          font-size: 16px;
          line-height: 1.6;
          color: rgba(255, 255, 255, 0.8);
          max-width: 400px;
        }
        
        .footer-contact {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }
        
        .contact-item {
          display: flex;
          align-items: center;
          gap: 16px;
          padding: 16px;
          background: rgba(255, 255, 255, 0.05);
          border-radius: 12px;
          transition: all 0.3s ease;
          border: 1px solid rgba(255, 255, 255, 0.1);
        }
        
        .contact-item:hover {
          background: rgba(104, 176, 170, 0.1);
          border-color: #68b0aa;
          transform: translateY(-2px);
        }
        
        .contact-icon {
          width: 20px;
          height: 20px;
          background: #68b0aa;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 12px;
          flex-shrink: 0;
        }
        
        .contact-content {
          font-size: 14px;
          line-height: 1.4;
        }
        
        .footer-main {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr 1.5fr;
          gap: 40px;
          margin-bottom: 60px;
        }
        
        .footer-section h3 {
          font-size: 20px;
          font-weight: 600;
          color: #68b0aa;
          margin-bottom: 24px;
          position: relative;
        }
        
        .footer-section h3::after {
          content: '';
          position: absolute;
          bottom: -8px;
          left: 0;
          width: 40px;
          height: 2px;
          background: #68b0aa;
          border-radius: 2px;
        }
        
        .about-text {
          font-size: 15px;
          line-height: 1.7;
          color: rgba(255, 255, 255, 0.8);
          margin-bottom: 24px;
        }
        
        .social-links {
          display: flex;
          gap: 12px;
        }
        
        .social-link {
          width: 40px;
          height: 40px;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          text-decoration: none;
          color: white;
          transition: all 0.3s ease;
          border: 1px solid rgba(255, 255, 255, 0.1);
        }
        
        .social-link:hover {
          background: #68b0aa;
          transform: translateY(-3px);
          box-shadow: 0 8px 25px rgba(104, 176, 170, 0.4);
          border-color: #68b0aa;
        }
        
        .footer-links {
          list-style: none;
          padding: 0;
          margin: 0;
        }
        
        .footer-links li {
          margin-bottom: 12px;
        }
        
        .footer-links a {
          color: rgba(255, 255, 255, 0.8);
          text-decoration: none;
          font-size: 14px;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          gap: 8px;
        }
        
        .footer-links a::before {
          content: '→';
          color: #68b0aa;
          opacity: 0;
          transform: translateX(-10px);
          transition: all 0.3s ease;
        }
        
        .footer-links a:hover {
          color: #68b0aa;
          transform: translateX(5px);
        }
        
        .footer-links a:hover::before {
          opacity: 1;
          transform: translateX(0);
        }
        
        .newsletter-form {
          position: relative;
        }
        
        .newsletter-input {
          width: 100%;
          padding: 16px 20px;
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 12px;
          background: rgba(255, 255, 255, 0.05);
          color: white;
          font-size: 14px;
          margin-bottom: 16px;
          transition: all 0.3s ease;
        }
        
        .newsletter-input::placeholder {
          color: rgba(255, 255, 255, 0.5);
        }
        
        .newsletter-input:focus {
          outline: none;
          border-color: #68b0aa;
          background: rgba(255, 255, 255, 0.1);
          box-shadow: 0 0 20px rgba(104, 176, 170, 0.2);
        }
        
        .newsletter-btn {
          width: 100%;
          padding: 16px 20px;
          background: linear-gradient(135deg, #68b0aa, #5a9b96);
          border: none;
          border-radius: 12px;
          color: white;
          font-size: 14px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }
        
        .newsletter-btn:hover {
          background: linear-gradient(135deg, #5a9b96, #4d8a86);
          transform: translateY(-2px);
          box-shadow: 0 10px 30px rgba(104, 176, 170, 0.4);
        }
        
        .newsletter-message {
          margin-top: 12px;
          padding: 12px 16px;
          border-radius: 8px;
          font-size: 13px;
          font-weight: 500;
          opacity: 0;
          transform: translateY(10px);
          transition: all 0.3s ease;
        }
        
        .newsletter-message.active {
          opacity: 1;
          transform: translateY(0);
        }
        
        .newsletter-message.success {
          background: rgba(82, 196, 26, 0.1);
          color: #52c41a;
          border: 1px solid rgba(82, 196, 26, 0.2);
        }
        
        .newsletter-message.error {
          background: rgba(255, 77, 79, 0.1);
          color: #ff4d4f;
          border: 1px solid rgba(255, 77, 79, 0.2);
        }
        
        .footer-bottom {
          text-align: center;
          padding: 30px 0;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
          color: rgba(255, 255, 255, 0.6);
          font-size: 14px;
        }
        
        .footer-bottom-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 20px;
        }
        
        .footer-links-bottom {
          display: flex;
          gap: 30px;
        }
        
        .footer-links-bottom a {
          color: rgba(255, 255, 255, 0.6);
          text-decoration: none;
          transition: color 0.3s ease;
        }
        
        .footer-links-bottom a:hover {
          color: #68b0aa;
        }
        
        @media (max-width: 768px) {
          .footer-top {
            grid-template-columns: 1fr;
            gap: 40px;
          }
          
          .footer-main {
            grid-template-columns: 1fr;
            gap: 40px;
          }
          
          .footer-bottom-content {
            flex-direction: column;
            text-align: center;
          }
          
          .footer-links-bottom {
            justify-content: center;
          }
        }
        
        .mental-health-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: rgba(104, 176, 170, 0.1);
          border: 1px solid rgba(104, 176, 170, 0.3);
          padding: 8px 16px;
          border-radius: 20px;
          font-size: 12px;
          color: #68b0aa;
          margin-bottom: 16px;
        }
      `}</style>

      <footer className="modern-footer">

        <div className="container">
          {/* Top Section */}
          <div className="footer-top">
            <div className="footer-brand">
              <Link href="/" className="footer-logo">
                <Image
                  alt="Capacity Vietnam Logo"
                  src="/icon/logo-light.png"
                  width={174}
                  height={60}
                />
              </Link>
              <h2 className="brand-tagline">Healing Minds, Transforming Lives</h2>
              <p className="brand-description">
                Comprehensive mental health services throughout Vietnam, fostering recovery,
                resilience, and hope for a brighter tomorrow.
              </p>
            </div>

            <div className="footer-contact">
              <div className="contact-item">
                <div className="contact-icon">📍</div>
                <div className="contact-content">
                  <strong>Visit Our Center</strong><br />
                  66 Broklyant Street, New York 3269
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-icon">📞</div>
                <div className="contact-content">
                  <strong>24/7 Helpline</strong><br />
                  012 345 678 9101 • Emergency Support
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-icon">✉️</div>
                <div className="contact-content">
                  <strong>Get Support</strong><br />
                  support@capacityvietnam.com
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="footer-main">
            <div className="footer-section">
              <h3>Our Mission</h3>
              <p className="about-text">
                At Capacity Vietnam, we believe everyone deserves access to quality mental health care.
                Our dedicated team provides compassionate, evidence-based treatment to help you thrive.
              </p>
              <div className="social-links">
                <a href="#" className="social-link" title="Facebook">
                  <i className="fa fa-facebook"></i>
                </a>
                <a href="#" className="social-link" title="Twitter">
                  <i className="fa fa-twitter"></i>
                </a>
                <a href="#" className="social-link" title="Instagram">
                  <i className="fa fa-instagram"></i>
                </a>
                <a href="#" className="social-link" title="LinkedIn">
                  <i className="fa fa-linkedin"></i>
                </a>
              </div>
            </div>

            <div className="footer-section">
              <h3>Services</h3>
              <ul className="footer-links">
                <li><Link href="/services">Individual Therapy</Link></li>
                <li><Link href="/services">Group Counseling</Link></li>
                <li><Link href="/services">Family Support</Link></li>
                <li><Link href="/services">Crisis Intervention</Link></li>
                <li><Link href="/services">Wellness Programs</Link></li>
              </ul>
            </div>

            <div className="footer-section">
              <h3>Resources</h3>
              <ul className="footer-links">
                <li><Link href="/blog">Mental Health Blog</Link></li>
                <li><Link href="/resources">Self-Help Tools</Link></li>
                <li><Link href="/support-groups">Support Groups</Link></li>
                <li><Link href="/emergency">Emergency Resources</Link></li>
                <li><Link href="/about">About Our Team</Link></li>
              </ul>
            </div>

            <div className="footer-section">
              <h3>Stay Connected</h3>
              <p className="about-text">
                Join our community for mental health tips, resources, and updates on our services.
              </p>

              <div className={`newsletter-message ${showMessage ? 'active' : ''} ${success ? 'success' : 'error'}`}>
                {success ? (
                  "✅ Welcome! You're now part of our supportive community."
                ) : (
                  "❌ Something went wrong. Please try again."
                )}
              </div>


            </div>
          </div>

          {/* Bottom Section */}
          <div className="footer-bottom">
            <div className="footer-bottom-content">
              <div>
                © 2024 Capacity Vietnam. All rights reserved. | Supporting mental wellness across Vietnam.
              </div>
              <div className="footer-links-bottom">
                <Link href="/privacy">Privacy Policy</Link>
                <Link href="/terms">Terms of Service</Link>
                <Link href="/accessibility">Accessibility</Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}