import React, { useContext } from "react";
import { GlobalData } from "../../context/GlobalContext";
import { useParams } from "react-router-dom";
import ButtonWishlist from "../ButtonWishList/ButtonWishlist";
import { useCart } from "react-use-cart";
import { toast } from "react-toastify";
import styles from "./ProductDetail.module.scss"

const ProductDetail = () => {
  const { data } = useContext(GlobalData);
  const { id } = useParams();
  const myDetailedProduct = data.find((item) => item.id === parseInt(id));

  const { addItem } = useCart();
  return (
    <>
      <section
        style={{
          width: "100%",
          height: "50vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div class="card mb-3" style={{ maxWidth: "700px" }}>
          <div class="row g-0">
            <div class="col-md-4">
              <img
                src={myDetailedProduct.image}
                className="img-fluid rounded-start"
                alt="..."
              />
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h5 class="card-title">{myDetailedProduct.title}</h5>
                <p class="card-text">
                  This durable tote comes with a 40-inch adjustable strap as
                  well as top handles, giving you multiple carrying options.
                </p>
                <p className={styles.cardPrice}>{myDetailedProduct.price} Euro</p>
                <p class="card-text d-flex ">
                  <ButtonWishlist item={myDetailedProduct} />
                  <button
                    className="btn btn-success  "
                    style={{ marginLeft: "12px" }}
                    onClick={() => {
                      toast.success("Product successfully added");
                      addItem(myDetailedProduct);
                    }}
                  >
                    Add to cart
                  </button>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductDetail;
