import React from "react";
import {
  AiFillInstagram,
  AiFillFacebook,
  AiFillLinkedin,
} from "react-icons/ai";

const Footer = () => {
  const date = new Date();
  return (
    <div className="bg-gray-100 min-h-[10vh] flex justify-center flex-col p-4">
      <div className="flex justify-around">
        <div>
          <AiFillInstagram size={32} />
        </div>
        <div>
          <AiFillFacebook size={32} />
        </div>
        <div>
          <AiFillLinkedin size={32} />
        </div>
      </div>
      <div className="text-xl text-center p-2">
        Blogify Copyright { date.getFullYear() }
      </div>
    </div>
  );
};

export default Footer;
