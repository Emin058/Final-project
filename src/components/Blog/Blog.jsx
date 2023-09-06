import React, { useContext, useEffect, useState } from "react";
import styles from "./Blog.module.scss";
import accountIcon from "../../assets/icons/account.svg";
import messageIcon from "../../assets/icons/account.svg";
import blogImg1 from "../../assets/images/blogImg1.jpg";
import blogImg2 from "../../assets/images/blog-img-2.jpg";
import { useTranslation } from "react-i18next";
import { GlobalTheme } from "../../context/ThemeContext";
import { useSelector } from "react-redux";
import BlogCard from "../BlogCard/BlogCard";

const Blog = () => {


   const { t } = useTranslation();
  const { toggleMode } = useContext(GlobalTheme);

const blogs =useSelector((state)=>state.BlogReducer)

useEffect(() => {
  window.scrollTo(0, 0);
}, []);
 
  return (
    <>
    
       
    <div className={styles.hero}>
      <h1 className={styles.pageName}>{t("header.36")}</h1>
      <section>
        <div className="container">
          <div className="row">
            <div class="col-lg-6 p-2 col-md-6 col-sm-12 col-12 ">
              <div className={styles.card}>
                <img className={styles.boxImage} src={blogImg1} alt="" />
                <div className={styles.contentBox}>
                  <div>
                    <span>
                      {" "}
                      <img src={accountIcon} alt="" />
                      By admin
                    </span>
                    <span>
                      {" "}
                      <img src={messageIcon} alt="" />6 comments
                    </span>
                  </div>
                  <h4>
                    Reprehenderit Non Esse Anim Laboris <br /> Reprehenderit
                    Officia
                  </h4>
                  <p>
                    irure laborum qui deserunt excepteur id ad sit quis laboris
                    duis ut cillum <br /> eiusmod non sint exercitation nulla
                    tempor nostrud eiusmod commodo...
                  </p>
                  <h5>View More &#8594;</h5>
                </div>
              </div>
            </div>
            <div className="col-lg-6 p-2 col-md-6 col-sm-12 col-12">
              <div className={styles.card}>
                <img className={styles.boxImage} src={blogImg2} alt="" />
                <div className={styles.contentBox}>
                  <div>
                    <span>
                      {" "}
                      <img src={accountIcon} alt="" />
                      By admin
                    </span>
                    <span>
                      {" "}
                      <img src={messageIcon} alt="" />6 comments
                    </span>
                  </div>
                  <h4>
                    Reprehenderit Non Esse Anim Laboris <br /> Reprehenderit
                    Officia
                  </h4>
                  <p>
                    irure laborum qui deserunt excepteur id ad sit quis laboris
                    duis ut cillum <br /> eiusmod non sint exercitation nulla
                    tempor nostrud eiusmod commodo...
                  </p>
                  <h5>View More &#8594;</h5>
                </div>
              </div>
            </div>
            <div className="col-lg-6 p-2 col-md-6 col-sm-12 col-12">
              <div className={styles.card}>
                <img className={styles.boxImage} src={blogImg2} alt="" />
                <div className={styles.contentBox}>
                  <div>
                    <span>
                      {" "}
                      <img src={accountIcon} alt="" />
                      By admin
                    </span>
                    <span>
                      {" "}
                      <img src={messageIcon} alt="" />6 comments
                    </span>
                  </div>
                  <h4>
                    Reprehenderit Non Esse Anim Laboris <br /> Reprehenderit
                    Officia
                  </h4>
                  <p>
                    irure laborum qui deserunt excepteur id ad sit quis laboris
                    duis ut cillum <br /> eiusmod non sint exercitation nulla
                    tempor nostrud eiusmod commodo...
                  </p>
                  <h5>View More &#8594;</h5>
                </div>
              </div>
            </div>
            <div className="col-lg-6 p-2 col-md-6 col-sm-12 col-12">
              <div className={styles.card}>
                <img className={styles.boxImage} src={blogImg2} alt="" />
                <div className={styles.contentBox}>
                  <div>
                    <span>
                      {" "}
                      <img src={accountIcon} alt="" />
                      By admin
                    </span>
                    <span>
                      {" "}
                      <img src={messageIcon} alt="" />6 comments
                    </span>
                  </div>
                  <h4>
                    Reprehenderit Non Esse Anim Laboris <br /> Reprehenderit
                    Officia
                  </h4>
                  <p>
                    irure laborum qui deserunt excepteur id ad sit quis laboris
                    duis ut cillum <br /> eiusmod non sint exercitation nulla
                    tempor nostrud eiusmod commodo...
                  </p>
                  <h5>View More &#8594;</h5>
                </div>
              </div>
            </div>
            {
            blogs.map((item)=>{
              return (

                <>
                <div class="col-lg-6 p-2 col-md-6 col-sm-12 col-12 ">
              <div className={styles.card}>
                <img className={styles.boxImage} src={item.imageUrl} alt="" />
                <div className={styles.contentBox}>
                  <div>
                    <span>
                      {" "}
                      <img src={accountIcon} alt="" />
                      By admin
                    </span>
                    <span>
                      {" "}
                      <img src={messageIcon} alt="" />6 comments
                    </span>
                  </div>
                  <h4>
                  {item.title}
                  </h4>
                  <p>
                   {item.description}
                  </p>
                  <h5>View More &#8594;</h5>
                </div>
              </div>
            </div>
                </>
              )
            })
          }
          </div>
        </div>
      </section>
      </div>
    </>
  );
};

export default Blog;
