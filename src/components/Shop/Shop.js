import React, { useContext, useEffect, useState } from "react";
import styles from "./Shop.module.scss";
import SingleCard from "../SingleCard/SingleCard";
import { GlobalData } from "../../context/GlobalContext";
import { Select } from "antd";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";
import { GlobalTheme } from "../../context/ThemeContext";
import Aos from "aos";
import { hover } from "@testing-library/user-event/dist/hover";
import { useTranslation } from "react-i18next";

const Shop = () => {

  useEffect(() => {
    Aos.init();
  });


  const {t}= useTranslation();

  const { data } = useContext(GlobalData);

  const [state, setState] = useState(data);

  const [query, setQuery] = useState("");

  const { toggleMode } = useContext(GlobalTheme);

  const myCategories = [
    ,
    "All",
    "Trousers",
    "Shoes",
    "Ties",
    "Bags",
    "Hats",
    "Parfums",
  ];

  const changeCategory = (myCategory) => {
    if (myCategory === "All") {
      setState(data);
      return;
    }
    const filteredArray = data.filter((item) => item.category === myCategory);
    setState(filteredArray);
  };


  const sortProducts=(value)=>{
if (value === "all"){
  setState(data);
  return;

}
else if (value === "highest-price"){
  const copyState= [...state]
  const sortProducts=copyState.sort((a,b)=>b.price-a.price )
  setState(sortProducts)
}
else if (value === "lowest-price"){
  const copyState= [...state]
  const sortProducts=copyState.sort((a,b)=>a.price-b.price )
  setState(sortProducts)
}
else if (value === "a-z"){
  const copyState= [...state]
  const sortProducts=copyState.sort((a,b)=>a.title.localeCompare(b.title) )
  setState(sortProducts)
}
else if (value === "z-a"){
  const copyState= [...state]
  const sortProducts=copyState.sort((a,b)=>b.title.localeCompare(a.title) )
  setState(sortProducts)
}

  }
  return (
    <>
      
        <section className={styles.hero}>
          <div class="container">
            <div class="row">
               <div>
               <Select 
                  defaultValue="All"
                  style={{ width: 120 }}
                  onChange={sortProducts}
                  options={[
                    { value: "all", label: "All" },
                    { value: "highest-price", label: "High to low" },
                    { value: "lowest-price", label: "Low to high" },
                    { value: "a-z", label: "A-Z" },
                    { value: "z-a", label: "Z-A" }
                  ]}
                />
                {/* <select className={styles.categories}>
                  <option>{t("header.5")}</option>
                  <option>{t("header.6")}</option>
                  <option>{t("header.7")}</option>
                  <option>{t("header.8")}</option>
                  <option>{t("header.9")}</option>
                  <option>{t("header.10")}</option>
                  <option>{t("header.11")}</option>
                </select> */}
              </div>
              <div className={styles.inputAndCategories}>
                <input className={styles.categoryInput}
                  
                  placeholder="search product"
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                />

                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                  }}
                >
                  {myCategories.map((item, index) => {
                    return (
                      <button  className={styles.categoryBtn} onClick={() => changeCategory(item)} key={index}>
                        {item}
                      </button>
                       );
                  })}
                
              </div>
              </div>
              {state
                .filter((item) =>
                  item.title.toLowerCase().includes(query.toLowerCase())
                )
                .map((item, index) => {
                  return <SingleCard product={item} key={item.id} />;
                })}
            </div>
          </div>
        </section>
      
    </>
  );
};

export default Shop;
