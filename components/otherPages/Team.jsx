"use client";
import React, { useState } from "react";
import Image from "next/image";
import { teamMembers2 } from "@/data/team";

export default function Team() {
  const [selectedMember, setSelectedMember] = useState(null);

  return (
    <section className="flat-team flat-team-page">
      {/* Page Header */}
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="section-title-box text-center">
              <h4 className="section-subtitle wow fadeInUp">OUR TEAM</h4>
              <h2 className="section-title wow fadeInUp">
                Meet Our Professional Mental Health Experts
              </h2>
              <p className="section-desc wow fadeInUp">
                Our dedicated team of licensed professionals is committed to providing compassionate,
                evidence-based mental health support to individuals, families, and organizations throughout Vietnam.
              </p>
            </div>
            <div
              className="themesflat-spacer clearfix"
              data-desktop={60}
              data-mobile={40}
              data-smobile={40}
            />
          </div>
        </div>
      </div>

      {/* list team */}
      <div className="container">
        <div className="row">
          <div className="list-team">
            {teamMembers2.map((member) => (
              <div key={member.id} className="item-three-column mg-bottom30">
                <div className="team-box hover-up-style2 wow fadeInUp">
                  <div className="image-staff">
                    <div className="backround-overlay" />
                    <div className="list-icon-hidden">
                      <ul className="widgets-nav-social link-style3">
                        <li>
                          <a href="#" onClick={() => setSelectedMember(member)}>
                            <i className="fa fa-info-circle" aria-hidden="true" />
                          </a>
                        </li>
                        {member.socialLinks.map((social, index) => (
                          <li key={index}>
                            <a href={social.url}>
                              <i className={social.icon} aria-hidden="true" />
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <Image
                      alt={member.name}
                      src={member.imageSrc}
                      width={300}
                      height={340}
                    />
                    <a className="icon-top" href="#" />
                  </div>
                  <div className="info-staff">
                    <h3 className="section-heading-rubik-size20" style={{ color: 'var(--primary-color)' }}>
                      {member.name}
                    </h3>
                    <p 
                    style={{
                      color: 'var(--primary-color4)',
                    }}
                    className="section-desc-2">{member.role}</p>
                    {member.title && (
                      <p className="section-desc-2" style={{ fontSize: '14px', color: 'var(--primary-color4)' }}>
                        {member.title}
                      </p>
                    )}
                    <button
                      onClick={() => setSelectedMember(member)}
                      style={{
                        background: 'var(--primary-color)',
                        border: 'none',
                        color: 'white',
                        padding: '12px 24px',
                        borderRadius: '25px',
                        fontSize: '14px',
                        fontWeight: '600',
                        cursor: 'pointer',
                        marginTop: '15px',
                        textTransform: 'uppercase',
                        letterSpacing: '1px'
                      }}
                    >
                      Know More
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Team Member Modal */}
      {selectedMember && (
        <div
          className="team-modal-overlay"
          onClick={() => setSelectedMember(null)}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0,0,0,0.8)',
            zIndex: 1000,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '20px'
          }}
        >
          <div
            className="team-modal"
            onClick={(e) => e.stopPropagation()}
            style={{
              background: 'linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%)',
              borderRadius: '20px',
              maxWidth: '900px',
              width: '100%',
              maxHeight: '90vh',
              overflow: 'auto',
              padding: '40px',
              boxShadow: '0 25px 50px rgba(0,0,0,0.25)',
              border: '1px solid rgba(255,255,255,0.2)',
              backdropFilter: 'blur(10px)'
            }}
          >
            <div style={{ textAlign: 'right', marginBottom: '20px' }}>
              <button
                onClick={() => setSelectedMember(null)}
                style={{
                  background: 'linear-gradient(135deg, #e74c3c 0%, #c0392b 100%)',
                  border: 'none',
                  fontSize: '20px',
                  cursor: 'pointer',
                  color: 'white',
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 4px 15px rgba(231, 76, 60, 0.3)',
                  transition: 'all 0.3s ease'
                }}
                onMouseOver={(e) => {
                  e.target.style.transform = 'scale(1.1)';
                }}
                onMouseOut={(e) => {
                  e.target.style.transform = 'scale(1)';
                }}
              >
                ×
              </button>
            </div>

            <div style={{ display: 'flex', gap: '25px', marginBottom: '35px' }}>
              <Image
                alt={selectedMember.name}
                src={selectedMember.imageSrc}
                width={200}
                height={260}
                style={{ borderRadius: '15px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)', flexShrink: 0 }}
              />
              <div style={{ flex: 1 }}>
                <h2 style={{ color: '#2c3e50', marginBottom: '12px', fontSize: '36px', fontWeight: '600' }}>{selectedMember.name}</h2>
                <h3 style={{ color: '#3498db', fontSize: '22px', marginBottom: '8px', fontWeight: '500' }}>{selectedMember.role}</h3>
                {selectedMember.title && (
                  <p style={{ color: '#7f8c8d', fontSize: '18px', marginBottom: '20px', fontStyle: 'italic' }}>{selectedMember.title}</p>
                )}

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px', marginTop: '20px' }}>
                  {selectedMember.languages && (
                    <div style={{
                      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                      padding: '12px 16px',
                      borderRadius: '10px',
                      color: 'white'
                    }}>
                      <div style={{ fontSize: '12px', opacity: 0.9, marginBottom: '4px' }}>Languages</div>
                      <div style={{ fontWeight: '500' }}>{selectedMember.languages.join(', ')}</div>
                    </div>
                  )}
                  {selectedMember.workingHours && (
                    <div style={{
                      background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
                      padding: '12px 16px',
                      borderRadius: '10px',
                      color: 'white'
                    }}>
                      <div style={{ fontSize: '12px', opacity: 0.9, marginBottom: '4px' }}>Working Hours</div>
                      <div style={{ fontWeight: '500', fontSize: '14px' }}>{selectedMember.workingHours}</div>
                    </div>
                  )}
                </div>
              </div>
            </div>

            <div style={{ marginBottom: '30px' }}>
              <h4 style={{ color: '#2c3e50', marginBottom: '15px', fontSize: '20px', fontWeight: '600', borderBottom: '2px solid #3498db', paddingBottom: '8px' }}>About Me</h4>
              <p style={{ lineHeight: '1.8', color: '#34495e', marginBottom: '15px', fontSize: '17px' }}>
                {selectedMember.bio || "Professional mental health expert with extensive experience in supporting individuals and families through various challenges."}
              </p>
              {selectedMember.detailedBio && (
                <p style={{ lineHeight: '1.8', color: '#34495e', fontSize: '17px' }}>{selectedMember.detailedBio}</p>
              )}
            </div>

            {selectedMember.qualifications && (
              <div style={{ marginBottom: '30px' }}>
                <h4 style={{ color: '#2c3e50', marginBottom: '15px', fontSize: '20px', fontWeight: '600', borderBottom: '2px solid #3498db', paddingBottom: '8px' }}>Qualifications</h4>
                <div style={{ display: 'grid', gap: '10px' }}>
                  {selectedMember.qualifications.map((qual, index) => (
                    <div key={index} style={{
                      background: '#f8f9fa',
                      padding: '12px 16px',
                      borderRadius: '8px',
                      borderLeft: '4px solid #3498db',
                      color: '#2c3e50',
                      fontWeight: '500'
                    }}>
                      {qual}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {selectedMember.expertise && (
              <div style={{ marginBottom: '30px' }}>
                <h4 style={{ color: '#2c3e50', marginBottom: '15px', fontSize: '20px', fontWeight: '600', borderBottom: '2px solid #3498db', paddingBottom: '8px' }}>Specialties</h4>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                  {selectedMember.expertise.map((item, index) => (
                    <span
                      key={index}
                      style={{
                        background: 'linear-gradient(135deg, #2D5175 0%, #1790B3 100%)',
                        color: 'white',
                        padding: '8px 16px',
                        borderRadius: '25px',
                        fontSize: '14px',
                        fontWeight: '500',
                        boxShadow: '0 4px 15px rgba(102, 126, 234, 0.3)'
                      }}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {selectedMember.certifications && (
              <div style={{ marginBottom: '30px' }}>
                <h4 style={{ color: '#2c3e50', marginBottom: '15px', fontSize: '20px', fontWeight: '600', borderBottom: '2px solid #3498db', paddingBottom: '8px' }}>Clinical Training</h4>
                <div style={{ display: 'grid', gap: '8px' }}>
                  {selectedMember.certifications.map((cert, index) => (
                    <div key={index} style={{
                      background: '#f8f9fa',
                      padding: '10px 14px',
                      borderRadius: '6px',
                      color: '#2c3e50',
                      borderLeft: '3px solid #e74c3c'
                    }}>
                      {cert}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {selectedMember.publications && (
              <div style={{ marginBottom: '30px' }}>
                <h4 style={{ color: '#2c3e50', marginBottom: '15px', fontSize: '20px', fontWeight: '600', borderBottom: '2px solid #3498db', paddingBottom: '8px' }}>Publications</h4>
                <div style={{ display: 'grid', gap: '8px' }}>
                  {selectedMember.publications.map((pub, index) => (
                    <div key={index} style={{
                      background: '#f8f9fa',
                      padding: '10px 14px',
                      borderRadius: '6px',
                      color: '#2c3e50',
                      borderLeft: '3px solid #27ae60'
                    }}>
                      {pub}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {selectedMember.presentations && (
              <div style={{ marginBottom: '30px' }}>
                <h4 style={{ color: '#2c3e50', marginBottom: '15px', fontSize: '20px', fontWeight: '600', borderBottom: '2px solid #3498db', paddingBottom: '8px' }}>Presentations</h4>
                <div style={{ display: 'grid', gap: '8px' }}>
                  {selectedMember.presentations.map((pres, index) => (
                    <div key={index} style={{
                      background: '#f8f9fa',
                      padding: '10px 14px',
                      borderRadius: '6px',
                      color: '#2c3e50',
                      borderLeft: '3px solid #f39c12'
                    }}>
                      {pres}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {selectedMember.programs && (
              <div style={{ marginBottom: '30px' }}>
                <h4 style={{ color: '#2c3e50', marginBottom: '15px', fontSize: '20px', fontWeight: '600', borderBottom: '2px solid #3498db', paddingBottom: '8px' }}>Programs & Initiatives</h4>
                <div style={{ display: 'grid', gap: '8px' }}>
                  {selectedMember.programs.map((prog, index) => (
                    <div key={index} style={{
                      background: '#f8f9fa',
                      padding: '10px 14px',
                      borderRadius: '6px',
                      color: '#2c3e50',
                      borderLeft: '3px solid #9b59b6'
                    }}>
                      {prog}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {selectedMember.experience && (
              <div style={{ marginBottom: '30px' }}>
                <h4 style={{ color: '#2c3e50', marginBottom: '15px', fontSize: '20px', fontWeight: '600', borderBottom: '2px solid #3498db', paddingBottom: '8px' }}>Experience</h4>
                <div style={{
                  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                  padding: '16px 20px',
                  borderRadius: '10px',
                  color: 'white',
                  fontWeight: '500'
                }}>
                  {selectedMember.experience}
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
