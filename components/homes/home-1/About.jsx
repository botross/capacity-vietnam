import React from "react";
import Link from "next/link";
import Image from "next/image";
import Counter from "@/components/common/Counter";
export default function About() {
  return (
    <section
      style={{
        marginBottom: "100px"
      }}
      className="flat-about">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div
              className="themesflat-spacer clearfix"
              data-desktop={121}
              data-mobile={60}
              data-smobile={60}
            />
          </div>
          <div className="col-lg-6">
            <div className="about-post center bd-radius-50-image">
              <Image
                className="main-post-about"
                alt="images"
                src="/images/home/the-girl-in-the-glasses.jpg"
                width={10}
                height={10}
                style={{
                  width: '500px',
                  height: '500px',
                  objectFit: 'cover',
                  objectPosition: 'left',
                  borderRadius: '50%',
                  aspectRatio: '1/1',
                }}
              />
              <Image
                className="circel-inside image-desc2  "
                alt="images"
                src="/images/home/circle-about.png"
                width={151}
                height={151}
              />
              <div className="about-count-box themesflat-counter">
                <div className="box">
                  <div className="inner-about-count-box">
                    <span className="number-count number">
                      <Counter max={20} />
                    </span>
                    <div className="caption-number-count">
                      Years Supporting Mental Health
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="about-content">
              <div className="about-content-title wow fadeInUp">
                <div className="section-subtitle">ABOUT US</div>
                <div className="section-title">
                  Your Mental Health Partner in Vietnam
                </div>
                <div className="section-desc">
                  Capacity Vietnam is a social enterprise committed to bringing hope and healing to those facing mental health challenges. We provide professional counseling, family therapy, and corporate wellness programs to transform lives throughout Vietnam.
                </div>
              </div>
              <div id="about-box" className="about-desc-box">
                <div className="about-desc">
                  <div
                    style={{
                      marginBottom: '60px',
                    }}
                    className="about-box-nd1 wow fadeInLeft mb-2">
                    <Image
                      src="/images/Brain Power Icon with Plus Sign.png"
                      width={200}
                      height={200}
                      style={{
                        width: '100px',
                        height: '100px',
                        objectFit: 'cover',
                        objectPosition: 'center',
                      }}
                    />
                    <div className="inner-box">
                      <h3
                        style={{
                          color: '#1D4976',
                          lineHeight: '25px',
                        }}
                        className="section-heading-jost-size20 item-1">
                        Licensed Professionals
                      </h3>
                      <p
                        style={{
                          color: '#1D4976',
                          lineHeight: '25px',
                        }}
                        className="section-desc">Expert mental health care</p>
                    </div>
                  </div>
                  <div className="about-box-nd1 wow fadeInLeft">
                    <Image
                      src="/images/Brain Power Icon with Plus Sign 2.png"
                      width={200}
                      height={200}
                      style={{
                        width: '100px',
                        height: '100px',
                        objectFit: 'cover',
                        objectPosition: 'center',
                      }}
                    />
                    <div className="inner-box">
                      <h3 style={{
                        color: '#1D4976',
                        lineHeight: '25px',
                      }} className="section-heading-jost-size20 item-2">
                        24/7 Support Available
                      </h3>
                      <p style={{
                        color: '#1D4976',
                        lineHeight: '25px',
                      }} className="section-desc">Always here to help</p>
                    </div>
                  </div>
                </div>
                <div className="image-desc">
                  <Image
                    className="image"
                    alt="images"
                    src="/images/home/box-flowers-green-garde.jpg"
                    width={200}
                    height={192}
                  />
                </div>
              </div>
              <div
                style={{
                  marginTop: '80px',
                }}
                className="button hover-up">
                <Link href={`/contact`} className="btn2">
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
