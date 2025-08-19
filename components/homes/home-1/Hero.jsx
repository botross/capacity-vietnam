"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import Link from "next/link";
import Image from "next/image";
// Since 2018, CapacityVietnam social enterprise has been committed to bringing hope and healing to those facing significant life challenges. With increasing resources and growing community awareness, we can provide better support for people recovering from mental health issues and transform their lives for the better.
const slides = [
  {
    title: "Capacity Vietnam",
    subtitle:
      "CapacityVietnam social enterprise has been committed to bringing hope and healing to those facing significant life challenges",
    imgSrc: "/images/home/young-woman-with-their-garden-crops.png",
  },
  {
    title: "Capacity Vietnam",
    subtitle:
      "we can provide better support for people recovering from mental health issues and transform their lives for the better.",
    imgSrc: "/images/home/young-woman-with-their-garden-crops.png",
  },
];

export default function Hero() {
  return (
    <div className="page-title-home1">
      <div className="container-fluid h-100">
        <div className="row h-100">
          <div className="inner-title-home1 h-100">
            {/* /.page-title */}
            <div className="flat-slider clearfix h-100">
              <div className="rev_slider_wrapper fullwidthbanner-container h-100">
                <div
                  id="rev-slider2"
                  className="rev_slider fullwidthabanner h-100 relative "
                >
                  <Swiper
                    loop={true}
                    // autoplay={{ delay: 3000 }}
                    className=" h-100 "
                    speed={2000}
                    modules={[Navigation, Pagination, Autoplay]}
                    navigation={{
                      prevEl: ".snbp22",
                      nextEl: ".snbn22",
                    }}
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
                                <div className="button">
                                  <Link
                                    href={`/service-details`}
                                    className="btn"
                                  >
                                    Read More
                                  </Link>
                                </div>
                              </div>
                            </div>
                            <div className="image-slider  h-100">
                              <Image
                                src={slide.imgSrc}
                                alt="Slide"
                                className="img-slide"
                                width={513}
                                height={769}
                              />
                            </div>{" "}
                          </div>{" "}
                        </div>
                      </SwiperSlide>
                    ))}
                    <>
                      <div
                        className="tp-leftarrow tparrows custom  noSwipe snbp22"
                        style={{
                          position: "absolute",
                          top: "50%",
                          transform: "matrix(1, 0, 0, 1, 120, -30)",
                          left: 0,
                        }}
                      />
                      <div
                        className="tp-rightarrow tparrows custom  noSwipe snbn22"
                        style={{
                          position: "absolute",
                          top: "50%",
                          transform: "matrix(1, 0, 0, 1, -180, -30)",
                          left: "100%",
                        }}
                      />
                    </>
                  </Swiper>
                </div>
              </div>
            </div>
            {/* flat-slider */}
          </div>
        </div>
      </div>
    </div>
  );
}
