"use client";
import React, { useState } from "react";
import Image from "next/image";
import { teamMembers } from "@/data/team";

export default function Team() {
  const [selectedMember, setSelectedMember] = useState(null);

  return (
    <section className="flat-team">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="section-title-box">
              <h4 className="section-subtitle white wow fadeInUp">
                MEET OUR TEAM
              </h4>
              <h2 className="section-title white wow fadeInUp">
                Professional Mental Health Experts
              </h2>
            </div>
            <div
              className="themesflat-spacer clearfix"
              data-desktop={0}
              data-mobile={60}
              data-smobile={60}
            />
          </div>
        </div>
      </div>
      {/* list team */}
      <div className="container">
        <div className="row">
          <div className="list-team">
            {teamMembers.map((member) => (
              <div className="item-three-column" key={member.id}>
                <div className="team-box wow fadeInUp">
                  <div className="image-staff">
                    <div className="backround-overlay" />
                    <div className="list-icon-hidden">
                      <ul className="widgets-nav-social link-style3">
                        <li>
                          <a href="#" onClick={() => setSelectedMember(member)}>
                            <i className="fa fa-info-circle" aria-hidden="true" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fa fa-linkedin" aria-hidden="true" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fa fa-envelope" aria-hidden="true" />
                          </a>
                        </li>
                      </ul>
                    </div>
                    <Image
                      alt={member.name}
                      src={member.imageSrc}
                      width={300}
                      height={340}
                    />
                  </div>
                                     <div className="info-staff link-style4">
                     <h3 className="section-heading-rubik-size20">
                       {member.name}
                     </h3>
                     <p className="section-desc-2 white">{member.role}</p>
                     {member.title && (
                       <p className="section-desc-2 white" style={{ fontSize: '14px', opacity: 0.8 }}>
                         {member.title}
                       </p>
                     )}
                     <button
                       onClick={() => setSelectedMember(member)}
                       style={{
                         background: 'linear-gradient(135deg, #2D5175 0%, #1790B3 100%)',
                         border: 'none',
                         color: 'white',
                         padding: '12px 24px',
                         borderRadius: '25px',
                         fontSize: '14px',
                         fontWeight: '600',
                         cursor: 'pointer',
                         marginTop: '15px',
                         boxShadow: '0 8px 25px rgba(45, 81, 117, 0.3)',
                         transition: 'all 0.3s ease',
                         textTransform: 'uppercase',
                         letterSpacing: '1px'
                       }}
                       onMouseOver={(e) => {
                         e.target.style.transform = 'translateY(-2px)';
                         e.target.style.boxShadow = '0 12px 35px rgba(45, 81, 117, 0.4)';
                       }}
                       onMouseOut={(e) => {
                         e.target.style.transform = 'translateY(0)';
                         e.target.style.boxShadow = '0 8px 25px rgba(45, 81, 117, 0.3)';
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
               maxWidth: '800px',
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
                 width={180}
                 height={240}
                 style={{ borderRadius: '15px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}
               />
               <div style={{ flex: 1 }}>
                 <h2 style={{ color: '#2D5175', marginBottom: '12px', fontSize: '32px', fontWeight: '600' }}>{selectedMember.name}</h2>
                 <h3 style={{ color: '#1790B3', fontSize: '20px', marginBottom: '8px', fontWeight: '500' }}>{selectedMember.role}</h3>
                 {selectedMember.title && (
                   <p style={{ color: '#7f8c8d', fontSize: '16px', marginBottom: '20px', fontStyle: 'italic' }}>{selectedMember.title}</p>
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
                       background: 'linear-gradient(135deg, #5A8B89 0%, #D4A574 100%)',
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
               <h4 style={{ color: '#2c3e50', marginBottom: '15px', fontSize: '18px', fontWeight: '600', borderBottom: '2px solid #3498db', paddingBottom: '8px' }}>About Me</h4>
               <p style={{ lineHeight: '1.8', color: '#34495e', marginBottom: '15px', fontSize: '16px' }}>{selectedMember.bio}</p>
               {selectedMember.detailedBio && (
                 <p style={{ lineHeight: '1.8', color: '#34495e', fontSize: '16px' }}>{selectedMember.detailedBio}</p>
               )}
             </div>

             {selectedMember.qualifications && (
               <div style={{ marginBottom: '30px' }}>
                 <h4 style={{ color: '#2c3e50', marginBottom: '15px', fontSize: '18px', fontWeight: '600', borderBottom: '2px solid #3498db', paddingBottom: '8px' }}>Qualifications</h4>
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
                 <h4 style={{ color: '#2c3e50', marginBottom: '15px', fontSize: '18px', fontWeight: '600', borderBottom: '2px solid #3498db', paddingBottom: '8px' }}>Specialties</h4>
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
                 <h4 style={{ color: '#2c3e50', marginBottom: '15px', fontSize: '18px', fontWeight: '600', borderBottom: '2px solid #3498db', paddingBottom: '8px' }}>Clinical Training</h4>
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
                 <h4 style={{ color: '#2c3e50', marginBottom: '15px', fontSize: '18px', fontWeight: '600', borderBottom: '2px solid #3498db', paddingBottom: '8px' }}>Publications</h4>
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
                 <h4 style={{ color: '#2c3e50', marginBottom: '15px', fontSize: '18px', fontWeight: '600', borderBottom: '2px solid #3498db', paddingBottom: '8px' }}>Presentations</h4>
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
                 <h4 style={{ color: '#2c3e50', marginBottom: '15px', fontSize: '18px', fontWeight: '600', borderBottom: '2px solid #3498db', paddingBottom: '8px' }}>Programs & Initiatives</h4>
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
                 <h4 style={{ color: '#2c3e50', marginBottom: '15px', fontSize: '18px', fontWeight: '600', borderBottom: '2px solid #3498db', paddingBottom: '8px' }}>Experience</h4>
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
