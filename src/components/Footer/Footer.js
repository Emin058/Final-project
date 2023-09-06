import React, { useContext } from "react";
import ShopLogo from "../../assets/icons/shopLogo.svg";
import styles from "./Footer.module.scss";
import InstagramLogo from "../../assets/icons/icons-instagram.svg";
import FacebookLogo from "../../assets/icons/icons-facebook.svg";
import YoutubeLogo from "../../assets/icons/icons-youtube.svg";
import PaymentsImage from "../../assets/images/payment-getways.png";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import i18n, { t } from "i18next";
import { GlobalTheme } from "../../context/ThemeContext";
const Footer = () => {
  const { t } = useTranslation();
  const { toggleMode } = useContext(GlobalTheme);
  return (
    <div className={styles.hero}>
      {/* <hr className={styles.footer_hrTag} /> */}
      <section >
        <div class="container">
          <div class="row">
            <div class="col-lg-3 col-md-3 col-sm-3 col-6 p-2 d-flex justify-content-center">
              <div className={styles.footerLinksName} >
                <h5 className={styles.footerBoldItems}>{t("header.14")}</h5>
                <p className={styles.footerGreyItems}>
                {t("header.15")}
                </p>
              </div>
            </div>
            <div class="col-lg-3 col-md-3 col-sm-3 col-6 p-2 d-flex justify-content-center">
              <div className={styles.footerLinksName}>
                <h5 className={styles.footerBoldItems}>{t("header.16")}</h5>
               <div> <Link className={styles.footerAboutLink} to="/about">{t("header.17")} </Link></div>
                {/* <p>{t("header.18")} </p> */}
                <div> <Link className={styles.footerBestProductstLink} to="/shop">{t("header.19")} </Link></div>
              </div>
            </div>
            <div class="col-lg-3 col-md-3 col-sm-3 col-6 p-2 d-flex justify-content-center">
              <div className={styles.footerLinksName}>
                <h5 className={styles.footerBoldItems}>{t("header.20")}</h5>
                <Link className={styles.footerBlogLink} to="/blogs">{t("header.21")}</Link>
                {/* <p>{t("header.22")}</p> */}
               <div> <Link className={styles.footerSellerLink}>{t("header.23")}</Link></div>
              </div>
              
            </div>
            <div class="col-lg-3 col-md-3 col-sm-3 col-6 p-2 d-flex justify-content-center">
              <div className={styles.footerLinksName}>
                <h5 className={styles.footerBoldItems}>{t("header.24")}</h5>
                {/* <p>{t("header.25")}</p> */}
                <Link className={styles.footerFaqLink} to="/faq">{t("header.26")}</Link>
                <div><Link className={styles.footerSupportLink} to="/contact">{t("header.27")}</Link></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <hr className={styles.footer_last_hrTag} />
      <section>
        <div class="container">
          <div class="row d-flex justify-content-between">
            <div
              style={{ display: "flex", alignItems: "center" }}
              class="col-lg-6 col-md-6 p-2"
            >
              <div className={styles.footerIcons}>
                <img className={styles.webLinks} src={InstagramLogo} />
                <img className={styles.webLinks} src={FacebookLogo} />
                <img className={styles.webLinks} src={YoutubeLogo} />
              </div>
              <div>
                &copy;2022{" "}
                <Link
                  to="https://quomodosoft.com/"
                  className={styles.footerBoldLink}
                >
                  Quomodosoft
                </Link>
                <span>{t("header.43")}</span>
              </div>
            </div>

            <div class="col-lg-6 col-md-6 p-2 d-flex justify-content-end">
              <img src={PaymentsImage} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Footer;
{
  /* <section>
        <div class="container">
          <div class="row">
            <div class="col-lg-3">
              <div>
                <h5 className={styles.footerBoldItems}>About us</h5>
                <p className={styles.footerGreyItems}>
                  We know there are a lot of threa<br></br> developers our but
                  we pride into a <br></br>firm in the industry.
                </p>
              </div>
            </div> */
}
