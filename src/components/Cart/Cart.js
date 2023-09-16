import React, { useState } from "react";
import { useCart } from "react-use-cart";
import styles from "./Cart.module.scss";
import { toast } from "react-toastify";
import ButtonWishlist from "../../components/ButtonWishList/ButtonWishlist";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { items, removeItem, updateItemQuantity, cartTotal, setItems } =
    useCart();

  const location = useNavigate();

  const [txt, setTxt] = useState('No order for now')

  let h1 = document.querySelector(".h1");

  const checkUser = () => {
    if (localStorage.getItem("NewUser") || localStorage.getItem("Admin")) {
      setItems([]);
      setTxt('Your order is done')
    } else {
      toast.error("create an account");
      location("/register");
    }
  };
  return (
    <div>
      <div className="container mt-5">
        {items.length === 0 ? (
          <h1 className="h1 p-5">{txt}</h1>
        ) : (
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Id</th>
                <th scope="col">Image</th>
                <th scope="col">Title</th>
                <th scope="col">Price</th>
                <th scope="col">Quantity</th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              {items.map((item) => {
                return (
                  <>
                    <tr>
                      <th scope="row">{item.id}</th>
                      <td>
                        <img className={styles.image} src={item.image} />
                      </td>
                      <td>{item.title}</td>
                      <td>{item.price * item.quantity} Euro </td>
                      <td>
                        <button
                          onClick={() =>
                            updateItemQuantity(item.id, item.quantity + 1)
                          }
                        >
                          +
                        </button>
                        {item.quantity}
                        <button
                          onClick={() =>
                            updateItemQuantity(item.id, item.quantity - 1)
                          }
                        >
                          -
                        </button>
                      </td>
                      <td>
                        <button
                          className="btn btn-danger"
                          onClick={() => {
                            removeItem(item.id);
                            toast.error("Deleted from cart");
                          }}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  </>
                );
              })}
            </tbody>

            <h1>Cart total :{cartTotal} Euro</h1>

            <button className="btn btn-success" onClick={checkUser}>
              Buy
            </button>
          </table>
        )}
      </div>
    </div>
  );
};

export default Cart;
