"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";
import Image from "next/image";
const slides = [
  {
    title: "MENTAL HEALTH SUPPORT",
    subtitle: "Transform your life<br/> heal your mind",
    imgSrc: "/images/home/slidehome2.png",
  },
  {
    title: "CAPACITY VIETNAM",
    subtitle: "Building awareness<br/> supporting recovery",
    imgSrc: "/images/home/slidehome2.png",
  },
];

export default function Hero() {
  return (
    <div className="page-title-home2">
      {/* slider */}
      <div className="container h-100">
        <div className="row h-100">
          <div className="overlay-image" />
          <div className="slider-home2 h-100">
            <div className="flat-slider clearfix h-100">
              <div className="rev_slider_wrapper fullwidthbanner-container h-100">
                <div
                  id="rev-slider1"
                  className="rev_slider fullwidthabanner h-100"
                >
                  <Swiper
                    loop={true}
                    autoplay={{ delay: 5000 }}
                    className=" h-100 "
                    spaceBetween={30}
                    style={{ maxWidth: "100%" }}
                  >
                    {slides.map((slide, index) => (
                      <SwiperSlide key={index} className=" h-100">
                        <div className="container  h-100">
                          <div className="slide-content  h-100">
                            <div className="content">
                              <h3 className="sub-title ">{slide.title}</h3>
                              <h2
                                className="title-slider text-pri2-color title-1"
                                dangerouslySetInnerHTML={{
                                  __html: slide.subtitle,
                                }}
                              ></h2>
                              <div className="button-box">
                                <div className="button res-btn-slider">
                                  <Link
                                    href={`/contact`}
                                    className="btn btn-left"
                                  >
                                    Get A Quote
                                  </Link>
                                </div>
                              </div>
                            </div>
                            <div className="image-slider  h-100">
                              <Image
                                src={slide.imgSrc}
                                alt="Slide"
                                className="img-slide"
                                width={721}
                                height={489}
                              />
                            </div>{" "}
                          </div>{" "}
                        </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
              </div>
            </div>
            {/* flat-slider */}
          </div>
        </div>
      </div>
      {/* .slider */}
      <section className="features-home2">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="features-home2-box wow fadeInUp">
                <div className="features-left link-style2">
                  <h2 className="title-main">A step towards better mental health</h2>
                  <a href="#" className="title-main heading2">
                    (643)911-1633
                  </a>
                </div>
                <div className="features-right">
                  <p className="section-desc">
                    Capacity Vietnam provides comprehensive mental health services including individual counseling, family therapy, corporate wellness programs, and community education. We're committed to supporting people recovering from mental illness and building awareness throughout Vietnam.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
