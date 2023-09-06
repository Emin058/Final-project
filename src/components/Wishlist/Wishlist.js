import React from "react";
import { useWishlist } from "react-use-wishlist";
import SingleCard from "../SingleCard/SingleCard";
import styles from "./Wishlist.module.scss"
const Wishlist = () => {
  const { items } = useWishlist();
  const myArray = [...new Map(items.map((item) => [item.id, item])).values()];
  return (
    <>
      <section className={styles.container}>
        <div className="container">
          <div className="row">
            {
            myArray.map((item)=>{
             return <SingleCard product={item} key={item.id}/>
            })
            }
          </div>
        </div>
      </section>
    </>
  );
};

export default Wishlist;
