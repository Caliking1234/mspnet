import React from "react";
import Brocade from "../../images/Brocade.png";
import Cisco from "../../images/cisco-support.png";
import Emc from "../../images/EMC-logo.png";
import F5 from "../../images/f5.png";
import Juniper from "../../images/juniper-networks-image-token.png";

const Partners = () => {
  return (
    <div className=" py-5 flex flex-col justify-around bg-white">
      <div className=" w-full text-center text-2xl py-5">
        <h1>our partners</h1>
      </div>
      <div className=" py-5 flex flex-col md:flex-row justify-around gap-5">
        <img className=" mx-auto w-16 h-10" src={Emc} />
        <img className=" mx-auto w-16 h-10" src={Cisco} />
        <img className=" mx-auto w-16 h-10" src={F5} />
        <img className=" mx-auto w-16 h-10" src={Brocade} />
        <img className=" mx-auto w-16 h-10" src={Juniper} />
      </div>
    </div>
  );
};

export default Partners;
