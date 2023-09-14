import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Home from "../Home/Home";
import About from "../About/About";
import ShopLogo from "../../assets/icons/shopLogo.svg";
import styles from "./Header.module.scss";
import Favourite from "../../assets/icons/favourite.svg";
import ShopBag from "../../assets/icons/shopping_bag.svg";
// import Account from "../../assets/icons/account.svg";
import { useCart } from "react-use-cart";
import { useWishlist } from "react-use-wishlist";
import { GlobalTheme } from "../../context/ThemeContext";
import EngFlag from "../../assets/icons/united-kingdom-flag-icon.svg";
import { Select } from "antd";
import { useTranslation } from "react-i18next";
import  i18n  from "i18next";
import Account from "../Account/Account";
const Header = () => {

  const {t}= useTranslation();

  const changeLang=(lang)=>{
i18n.changeLanguage(lang);
  }



  const { items } = useCart();
  const { items: wishlistItems } = useWishlist();

  const { toggleMode, darkMode } = useContext(GlobalTheme);

  return (
    <div className={styles.total_header_container}>
      <header className={styles.headerTopContainer}>
        <div className="container">
          <div className="row">
            <div  className="col-lg-6 d-flex justify-content-start align-items-center ">
              <div>
                <Link to="/">
                  <img src={ShopLogo} />
                </Link>
              </div>
            </div>
            {/* <div className="col-lg-4  d-flex justify-content-center align-items-center">
              <div className={styles.inputSearchContainer}>
                <input
                  className={styles.headerInput}
                  placeholder={t("header.12")}
                />
                <button className={styles.searchButton}>{t("header.13")}</button>
              </div>
            </div> */}
            <div className="col-lg-6  d-flex justify-content-end align-items-center  ">
            <label  className={styles.switch}>
                  <input 
                    type="checkbox"
                    checked={darkMode}
                    onClick={() => toggleMode()}
                  />
                  <div className={styles.slider}></div>
                </label>
                
              <div style={{marginLeft:"10px"}}>
                <Select
                  defaultValue={i18n.language}
                  style={{ width: 120 }}
                  onChange={changeLang}
                  options={[
                    { value: "en", label: "Eng" },
                    { value: "az", label: "Aze" },
                    
                  ]}
                />

                <Link  className={styles.headerTopItems} to="/wishlist">
                  <img className={styles.favouriteImage} src={Favourite} />
                  <div className={styles.numberOfFavourites}>
                    {" "}
                    {wishlistItems.length === 0 ? "" : wishlistItems.length/2}{" "}
                  </div>
                </Link>
                <Link className={styles.basketIcon} to="/cart">
                  <img  className={styles.basketImage} src={ShopBag} />
                  <div className={styles.numberOfBasket}>{items.length === 0 ? "" :items.length} </div>
                </Link>

              </div>
              
              <Account />
            </div>
          </div>
        </div>
      </header>

      <header className={styles.navbar_items_container}>
        <div className="container">
          <div className="row">
            <div className="col-lg-4 d-flex justify-content-start align-items-center ">
              {/* <div>
                <select className={styles.categories}>
                  <option>{t("header.5")}</option>
                  <option>{t("header.6")}</option>
                  <option>{t("header.7")}</option>
                  <option>{t("header.8")}</option>
                  <option>{t("header.9")}</option>
                  <option>{t("header.10")}</option>
                  <option>{t("header.11")}</option>
                </select>
              </div> */}
            </div>

            <div className="col-lg-6  ">
              <div className="logo">
                <Link className={styles.header_navbar} to="/">
                  {t("header.0")}
                </Link>
                <Link className={styles.header_navbar} to="/about">
                {t("header.1")}
                </Link>
                <Link className={styles.header_navbar} to="/shop">
                {t("header.2")}
                </Link>
                <Link className={styles.header_navbar} to="/blogs">
                {t("header.3")}
                </Link>
                <Link className={styles.header_navbar} to="/contact">
                {t("header.4")}
                </Link>
                <Link className={styles.header_navbar} to="/faq">
                {t("header.44")}
                </Link>
               
              </div>
            </div>

          
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
