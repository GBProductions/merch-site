import React from "react";
import image from "./../img/kingsmenlogo.png";

function Header(){
  return (
    <React.Fragment>
      <h1 style={{color: "red"}}>Huntsman Tailor</h1>
      <img src={image} alt="kingsman logo" />
    </React.Fragment>

  );
}

export default Header;