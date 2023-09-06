import React from 'react';
import { useWishlist } from 'react-use-wishlist';
import styles from "./ButtonWishlist.module.scss"
import { toast } from 'react-toastify';
import useItems from 'antd/es/menu/hooks/useItems';

const ButtonWishlist = ({item}) => {

  const {addWishlistItem,removeWishlistItem,inWishlist} =useWishlist()
 

  const toggleFunction = (myProduct)=>{
    if(inWishlist(myProduct.id)){
      removeWishlistItem(myProduct.id )
      toast.error("Deleted from wishlist")
    }
    else{
      addWishlistItem(myProduct)
      toast.success("Added to wishlist")
    }
  }

  return (
    <div >
      <button onClick={()=>toggleFunction(item)}>
      {
        inWishlist(item .id) ? <i className="fa-solid fa-heart"></i> : <i className="fa-regular fa-heart"></i>
      }
        </button>
    </div>
  );
}

export default ButtonWishlist;
