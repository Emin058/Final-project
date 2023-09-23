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
import i18n from "i18next";
import Account from "../Account/Account";
import burger from "../../assets/icons/burger.svg"

const Header = () => {
  const { t } = useTranslation();

  const changeLang = (lang) => {
    i18n.changeLanguage(lang);
  };

  const { items } = useCart();
  const { items: wishlistItems } = useWishlist();

  const { toggleMode, darkMode } = useContext(GlobalTheme);

  return (
    <div className={styles.total_header_container}>
      <header className={styles.headerTopContainer}>
        <div className="container">
          <div className="row">
            <div className="col-lg-6 d-flex justify-content-start align-items-center ">
              <div className={styles.shopLogo}>
                <Link to="/">
                  <img src={ShopLogo} />
                </Link>
              </div>
            </div>

            <div className={styles.dropdown} >
              <button
                className="btn btn-secondary dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <img src={burger}/>
                
              </button>
              
              <ul className="dropdown-menu">
                
              <Link style={{marginRight:"10px",marginLeft:"10px"}} to="/wishlist">
                  <img className={styles.favouriteImage} src={Favourite} />
                  <div className={styles.numberOfFavourites}>
                    {" "}
                    {wishlistItems.length === 0
                      ? ""
                      : wishlistItems.length / 2}{" "}
                  </div>
                </Link>
                
                <Link style={{marginRight:"10px"}}  to="/cart">
                  <img className={styles.basketImage} src={ShopBag} />
                  <div className={styles.numberOfBasket}>
                    {items.length === 0 ? "" : items.length}{" "}
                  </div>
                </Link>
                <Account/>
               
                <li >
                  {" "}
                  <Link  className={styles.header_navbar} to="/">
                    {t("header.0")}
                  </Link>
                </li>
                <li>
                  {" "}
                  <Link className={styles.header_navbar} to="/about">
                    {t("header.1")}
                  </Link>
                </li>
                <li>
                  {" "}
                  <Link className={styles.header_navbar} to="/shop">
                    {t("header.2")}
                  </Link>
                </li>
                <li>
                  {" "}
                  <Link className={styles.header_navbar} to="/blogs">
                    {t("header.3")}
                  </Link>
                </li>
                <li>
                  {" "}
                  <Link className={styles.header_navbar} to="/contact">
                    {t("header.4")}
                  </Link>
                </li>
                <li>
                  <Link className={styles.header_navbar} to="/faq">
                    {t("header.44")}
                  </Link>
                </li>
              </ul>
              
            </div>
          
            <div className="col-lg-6  d-flex justify-content-end align-items-center  ">
              <label className={styles.switch}>
                <input
                  type="checkbox"
                  checked={darkMode}
                  onClick={() => toggleMode()}
                />
                <div className={styles.slider}></div>
              </label>

              <div style={{ marginLeft: "10px" }}>
                <Select
                  defaultValue={i18n.language}
                  style={{ width: 120 }}
                  onChange={changeLang}
                  options={[
                    { value: "en", label: "Eng" },
                    { value: "az", label: "Aze" },
                  ]}
                />

                <Link className={styles.headerTopItems} to="/wishlist">
                  <img className={styles.favouriteImage} src={Favourite} />
                  <div className={styles.numberOfFavourites}>
                    {" "}
                    {wishlistItems.length === 0
                      ? ""
                      : wishlistItems.length / 2}{" "}
                  </div>
                </Link>
                <Link className={styles.basketIcon} to="/cart">
                  <img className={styles.basketImage} src={ShopBag} />
                  <div className={styles.numberOfBasket}>
                    {items.length === 0 ? "" : items.length}{" "}
                  </div>
                </Link>
              </div>

             <div className={styles.acccount}><Account  /></div> 
            
            </div>
          </div>
        </div>
      </header>

      <header className={styles.navbar_items_container}>
        <div className={styles.logo}>
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
      </header>
    </div>
  );
};

export default Header;
