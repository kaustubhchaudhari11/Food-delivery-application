import { useState,useEffect } from "react";
import { Link } from "react-router-dom";




const Header = () =>{
  const [buttonName, setButton] = useState('Login');
  useEffect(()=>{
    console.log("Testing the useEffect")
  },[buttonName]);

  // Toggle FC
  const toggleButtonName = ()=>{
    if(buttonName ==="Login"){
      setButton("Logout")
    }else{
      setButton("Login")
    }
  }

    return (
      <div className="header">
        <div className="logo-container">
          <img className ="logo"
          alt = "Raimon VS Epsilon 改 AMV"
           src ="https://png.pngtree.com/png-clipart/20220628/original/pngtree-food-logo-png-image_8239850.png">
          </img>
        </div>

        {/* Nav Items */}
        <div className="nav-items">
        <ul>
          <li>
          <Link to="/">
            Home
          </Link>     
          </li>
          
          <li>
          <Link to="/about">
            About us
          </Link>
          </li>
          
          <li>
          
          <Link to="/contact">
          Contact us
          </Link>
          
          </li>
          
          <li>Carts</li>
          <button className="login-button" onClick={toggleButtonName}> 
          {buttonName}
          </button>
        </ul>
        </div>
      </div>
    )
  }

  export default Header;
  