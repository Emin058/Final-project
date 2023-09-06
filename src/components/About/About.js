import React, { useContext } from "react";
import AboutLogo from "../../assets/images/aboutLogo.png";
import styles from "./About.module.scss";
import { Link } from "react-router-dom";
import { GlobalTheme } from "../../context/ThemeContext";
import { useTranslation } from "react-i18next";


const About = () => {
  const { toggleMode } = useContext(GlobalTheme);
  const { t } = useTranslation();

  return (
    <div className={styles.hero}>
      <h1 className={styles.pageName}>{t("header.28")}</h1>
      <section>
        <div class="container">
          <div class="row">
            <div class="col-lg-6 ">
              <div className={styles.infoAboutContainer}>
                <img className={styles.aboutPageImage} src={AboutLogo} />
              </div>
            </div>
            <div class="col-lg-6 ">
              <div>
                <span className={styles.h1_commerce}>{t("header.29")}?</span>
                <br></br>
                <div className={styles.aboutWebsite}>
                {t("header.30")}
                <br></br>
                {t("header.31")}
                <br></br>
                {t("header.32")}
                <br></br>
                {t("header.33")}
                <br></br>
                   {t("header.34")}
                </div>
                 
                
                <ul>
                  <li>slim body with metal cover</li>
                  <li>
                    latest Intel Core i5-1135G7 processor (4 cores / 8 threads)
                  </li>
                  <li>8GB DDR4 RAM and fast 512GB PCIe SSD</li>
                  <li>
                    NVIDIA GeForce MX350 2GB GDDR5 graphics card backlit
                    keyboard
                  </li>
                </ul>
                <Link to="/contact">
                  <button className={styles.contactBtn}> {t("header.35")}</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
