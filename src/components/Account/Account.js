import React from "react";
import { Link } from "react-router-dom";
import styles from "./Account.module.scss";
import accountLogo from "../../assets/icons/account.svg"
const Account = () => {
  const user = JSON.parse(localStorage.getItem("NewUser"));

  const admin = JSON.parse(localStorage.getItem("Admin"));

  const logOut = (params) =>{
    localStorage.removeItem(`${params}`)
    window.location.reload()
  }

  const auth = () => {
    if (user) {   
      return (
        <div className="dropdown">
          <button
            className="btn btn-secondary dropdown-toggle"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            {user.name}
          </button>
          <ul className="dropdown-menu">
            <li>
              <a   className={styles.dropdown} onClick={()=>logOut("NewUser")}>
                Log out
              </a>
            </li>
          </ul>
        </div>
      );
    } else if (admin) {
      return (
        <div className="dropdown">
          <button
            className="btn btn-secondary dropdown-toggle"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Hi {admin.name}
          </button>
          <ul className="dropdown-menu">
            <li>
              <a className="dropdown-item" href="#" onClick={()=>logOut("Admin")}>
                Log out 
              </a>
            </li>
            <li>
              <Link className="dropdown-item" to="/dashboard">
                Dashboard
              </Link>
            </li>
          </ul>
        </div>
      );
    } else {
      return( 
      <Link to="/login"><img src={accountLogo}/></Link>
      )
    }
  };

  return(
    <>
    {auth()}
     </>

  )
 
 
};

export default Account;
