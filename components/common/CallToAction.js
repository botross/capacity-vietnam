import React from 'react'
import styles from './CallToAction.module.css'

function CallToAction() {
    return (
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
    )
}

export default CallToAction