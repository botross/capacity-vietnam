import React from "react";
import Link from "next/link";
import Image from "next/image";
export default function Portfolio() {
  
  const data = {
    image1: "/images/profolio/profolio-image-1.jpg",
    image2: "/images/profolio/profolio-image-4.jpg",
    image3: "/images/profolio/profolio-image-3.jpg",
    image4: "/images/profolio/profolio-image-5.jpg",
    image5: "/images/profolio/profolio-image-2.jpg",
    image6: "/images/profolio/profolio-image-6.jpg",
  }

  return (
    <section className="flat-profolio-home2">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <div
              className="themesflat-spacer clearfix"
              data-desktop={120}
              data-mobile={60}
              data-smobile={60}
            />
          </div>
          <div className="item-three-column wow fadeInLeft">
            <div className="list-box-profolio mg-bottom30 wow fadeInUp">
              <div className="image-profolio">
                <Image
                  alt="images"
                  src={data.image1}
                  width={570}
                  height={350}
                />
              </div>
            </div>
            <div className="list-box-profolio mg-bottom30 wow fadeInUp">
              <div className="image-profolio">
                <Image
                  alt="images"
                  src={data.image2}
                  width={570}
                  height={350}
                />
              </div>
            </div>
          </div>
          <div className="item-three-column  wow fadeInUp">
            <div className="list-box-profolio  mg-bottom30 wow fadeInUp">
              <div className="image-profolio">
                <Image
                  alt="images"
                  src={data.image3}
                  width={570}
                  height={730}
                />
              </div>
            </div>
            <div className="list-box-profolio wow fadeInUp">
              <div className="image-profolio">
                <Image
                  alt="images"
                  src={data.image6}
                  width={570}
                  height={730}
                />
              </div>
            </div>
      
          </div>
          <div className="item-three-column item-flex-100 wow fadeInRight">
            <div className="list-box-profolio mg-bottom30 wow fadeInUp">
              <div className="image-profolio">
                <Image
                  alt="images"
                  src={data.image4}
                  width={570}
                  height={350}
                />
              </div>
            </div>
            <div className="list-box-profolio wow fadeInUp">
              <div className="image-profolio">
                <Image
                  alt="images"
                  src={data.image5}
                  width={570}
                  height={350}
                />

              </div>
            </div>
          </div>
          <div className="col-md-12">
            <div
              className="themesflat-spacer clearfix"
              data-desktop={90}
              data-mobile={60}
              data-smobile={60}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
