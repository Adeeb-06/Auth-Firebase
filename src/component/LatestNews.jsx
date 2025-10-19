import React from "react";
import Marquee from "react-fast-marquee";

const LatestNews = () => {
  return (
    <div className=" bg-base-200 flex  gap-5 items-center p-3 ">
      <p className=" text-base-100 bg-secondary px-3 py-2 ">Latest</p>
      <Marquee pauseOnHover={true} speed={60}>
        <span className="font-bold mx-3">Lorem ipsum dolor sit amet.</span>
        <span className="font-bold mx-3">Lorem ipsum dolor sit amet jflsdjlsdlsj asdlfj.</span>
        <span className="font-bold mx-3">Lorem ipsum dolor sit asfjldsjf lajsdfamet.</span>
        <span className="font-bold mx-3">Lorem ipsum dolor lkjaskldf sit amet.</span>
      </Marquee>
    </div>
  );
};

export default LatestNews;
