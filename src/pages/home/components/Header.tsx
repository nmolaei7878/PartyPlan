import React from "react";
import Profile from "../../../assets/icons/profile.svg";

const Header = () => {
  return (
    <header className="flex justify-between ">
      <div className="">hi, ishita 👋</div>
      <img src={Profile} alt="" />
    </header>
  );
};

export default Header;
