'use client'
import { useState } from 'react';
import styles from './OurServices.module.css';

const OurServices = () => {
  const [activeService, setActiveService] = useState(null);

  const services = [
    {
      id: 1,
      title: "Individual Counselling",
      description: "One-on-one therapeutic sessions tailored to your unique needs and journey towards mental wellness.",
      fullDescription: "Our individual counselling sessions provide a safe, confidential space where you can explore your thoughts, feelings, and experiences. Using evidence-based approaches, our qualified therapists work with you to develop coping strategies, process life challenges, and build resilience for lasting positive change.",
      icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <circle cx="12" cy="7" r="4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      features: ["Personalized treatment plans", "Confidential sessions", "Flexible scheduling", "Evidence-based approaches"]
    },
    {
      id: 2,
      title: "Family & Couples Therapy",
      description: "Strengthen relationships and improve communication through guided therapeutic sessions for families and couples.",
      fullDescription: "Relationships are at the heart of our wellbeing. Our family and couples therapy sessions help improve communication, resolve conflicts, and strengthen emotional bonds. We create a supportive environment where all voices are heard and respected, fostering understanding and healing within your most important relationships.",
      icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M17 21V19C17 17.9391 16.5786 16.9217 15.8284 16.1716C15.0783 15.4214 14.0609 15 13 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <circle cx="9" cy="7" r="4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M23 21V19C23 18.1645 22.7155 17.3541 22.2094 16.6977C21.7033 16.0414 20.9995 15.5746 20.2 15.3725" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M16 3.13C16.8604 3.35031 17.623 3.85687 18.1676 4.55336C18.7122 5.24985 19.0078 6.11219 19.0078 7.005C19.0078 7.89781 18.7122 8.76015 18.1676 9.45664C17.623 10.1531 16.8604 10.6597 16 10.88" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      features: ["Relationship building", "Communication skills", "Conflict resolution", "Family dynamics support"]
    },
    {
      id: 3,
      title: "Workplace Training",
      description: "Comprehensive mental health training and workshops designed to create supportive workplace environments.",
      fullDescription: "Creating mentally healthy workplaces is essential for employee wellbeing and organizational success. Our workplace training programs cover stress management, mental health awareness, building resilience, and creating supportive team cultures. We provide practical tools and strategies that can be immediately implemented in your workplace.",
      icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M3 9L12 2L21 9V20C21 20.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V9Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <polyline points="9,22 9,12 15,12 15,22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      features: ["Mental health awareness", "Stress management", "Team building", "Leadership support"]
    }
  ];

  return (
    <section className={styles.servicesSection}>
      {/* Background Elements */}
      <div className={styles.backgroundElements}>
        <div className={styles.floatingShape1}></div>
        <div className={styles.floatingShape2}></div>
        <div className={styles.floatingShape3}></div>
      </div>

      <div className={styles.container}>
        {/* Section Header */}
        <div className={styles.header}>
          <div className={styles.sectionTag}>
            <span>What We Offer</span>
          </div>
          <h2 className={styles.sectionTitle}>
            Our <span className={styles.titleAccent}>Services</span>
          </h2>
          <p className={styles.sectionDescription}>
            Professional mental health support tailored to meet you wherever you are in your journey
          </p>
        </div>

        {/* Services Grid */}
        <div className={styles.servicesGrid}>
          {services.map((service, index) => (
            <div 
              key={service.id} 
              className={`${styles.serviceCard} ${activeService === service.id ? styles.active : ''}`}
              onMouseEnter={() => setActiveService(service.id)}
              onMouseLeave={() => setActiveService(null)}
              style={{ '--delay': `${index * 0.2}s` }}
            >
              {/* Card Background */}
              <div className={styles.cardBackground}></div>
              
              {/* Service Icon */}
              <div className={styles.serviceIcon}>
                <div className={styles.iconWrapper}>
                  {service.icon}
                </div>
                <div className={styles.iconGlow}></div>
              </div>

              {/* Service Content */}
              <div className={styles.serviceContent}>
                <h3 className={styles.serviceTitle}>{service.title}</h3>
                <p className={styles.serviceDescription}>
                  {activeService === service.id ? service.fullDescription : service.description}
                </p>

                {/* Service Features */}
                <div className={styles.serviceFeatures}>
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className={styles.feature}>
                      <div className={styles.featureIcon}>
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Learn More Button */}
                <button className={styles.learnMoreBtn}>
                  <span>Learn More</span>
                  <div className={styles.btnIcon}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M12 5L19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </button>
              </div>

              {/* Card Glow Effect */}
              <div className={styles.cardGlow}></div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className={styles.ctaSection}>
          <div className={styles.ctaContent}>
            <h3 className={styles.ctaTitle}>Ready to Begin Your Journey?</h3>
            <p className={styles.ctaDescription}>
              Take the first step towards better mental health and wellbeing
            </p>
            <button className={styles.ctaButton}>
              <span>Get Started Today</span>
              <div className={styles.buttonGlow}></div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurServices;