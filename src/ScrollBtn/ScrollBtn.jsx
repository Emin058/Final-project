import React, { useEffect, useState } from 'react';
import scrollIcon from "../../src/assets/icons/upIcon.svg"
const ScrollBtn = () => {
  const [visible,setVisible] =useState(false);

  useEffect(()=>{
    window.addEventListener("scroll",()=>{
 if(window.scrollY >300){
  setVisible(true)
 }
else{
  setVisible(false)
}
    })
  },[]);

  const clickBtn =()=>{
window.scrollTo({
  top:0,
  behavior:"smooth"
})
  }
  return (
    <div>
     <button onClick={clickBtn} style={{position:"fixed",right:"20px",bottom:"20px",display:visible?"block":"none"}}><img src={scrollIcon}/></button>
    </div>
  );
}

export default ScrollBtn;
