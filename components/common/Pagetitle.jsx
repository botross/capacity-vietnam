'use client'
import Link from 'next/link';
import { useEffect, useRef } from 'react';
import styles from './PageTitle.module.css';

const PageTitle = ({ pageName, backgroundImage, overlayImage, backgroundPosition = 'center 25%', pageDescription }) => {
  const titleRef = useRef(null);
  const particlesRef = useRef(null);

  useEffect(() => {
    // Animate title on mount
    if (titleRef.current) {
      titleRef.current.style.animationDelay = '0.3s';
    }

    // Create floating particles
    if (particlesRef.current) {
      for (let i = 0; i < 20; i++) {
        const particle = document.createElement('div');
        particle.className = styles.particle;
        particle.style.left = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 3 + 's';
        particle.style.animationDuration = (Math.random() * 3 + 2) + 's';
        particlesRef.current.appendChild(particle);
      }
    }

    return () => {
      if (particlesRef.current) {
        particlesRef.current.innerHTML = '';
      }
    };
  }, []);

  return (
    <div className={styles.pageTitle}>
      {/* Background Image */}
      {backgroundImage && (
        <div
          className={styles.backgroundImage}
          style={{
            '--bg-image': `url(${backgroundImage})`,
            backgroundPosition: backgroundPosition,
          }}
        />
      )}

      {/* Overlay Image */}
      {overlayImage && (
        <div
          className={styles.overlayImage}
          style={{
            '--overlay-image': `url(${overlayImage})`,
            backgroundPosition: backgroundPosition,
          }}
        />
      )}

      {/* Animated Background Elements */}
      <div className={styles.backgroundElements}>
        <div className={styles.gradientOverlay}></div>
        <div className={styles.geometricShape1}></div>
        <div className={styles.geometricShape2}></div>
        <div className={styles.geometricShape3}></div>
        <div className={styles.floatingCircle1}></div>
        <div className={styles.floatingCircle2}></div>
        <div className={styles.particles} ref={particlesRef}></div>
      </div>

      {/* Main Content */}
      <div className={styles.container}>
        <div className={styles.contentWrapper}>
          {/* Animated Page Title */}
          <div className={styles.titleSection} ref={titleRef}>
            <div className={styles.titleBackground}>
              <span className={styles.titleHighlight}></span>
            </div>
            <div className={styles.mainTitle}>
              <p className={styles.titleWord1}>{pageName}</p>
              <p style={{
                fontSize: '1.6rem',
                fontWeight: '400',
                color: 'rgba(255, 255, 255,1)',
                alignSelf: 'center',
                textAlign: 'center',
                marginTop: '20px',
                marginBottom: '20px',
                maxWidth: '1000px',
                marginLeft: 'auto',
                marginRight: 'auto',
              }}>{pageDescription}</p>
              {!pageName &&
                <span className={styles.titleAccent}>.</span>}
            </div>
          </div>



        </div>
      </div>

      {/* Dynamic Wave Animation */}
      <div className={styles.waveContainer}>
        <svg className={styles.wave} viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className={styles.wavePath}></path>
        </svg>
      </div>
    </div >
  );
};

export default PageTitle;