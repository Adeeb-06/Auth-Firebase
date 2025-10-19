import React from "react";
import logo from "../assets/logo.png";
import { format } from "date-fns";

const Header = () => {
  return (
    <div className="flex flex-col items-center justify-center py-10">
      <img className="w-[450px]" src={logo} alt="" />
      <p className="mt-3 text-[1.2vw] text-accent">Journalism Without Fear Or Favour</p>
      <p className="font-semibold text-accent mt-2 "> {format(new Date(), "EEEE , MMMM MM, yyyy")} </p>
    </div>
  );
};

export default Header;
