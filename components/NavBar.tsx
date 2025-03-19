import React, { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

import SanityClient from "../src/client";
import ModeToggle from "./Themtoggle";
const NavBar = () => {
  const [data, setData] = useState([] as any[]);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  useEffect(() => {
    SanityClient.fetch(
      `
      *[_type=="footer_header"]{
      ig_acount,
      whatsapp_number,
      facebook_acount,
      footer_text,
      logo{
      asset->{
      _id,
      url
      },
      alt
      },
      }`
    )
      .then((data) => setData(data))
      .catch(console.error);
  }, []);
  return (
    <div className="sticky top-0 p-4 items-center dark:bg-secondary bg-[#114e06] opacity-95 flex shadow-md h-16 justify-between z-50">
      {/* //bg-[#254c04] */}
      {data.map((content, index) => (
        <div key={index} className="flex items-center">
          <img
            className="w-36 mt-10 rounded-b-[50%] rounded-tl-[50%] rounded-tr-[10%] shadow-lg"
            src={content.logo.asset.url}
            alt={content.logo?.alt || "No description"}
          />
        </div>
      ))}

      <ul className=" hidden md:flex justfiy- space-x-15 text-[18px] transparent-">
        <li>
          <a href="#home" className="text-white font-semibold">
            الرئيسية
          </a>
        </li>
        <li>
          <a href="#products" className="text-white hover:text-blue-600">
            منتجاتنا
          </a>
        </li>
        <li>
          <a href="#about" className="text-white hover:text-blue-600">
            حوّلنا
          </a>
        </li>
        <li>
          <a href="#contact" className="text-white hover:text-blue-600">
            تواصل معنا
          </a>
        </li>

        <ModeToggle />
      </ul>
      <button
        className="absolute right-0 top-0 p-2 md:hidden"
        onClick={() => setIsMobileOpen(!isMobileOpen)}
      >
        {isMobileOpen ? (
          <X className="w-6 h-6 mt-3 bg-[#D4A046]" />
        ) : (
          <Menu className="w-7 h-6 bg-[#D4A046] mt-3" />
        )}
      </button>
      {isMobileOpen && (
        <ul className=" relative  z-50 mt-[20.8rem] rounded-2xl  w-52 bg-[#2E580C] shadow-md p-6 space-y-4">
          <li>
            <a href="#home" className="block text-white font-semibold">
              الرئيسية
            </a>
          </li>
          <li>
            <a
              href="#products"
              className="block text-white hover:text-blue-600"
            >
              منتجاتنا
            </a>
          </li>
          <li>
            <a href="#about" className="block text-white hover:text-blue-600">
              حوّلنا
            </a>
          </li>
          <li>
            <a href="#contact" className="block text-white hover:text-blue-600">
              تواصل معنا
            </a>
          </li>

          <ModeToggle />
        </ul>
      )}
    </div>
  );
};

export default NavBar;
