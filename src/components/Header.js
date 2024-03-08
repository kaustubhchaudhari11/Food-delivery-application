import { useState } from "react";
const Header = () =>{
  const [buttonName, setButton] = useState('Login');

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
          <li>Home</li>
          <li>About Us</li>
          <li>Contact us</li>
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
  