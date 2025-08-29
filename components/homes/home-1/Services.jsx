import React from "react";
import Link from "next/link";
export default function Services() {
  return (
    <section className="flat-services">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="section-title-box">
              <h4 className="section-subtitle">WHAT WE DO</h4>
              <h2 className="section-title">
                What You Can Do
                <br />
                with Capacity Vietnam
              </h2>
            </div>
          </div>
          <div className="col-md-12">
            <div
              className="themesflat-spacer clearfix"
              data-desktop={67}
              data-mobile={60}
              data-smobile={60}
            />
          </div>
          <div className="col-md-6">
            <div className="our-services-box hover-up-style2 mg-bottom30 wow fadeInLeft">
              <div className="our-services-overlay" />
              <span className="tf-icon icon-size icon-icon-farming-layer">
                <span className="path1" />
                <span className="path2" />
                <span className="path3" />
                <span className="path4" />
                <span className="path5" />
              </span>
              <div className="content-features">
                <Link href={`/service-details`}>
                  <h3 className="section-heading-jost-size22">Individual & Couple Counseling</h3>
                </Link>
                <p className="section-desc">
                  Compassionate and professional counseling services to support personal growth, strengthen relationships, and promote emotional well-being. We provide tailored sessions for individuals, adolescents, couples, and groups in a safe and confidential space.
                </p>
                <ul className="service-features" style={{marginTop: '15px', paddingLeft: '20px', listStyle: 'disc'}}>
                  <li>Personalized treatment plans</li>
                  <li>Confidential and supportive sessions</li>
                  <li>Relationship and family dynamics support</li>
                  <li>Communication and conflict resolution skills</li>
                  <li>Flexible scheduling</li>
                  <li>Evidence-based approaches</li>
                </ul>
                <div className="link2 link-style2">
                  <Link href={`/service-details`} className="read-more">
                    Read More
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="our-services-box hover-up-style2 mg-bottom30 wow fadeInRight">
              <div className="our-services-overlay" />
              <span className="tf-icon icon-size4 icon-Group-7528">
                <span className="path1" />
                <span className="path2" />
                <span className="path3" />
              </span>
              <div className="content-features">
                <Link href={`/service-details`}>
                  <h3 className="section-heading-jost-size22">
                    Workplace & Community Training
                  </h3>
                </Link>
                <p className="section-desc">
                  Comprehensive mental health training and workshops designed to create supportive workplace and community environments.
                </p>
                <ul className="service-features" style={{marginTop: '15px', paddingLeft: '20px', listStyle: 'disc'}}>
                  <li>Mental health awareness</li>
                  <li>Stress management</li>
                  <li>Team building</li>
                  <li>Leadership support</li>
                </ul>
                <div className="link2 link-style2">
                  <Link href={`/service-details`} className="read-more">
                    Read More
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
