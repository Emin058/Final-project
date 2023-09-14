import React from "react";
import styles from "./SingleCard.module.scss";
import { useCart } from "react-use-cart";
import { toast } from "react-toastify";
import Wishlist from "../Wishlist/Wishlist";
import ButtonWishlist from "../../components/ButtonWishList/ButtonWishlist";
import { Link } from "react-router-dom";
import DetailIcon from "../../assets/icons/detailIcon.svg"
const SingleCard = ({ product }) => {
  
  const { addItem } = useCart();
  return (
    <>
      <div
        className="col-lg-3 col-md-4 col-sm-6 col-12 p-2"
        data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000"
      >
        <div className={styles.card}>
          <img src={product.image} className={styles.cardImage} alt="..." />
          <div className={styles.card_body}>
            <h5 className={styles.card_title}> {product.title}</h5>
            <p className={styles.cardPrice}>{product.price} Euro</p>
            <div className={styles.btnFavourite}>
              <button
                className={styles.addBtn}
                onClick={() => {
                  addItem(product);
                  toast.success("added to cart");
                }}
              >
                Add to cart
              </button>
              <ButtonWishlist item={product} />
              <Link to={`/product/${product.id}`} ><img src={DetailIcon}/></Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleCard;
