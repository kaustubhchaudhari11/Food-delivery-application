import { useState,useEffect } from "react";
import { Link } from "react-router-dom";
import {useContext} from 'react';
import { useOnlineStatus } from "./useOnlineStatus";
import { LOGO_URL } from "../utils.js/config";
import UserContext from "../utils.js/UserContext";
import { useSelector } from "react-redux";

const Header = () =>{
  const [buttonName, setButton] = useState('Login');
  useEffect(()=>{
    console.log("Testing the useEffect")
  },[buttonName]);

  //online status
    const status  = useOnlineStatus();
    console.log("This is  status",status)


    const { loggedInUser } = useContext(UserContext);

    console.log("This is loggedIn UserContext ",loggedInUser);

  // Subscribing to the store using a Selector
  const cartItems = useSelector((store) => store.cart.items);
  //console.log(cartItems);

  // Toggle FC
  const toggleButtonName = ()=>{
    if(buttonName ==="Login"){
      setButton("Logout")
    }else{
      setButton("Login")
    }
  }

    return (
      <div className="flex justify-between bg-green-100 shadow-lg">
        <div className="logo-container bg-white">
          <img className ="w-56"
          alt = "Raimon VS Epsilon 改 AMV"
          src = {LOGO_URL}
           >
          </img>
        </div>

        {/* Nav Items */}
        <div className="flex items-center">
        <ul className="flex p-4 m-4">
        <li className="px-4">
        <strong>  
            Online Status : {status ? "✅" : "🔴"}
        </strong>
        </li>
          <li className="px-4">
          <Link to="/">
            Home
          </Link>     
          </li>
          
          <li className="px-4">
          <Link to="/about">
            About us
          </Link>
          </li>
          
          <li className="px-4">
          
          <Link to="/contact">
          Contact us
          </Link>
          
          </li>
          
          <li className="px-4 font-bold text-xl">
            <Link to="/cart">Cart - ({cartItems.length} items)</Link>
          </li>

          <li className="px-4 font-bold">
          {loggedInUser}
          </li>


          
          <button className="login-button" onClick={toggleButtonName}> 
          {buttonName}
          </button>

        </ul>
        </div>
      </div>
    )
  }

  export default Header;
  