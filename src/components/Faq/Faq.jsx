
import { useTranslation } from "react-i18next";
import React, { useContext, useEffect } from "react";
import shop from "../../assets/images/shopproducts.jpg";
import { GlobalTheme } from "../../context/ThemeContext";
import styles from "./Faq.module.scss"
const FAQ = () => {


  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { t } = useTranslation();
  const { toggleMode } = useContext(GlobalTheme);
  return (
    <section className={styles.hero}>
      <div className="container">
        <div className="row">
          <div style={{width:"100%"}}>
          <h1>{t("header.52")} <br></br>{t("header.53")} </h1>
          <h1>{t("header.45")}  </h1>
          <div>
            <div class="accordion accordion-flush" id="accordionFlushExample">
              <div class="accordion-item">
                <h2 class="accordion-header">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseOne"
                    aria-expanded="false"
                    aria-controls="flush-collapseOne"
                  >
                   {t("header.46")}
                  </button>
                </h2>
                <div
                  id="flush-collapseOne"
                  class="accordion-collapse collapse"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div class="accordion-body">
                  {t("header.47")}
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseTwo"
                    aria-expanded="false"
                    aria-controls="flush-collapseTwo"
                  >
                    {t("header.48")}
                  </button>
                </h2>
                <div
                  id="flush-collapseTwo"
                  class="accordion-collapse collapse"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div class="accordion-body">
                  {t("header.49")}
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseThree"
                    aria-expanded="false"
                    aria-controls="flush-collapseThree"
                  >
                    {t("header.50")}
                  </button>
                </h2>
                <div
                  id="flush-collapseThree"
                  class="accordion-collapse collapse"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div class="accordion-body">
                  {t("header.51")}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <img style={{width:"100%"}} src={shop}/>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
