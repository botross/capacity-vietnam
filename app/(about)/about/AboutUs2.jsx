"use client";
import Link from "next/link";
import Image from "next/image";
import Topbar from "@/components/headers/Topbar";
import Header2 from "@/components/headers/Header2";
import PageTitle from "@/components/common/Pagetitle";
import Team from "@/components/otherPages/Team";
import Facts from "@/components/homes/home-2/Facts";
export default function AboutUsPage() {


  return (
    <>
      <style jsx>{`
        .about-page {
          line-height: 1.6;
          color: #333;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
        }

        /* Hero Section */
        .hero-section {
          background: linear-gradient(135deg, #2d5175 0%, #1a3a52 50%, #2d5175 100%);
          position: relative;
          overflow: hidden;
          color: white;
          padding: 120px 0 80px;
          text-align: center;
        }

        .hero-section::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" fill="%2368b0aa" opacity="0.1"><path d="M0,20 Q250,80 500,20 T1000,20 V100 H0 Z"/></svg>') repeat-x;
          background-size: 1000px 100px;
          animation: wave 20s linear infinite;
          opacity: 0.3;
        }

        @keyframes wave {
          0% { transform: translateX(0); }
          100% { transform: translateX(-1000px); }
        }

        .hero-content {
          position: relative;
          z-index: 2;
          max-width: 800px;
          margin: 0 auto;
        }

        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: rgba(104, 176, 170, 0.2);
          border: 1px solid rgba(104, 176, 170, 0.4);
          padding: 12px 24px;
          border-radius: 30px;
          font-size: 14px;
          color: #68b0aa;
          margin-bottom: 24px;
          animation: fadeInUp 0.8s ease-out;
        }

        .hero-title {
          font-size: 3.5rem;
          font-weight: 700;
          margin-bottom: 24px;
          line-height: 1.2;
          animation: fadeInUp 0.8s ease-out 0.2s both;
        }

        .hero-subtitle {
          font-size: 1.3rem;
          font-weight: 300;
          margin-bottom: 32px;
          color: rgba(255, 255, 255, 0.9);
          animation: fadeInUp 0.8s ease-out 0.4s both;
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* Stats Section */
        .stats-section {
          background: white;
          padding: 80px 0;
          margin-top: -40px;
          position: relative;
          z-index: 3;
        }

        .stats-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 40px;
          margin-top: 60px;
        }

        .stat-card {
          text-align: center;
          padding: 40px 20px;
          background: linear-gradient(145deg, #ffffff, #f5f7fa);
          border-radius: 20px;
          box-shadow: 0 10px 30px rgba(45, 81, 117, 0.1);
          transition: all 0.3s ease;
          border: 1px solid rgba(104, 176, 170, 0.1);
        }

        .stat-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 20px 40px rgba(45, 81, 117, 0.15);
        }

        .stat-icon {
          width: 70px;
          height: 70px;
          background: linear-gradient(135deg, #68b0aa, #5a9b96);
          border-radius: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 20px;
          font-size: 28px;
          color: white;
        }

        .stat-number {
          font-size: 2.5rem;
          font-weight: 700;
          color: #2d5175;
          margin-bottom: 8px;
        }

        .stat-label {
          font-size: 16px;
          color: #666;
          font-weight: 500;
        }

        /* Mission Section */
        .mission-section {
          background: #f8f9fa;
          padding: 100px 0;
        }

        .mission-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
          align-items: center;
        }

        .mission-content h2 {
          font-size: 2.5rem;
          color: #2d5175;
          margin-bottom: 24px;
          line-height: 1.2;
        }

        .mission-content h2::after {
          content: '';
          display: block;
          width: 60px;
          height: 4px;
          background: #68b0aa;
          border-radius: 2px;
          margin-top: 16px;
        }

        .mission-text {
          font-size: 18px;
          line-height: 1.8;
          color: #666;
          margin-bottom: 32px;
        }

        .mission-highlights {
          list-style: none;
          margin: 0;
          padding: 0;
        }

        .mission-highlights li {
          display: flex;
          align-items: center;
          gap: 16px;
          margin-bottom: 16px;
          font-size: 16px;
          color: #333;
        }

        .mission-highlights li::before {
          content: '✓';
          background: #68b0aa;
          color: white;
          width: 24px;
          height: 24px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 14px;
          font-weight: bold;
          flex-shrink: 0;
        }

        .mission-image {
          position: relative;
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 20px 40px rgba(45, 81, 117, 0.1);
          height: 500px;
          background: linear-gradient(135deg, #68b0aa, #2d5175);
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-size: 100px;
        }

        /* Values Section */
        .values-section {
          background: #F0FBFF;
          padding: 120px 0;
          position: relative;
        }

        .values-section::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2368b0aa' fill-opacity='0.03'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E") repeat;
          pointer-events: none;
        }

        .section-header {
          text-align: center;
          margin-bottom: 80px;
          position: relative;
          z-index: 1;
        }

        .section-badge {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          background: rgba(255, 255, 255, 0.9);
          border: 1px solid #1a365d;
          padding: 12px 24px;
          border-radius: 50px;
          font-size: 15px;
          font-weight: 500;
          color: #2d5175;
          margin-bottom: 24px;
          backdrop-filter: blur(10px);
          box-shadow: 0 4px 20px rgba(104, 176, 170, 0.1);
        }

        .section-badge svg {
          color: #68b0aa;
        }

        .section-title {
          font-size: 3.2rem;
          color: #1a365d;
          margin-bottom: 24px;
          line-height: 1.2;
          font-weight: 700;
        }

        .section-subtitle {
          font-size: 18px;
          color: #4a5568;
          max-width: 650px;
          margin: 0 auto;
          line-height: 1.7;
          font-weight: 400;
        }

        .values-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(380px, 1fr));
          gap: 32px;
          position: relative;
          z-index: 1;
        }

        .value-card {
          background: rgba(255, 255, 255, 0.95);
          border-radius: 24px;
          padding: 48px 32px;
          text-align: center;
          box-shadow: 0 8px 32px rgba(45, 81, 117, 0.08);
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          border: 1px solid rgba(255, 255, 255, 0.5);
          position: relative;
          overflow: hidden;
          backdrop-filter: blur(10px);
        }

        .value-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 3px;
          background: linear-gradient(90deg, #1891B3, #1a365d);
        }

        .value-card::after {
          content: '';
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: radial-gradient(circle, rgba(104, 176, 170, 0.03) 0%, transparent 70%);
          opacity: 0;
          transition: opacity 0.4s ease;
          pointer-events: none;
        }

        .value-card:hover {
          transform: translateY(-12px) scale(1.02);
          box-shadow: 0 20px 60px rgba(45, 81, 117, 0.15);
          border-color: rgba(104, 176, 170, 0.3);
        }

        .value-card:hover::after {
          opacity: 1;
        }

        .value-icon {
          width: 72px;
          height: 72px;
          background: linear-gradient(135deg, #1891B3 0%, #1a365d 100%);
          border-radius: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 28px;
          color: white;
          box-shadow: 0 8px 24px rgba(45, 81, 117, 0.2);
          transition: all 0.3s ease;
          position: relative;
        }

        .value-icon::before {
          content: '';
          position: absolute;
          inset: -2px;
          background: linear-gradient(135deg, #1891B3, #1a365d);
          border-radius: 22px;
          z-index: -1;
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .value-card:hover .value-icon {
          transform: scale(1.1) rotate(5deg);
          box-shadow: 0 12px 32px rgba(45, 81, 117, 0.3);
        }

        .value-card:hover .value-icon::before {
          opacity: 1;
        }

        .value-title {
          font-size: 24px;
          color: #1a365d;
          margin-bottom: 16px;
          font-weight: 700;
        }

        .value-description {
          color: #4a5568;
          line-height: 1.7;
          font-size: 16px;
          font-weight: 400;
        }

        /* Responsive Design */
        @media (max-width: 768px) {
          .values-section {
            padding: 80px 0;
          }

          .section-title {
            font-size: 2.4rem;
          }

          .section-subtitle {
            font-size: 16px;
            padding: 0 20px;
          }

          .values-grid {
            grid-template-columns: 1fr;
            gap: 24px;
            padding: 0 20px;
          }

          .value-card {
            padding: 32px 24px;
          }

          .value-icon {
            width: 64px;
            height: 64px;
          }

          .value-title {
            font-size: 20px;
          }

          .value-description {
            font-size: 15px;
          }
        }

        @media (max-width: 480px) {
          .section-badge {
            font-size: 14px;
            padding: 10px 20px;
          }

          .section-title {
            font-size: 2rem;
          }

          .values-grid {
            padding: 0 16px;
          }

          .value-card {
            padding: 28px 20px;
          }
        }

        /* Team Section */
        .team-section {
          background: #f8f9fa;
          padding: 100px 0;
        }

        .team-intro {
          text-align: center;
          max-width: 800px;
          margin: 0 auto 80px;
        }

        .team-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 40px;
        }

        .team-card {
          background: white;
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 10px 30px rgba(45, 81, 117, 0.1);
          transition: all 0.3s ease;
        }

        .team-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 20px 40px rgba(45, 81, 117, 0.15);
        }

        .team-image {
          width: 100%;
          height: 280px;
          background: linear-gradient(135deg, #68b0aa, #2d5175);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 80px;
          color: white;
        }

        .team-info {
          padding: 30px;
        }

        .team-name {
          font-size: 22px;
          color: #2d5175;
          margin-bottom: 8px;
          font-weight: 600;
        }

        .team-role {
          color: #68b0aa;
          font-size: 16px;
          margin-bottom: 16px;
          font-weight: 500;
        }

        .team-bio {
          color: #666;
          line-height: 1.6;
          font-size: 14px;
        }

        /* CTA Section */
        .cta-section {
          background: linear-gradient(135deg, #2d5175 0%, #1a3a52 100%);
          color: white;
          padding: 100px 0;
          text-align: center;
          position: relative;
          overflow: hidden;
        }

        .cta-content {
          position: relative;
          z-index: 2;
          max-width: 700px;
          margin: 0 auto;
        }

        .cta-title {
          font-size: 2.8rem;
          margin-bottom: 24px;
          line-height: 1.2;
        }

        .cta-description {
          font-size: 18px;
          margin-bottom: 40px;
          color: rgba(255, 255, 255, 0.9);
          line-height: 1.6;
        }

        .cta-buttons {
          display: flex;
          gap: 20px;
          justify-content: center;
          flex-wrap: wrap;
        }

        .btn {
          padding: 16px 32px;
          border-radius: 12px;
          text-decoration: none;
          font-weight: 600;
          font-size: 16px;
          transition: all 0.3s ease;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          border: 2px solid transparent;
        }

        .btn-primary {
          background: #68b0aa;
          color: white;
        }

        .btn-primary:hover {
          background: #5a9b96;
          transform: translateY(-2px);
          box-shadow: 0 10px 30px rgba(104, 176, 170, 0.4);
        }

        .btn-outline {
          background: transparent;
          color: white;
          border-color: rgba(255, 255, 255, 0.3);
        }

        .btn-outline:hover {
          background: white;
          color: #2d5175;
          transform: translateY(-2px);
        }

        /* Responsive */
        @media (max-width: 768px) {
          .hero-title {
            font-size: 2.5rem;
          }

          .mission-grid,
          .stats-grid,
          .values-grid,
          .team-grid {
            grid-template-columns: 1fr;
          }

          .mission-grid {
            gap: 40px;
          }

          .section-title,
          .cta-title {
            font-size: 2.2rem;
          }

          .cta-buttons {
            flex-direction: column;
            align-items: center;
          }

          .btn {
            width: 100%;
            max-width: 300px;
          }
        }
      `}</style>


      <div className="about-page">



        <section
        style={{
          backgroundColor: "#F0FBFF"
        }}
        className="values-section">
          <div className="container">
            <div className="section-header">
              <div className="section-badge">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9V7L15 1L9 7V9C9 10.1 9.9 11 11 11V16L13 18L15 16V11C16.1 11 17 10.1 17 9H21Z" />
                </svg>
                Our Core Values
              </div>
              <h2 className="section-title">What Guides Us Every Day</h2>
              <p className="section-subtitle">
                These fundamental principles shape every interaction, decision, and service we provide
                to ensure the highest quality mental health care.
              </p>
            </div>
            <div className="values-grid">
              <div className="value-card">
                <div className="value-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 21.35L10.55 20.03C5.4 15.36 2 12.27 2 8.5C2 5.41 4.42 3 7.5 3C9.24 3 10.91 3.81 12 5.08C13.09 3.81 14.76 3 16.5 3C19.58 3 22 5.41 22 8.5C22 12.27 18.6 15.36 13.45 20.03L12 21.35Z" />
                  </svg>
                </div>
                <h3 className="value-title">Compassion</h3>
                <p className="value-description">
                  We approach every individual with empathy, understanding, and genuine care,
                  creating a safe space where healing can begin.
                </p>
              </div>
              <div className="value-card">
                <div className="value-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 1L3 5V11C3 16.55 6.84 21.74 12 23C17.16 21.74 21 16.55 21 11V5L12 1ZM11 7H13V13H11V7ZM11 15H13V17H11V15Z" />
                  </svg>
                </div>
                <h3 className="value-title">Trust & Safety</h3>
                <p className="value-description">
                  Building secure therapeutic relationships through confidentiality, respect,
                  and professional excellence in every interaction.
                </p>
              </div>
              <div className="value-card">
                <div className="value-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M9 21C5.25 21 2.25 18 2.25 14.25C2.25 10.5 5.25 7.5 9 7.5C12.75 7.5 15.75 10.5 15.75 14.25C15.75 18 12.75 21 9 21ZM22.5 2.25L20.25 4.5L18 2.25L16.5 3.75L18.75 6L16.5 8.25L18 9.75L20.25 7.5L22.5 9.75L24 8.25L21.75 6L24 3.75L22.5 2.25ZM9 19.5C11.9 19.5 14.25 17.15 14.25 14.25C14.25 11.35 11.9 9 9 9C6.1 9 3.75 11.35 3.75 14.25C3.75 17.15 6.1 19.5 9 19.5ZM9 10.5C11.07 10.5 12.75 12.18 12.75 14.25C12.75 16.32 11.07 18 9 18C6.93 18 5.25 16.32 5.25 14.25C5.25 12.18 6.93 10.5 9 10.5Z" />
                  </svg>
                </div>
                <h3 className="value-title">Innovation</h3>
                <p className="value-description">
                  Continuously advancing our practices with the latest research and technology
                  to provide the most effective treatments available.
                </p>
              </div>
              <div className="value-card">
                <div className="value-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M16 4C18.2 4 20 5.8 20 8C20 10.2 18.2 12 16 12C13.8 12 12 10.2 12 8C12 5.8 13.8 4 16 4ZM16 14C20.4 14 24 15.8 24 18V20H8V18C8 15.8 11.6 14 16 14ZM8 13C10.2 13 12 11.2 12 9C12 6.8 10.2 5 8 5C5.8 5 4 6.8 4 9C4 11.2 5.8 13 8 13ZM8 14.5C5.3 14.5 0 15.9 0 18.5V20H7V18C7 16.7 7.7 15.6 8.7 14.8C8.5 14.7 8.3 14.5 8 14.5Z" />
                  </svg>
                </div>
                <h3 className="value-title">Accessibility</h3>
                <p className="value-description">
                  Breaking down barriers to mental health care through affordable services,
                  multiple locations, and culturally-sensitive approaches.
                </p>
              </div>
            </div>
          </div>
        </section>

        <Facts />

        <section className="cta-section">
          <div className="container">
            <div className="cta-content">
              <h2 className="cta-title">Ready to Begin Your Journey?</h2>
              <p className="cta-description">
                Take the first step towards better mental health. Our compassionate team is here
                to support you every step of the way with personalized care and evidence-based treatments.
              </p>
              <div className="cta-buttons">
              <Link href="/contact" style={{
                      position: 'relative',
                      background: 'rgba(255, 255, 255, 0.15)',
                      backdropFilter: 'blur(20px)',
                      border: '2px solid rgba(255, 255, 255, 0.3)',
                      color: 'white',
                      padding: '16px 32px',
                      borderRadius: '50px',
                      fontWeight: '600',
                      fontSize: '1rem',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease',
                      overflow: 'hidden',
                      textDecoration: 'none',
                      display: 'inline-block'
                    }}>
                      Contact Us
                    </Link>
              </div>
            </div>
          </div>
        </section>
        <Team />

        {/* CTA Section */}

      </div>
    </>
  );
}