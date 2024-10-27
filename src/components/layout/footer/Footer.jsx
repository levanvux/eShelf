import React from "react";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiOutlineWechat,
  AiFillYoutube,
  AiFillGithub,
} from "react-icons/ai";

const Footer = () => {
  return (
    <footer className=" text-gray-400 border-t-[1px]">
      <div className="grid grid-cols-3 text-center text-sm py-4 overflow-hidden">
        <span>© 2024 eShelf. All rights reserved.</span>
        <span>Terms · Privacy Policy</span>
        <span className="flex gap-4 relative -top-1 -right-24">
          <AiFillFacebook
            className="hover:text-gray-500"
            size={24}
            title="Facebook"
          />
          <AiFillInstagram
            className="hover:text-gray-500"
            size={24}
            title="Instagram"
          />
          <AiOutlineWechat
            className="hover:text-gray-500"
            size={24}
            title="Wechat"
          />
          <AiFillYoutube
            className="hover:text-gray-500"
            size={24}
            title="Youtube"
          />
          <a href="https://github.com/levanvux/eShelf" target="_blank">
            <AiFillGithub
              className="hover:text-gray-500"
              size={24}
              title="GitHub"
            />
          </a>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
