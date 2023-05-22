import React from "react";
import svg from "../images/WhatsApp.svg.png";
import ReactWhatsapp from "react-whatsapp";

const ChatWithUS = () => {
  return (
    <div className=" w-fit h-fit fixed bottom-[30px] right-[30px] animate-wigglee">
      <ReactWhatsapp
        number="+91 7827905347"
        message="I need Expert For My IT Problem"
      >
        <img src={svg} className=" w-[35px] h-[35px] mx-auto" />
        <p className=" text-[10px] mix-blend-difference py-2 font-bold text-gray-700">
          Chat With US
        </p>
      </ReactWhatsapp>
    </div>
  );
};

export default ChatWithUS;
