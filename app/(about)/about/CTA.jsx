import Link from 'next/link'
import React from 'react'

function CTA() {
    return (
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
    )
}

export default CTA