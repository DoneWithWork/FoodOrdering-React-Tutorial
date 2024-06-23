import React from "react";
import "./Header.css";
import ExploreMenu from "../../ExploreMenu/ExploreMenu";
const Header = () => {
  return (
    <header className="header">
      <div className="header-contents">
        <h2>Order you favourite food here</h2>
        <p>
          Choose from a diverse menu featuring rich and flavourfull cuisines
        </p>
        <button>View Menu</button>
      </div>
    </header>
  );
};

export default Header;
