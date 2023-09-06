import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import SamsungImage from "../../assets/images/samsungImage.png";
import AppleWatchImage from "../../assets/images/appleWatchImage.png";
import XboxImage from "../../assets/images/x-boxImage.png";
import styles from "./Home.module.scss";
import { GlobalData } from "../../context/GlobalContext";
import SingleCard from "../SingleCard/SingleCard";
import Aos from "aos";
// import Swiper from "swiper";
import Parfum from "../../assets/images/parfumbrown.jpg";
import Tie from "../../assets/images/rosetie.jpg";
import Bag from "../../assets/images/blackbag.jpg";
import Hat from "../../assets/images/browncap.jpg";
import Bluetie from "../../assets/images/bluetie.jpg";
import Whitejeans from "../../assets/images/whitejeans.jpg";
import Orangeshoes from "../../assets/images/orangeshoes.jpg";
import Parfumblue from "../../assets/images/parfumblue.jpg";
import p from "../../assets/images/p.jpg";
import BackImage from "../../assets/images/discount-banner-1.jpg";
import secure from "../../assets/icons/secure.svg";
import quality from "../../assets/icons/quality.svg";
import refresh from "../../assets/icons/refresh.svg";
import basket from "../../assets/icons/basketIcon.svg";
import { GlobalTheme } from "../../context/ThemeContext";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const Home = () => {
  const { data } = useContext(GlobalData);

  console.log(data);

  useEffect(() => {
    Aos.init();
  });

  return (
    <>
      <section>
              <div
                id="carouselExampleFade"
                class="carousel slide carousel-fade"
              >
                <div class="carousel-inner">
                  <div class="carousel-item active">
                    <img style={{width:"100%",height:"100vh",}} src={SamsungImage} alt="..." />
                  </div>
                  <div class="carousel-item">
                    <img style={{width:"100%",height:"100vh"}} src={AppleWatchImage} class="d-block w-100" alt="..." />
                  </div>
                  <div class="carousel-item">
                    <img style={{width:"100%",height:"100vh"}} src={XboxImage} class="d-block w-100" alt="..." />
                  </div>
                </div>
                <button
                  class="carousel-control-prev"
                  type="button"
                  data-bs-target="#carouselExampleFade"
                  data-bs-slide="prev"
                >
                  <span
                    class="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  <span class="visually-hidden">Previous</span>
                </button>
                <button
                  class="carousel-control-next"
                  type="button"
                  data-bs-target="#carouselExampleFade"
                  data-bs-slide="next"
                >
                  <span
                    class="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span class="visually-hidden">Next</span>
                </button>
              </div>
      </section>

      <section className={styles.hero}>
        <div class="container">
          <div class="row">
            {data.slice(0, 4).map((item, index) => {
              return <SingleCard product={item} key={item.id} />;
            })}
          </div>
        </div>
      </section>
      <section className={styles.couponSection}>
        <div class="container">
          <div class="row">
            <div className={styles.infoYellowBox}>
              <div className={styles.iconAndName}>
                <img className={styles.advertIcons} src={basket} />
                <div>
                  <b>FREE SHIPPING</b>
                  <div>When ordering over $100</div>
                </div>
              </div>
              <div className={styles.iconAndName}>
                <img className={styles.advertIcons} src={refresh} />
                <div>
                  <b>FREE RETURN</b>
                  <div>Get Return within 30 days</div>
                </div>
              </div>
              <div className={styles.iconAndName}>
                <img className={styles.advertIcons} src={secure} />
                <div>
                  <b>SECURE PAYMENT</b>
                  <div>100% Secure Online Payment</div>
                </div>
              </div>
              <div className={styles.iconAndName}>
                <img className={styles.advertIcons} src={quality} />
                <div>
                  <b>BEST QUALITY</b>
                  <div>Original Product Guarenteed</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.backImage}>
        <div class="container">
          <div class="row">
            <div
              style={{
                width: "100%",
                height: "307px",
                backgroundImage: `url(${BackImage})`,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
              }}
            >
              <h1>Get 20% Off Discount Coupon</h1>
              <p className={styles.paragraph}>by Subscribe our Newsletter</p>
              <div style={{ textAlign: "center" }}>
                <input placeholder="EMAIL ADDRESS" className={styles.input} />
                <button className={styles.couponBtn}>Get the Coupon</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;

// <div className="col-lg-2 col-md-4 col-sm-6 col-12 p-4">
//             <div className={styles.box}>
//               <img className={styles.samsungContentPhoto} src={SamsungImage} />
//             </div>
//           </div>
//           <div className="col-lg-2 col-md-4 col-sm-6 col-12 p-4">
//             <div className={styles.box}>
//               <img
//                 className={styles.samsungContentPhoto}
//                 src={AppleWatchImage}
//               />
//             </div>
//           </div>
//           <div className="col-lg-2 col-md-4 col-sm-6 col-12 p-4">
//             <div className={styles.box}>
//               <img className={styles.samsungContentPhoto} src={XboxImage} />
//             </div>
//           </div>
//              <div className="col-lg-2 col-md-4 col-sm-6 col-12 p-4">
//             <div className={styles.box}>
//               <img className={styles.samsungContentPhoto} src={SamsungImage} />
//             </div>
//           </div>
//           <div className="col-lg-2 col-md-4 col-sm-6 col-12 p-4">
//             <div className={styles.box}>
//               <img
//                 className={styles.samsungContentPhoto}
//                 src={AppleWatchImage}
//               />
//             </div>
//           </div>
//           <div className="col-lg-2 col-md-4 col-sm-6 col-12 p-4">
//             <div className={styles.box}>
//               <img className={styles.samsungContentPhoto} src={XboxImage} />
//             </div>
//           </div>