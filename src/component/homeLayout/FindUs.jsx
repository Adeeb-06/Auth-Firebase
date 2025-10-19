import React from "react";
import { BsInstagram, BsTwitterX } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";

const FindUs = () => {
  return (
    <div>
      <h2 className="font-bold ">Find Us On</h2>
      <div>
        <div className="join join-vertical gap-5 py-5 w-full">
          <button className="btn bg-base-100 justify-start   join-item"> <FaFacebook size={24}/> Facebook</button>
          <button className="btn  bg-base-100 justify-start  join-item"> <BsTwitterX size={24}/> Button</button>
          <button className="btn bg-base-100 justify-start   join-item"><BsInstagram size={24}/> Instagram</button>
        </div>
      </div>
    </div>
  );
};

export default FindUs;
