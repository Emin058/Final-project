import React, {useContext, useEffect} from "react";
import styles from "./Contact.module.scss";
import PhoneLogo from "../../assets/images/icons8-telephone-65.png";
import EmailLogo from "../../assets/images/icons8-email-64.png";
import AddressLogo from "../../assets/images/icons8-address-48.png";

import {useTranslation} from "react-i18next";
import {GlobalTheme} from "../../context/ThemeContext";

const Contact = () => {
    const {t} = useTranslation();
    const {toggleMode} = useContext(GlobalTheme);
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div className={styles.hero}>
            <h1 className={styles.pageName}>{t("header.37")}</h1>
            <section>
                <div className="container">
                    <div className="row">
                        <div style={{textAlign: "center"}}>
                            <h5>{t("header.38")}</h5>
                            <p>{t("header.39")}</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className={styles.container}>
                <div className={styles.phoneInformation}>
                    <img className={styles.phoneLogo} src={PhoneLogo}/>
                    <h4>{t("header.40")}</h4>
                    <div>+(323) 9847 3847 383</div>
                    <div>+(434) 5466 5467 443</div>
                </div>
                <div className={styles.emailInformation}>
                    <img className={styles.emailLogo} src={EmailLogo}/>
                    <h4>{t("header.41")}</h4>
                    <div>Demoemail@gmail.com</div>
                    <div>rafiqulislamsuvobd@gmail.com</div>
                </div>
                <div className={styles.addressInformation}>
                    <img className={styles.addressLogo} src={AddressLogo}/>
                    <h4>{t("header.42")}</h4>
                    <div style={{textAlign: "center"}}>
                        4517 Washington Ave. Manchester, Road 2342,<br></br>Kentucky
                        39495
                    </div>
                </div>
            </section>
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d24312.361427427222!2d49.820303700000004!3d40.3856913!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1saz!2saz!4v1693848971434!5m2!1saz!2saz"

                style={{border: 0, width: "100%", height: "450px"}}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
            />


        </div>
    );
};

export default Contact;
