import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import stefano1 from "../../assets/images/stefanoclothes.jpg";
import stefano0 from "../../assets/images/stefanobrown.jpg";
import stefano2 from "../../assets/images/istockphoto-1415133974-1024x1024.jpg";
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
    <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
  <div  class="carousel-inner">
    <div class="carousel-item active">
      <img  src={stefano0} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={stefano1} class="d-block w-100 " alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={stefano2} class="d-block w-100" alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
    </section>
  
<h2 style={{textAlign:"center",marginTop:"10px",marginBottom:"10px"}}>Featured products</h2>
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
            <div className={styles.infoYellowBox}>
              <div className={styles.iconAndName}>
                <img className={styles.advertIcons} src={basket} />
                <div className={styles.advertDiv}>
                  <b>FREE SHIPPING</b>
                  <div>When ordering over $100</div>
                </div>
              </div>
              <div className={styles.iconAndName}>
                <img className={styles.advertIcons} src={refresh} />
                <div className={styles.advertDiv}>
                  <b>FREE RETURN</b>
                  <div>Get Return within</div>
                </div>
              </div>
              <div className={styles.iconAndName}>
                <img className={styles.advertIcons} src={secure} />
                <div className={styles.advertDiv}>
                  <b >SECURE PAYMENT</b>
                  <div>100% Secure Online </div>
                </div>
              </div>
              <div className={styles.iconAndName}>
                <img className={styles.advertIcons} src={quality} />
                <div className={styles.advertDiv}>
                  <b>BEST QUALITY</b>
                  <div>Original Product Guarenteed</div>
                </div>
              </div>
            </div>
        </div>
      </section>
      <section className={styles.backImage}>
        <div class="container">
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
              <div style={{ textAlign: "center", width: '100%' }}>
                <input placeholder="EMAIL ADDRESS" className={styles.input} />
                <button className={styles.couponBtn}>Get the Coupon</button>
              </div>
            </div>
        </div>
      </section>
    </>
  );
};

export default Home;

