import { useEffect, useState } from "react";
import { FaFacebook, FaWhatsapp, FaInstagram } from "react-icons/fa";
import sanityClient from "../../client";

const Footer = () => {
  const [data, setData] = useState([] as any[]);
  useEffect(() => {
    sanityClient
      .fetch(
        `
      *[_type=="footer_header"]{
      ig_acount,
      whatsapp_number,
      facebook_acount,
      footer_text,
      company_Name,
      logo {
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
    <div className="dark:bg-secondary  bg-[#114e06] mt-10">
      {data.map((content, index) => (
        <div key={index}>
          <div className="mt-3 flex flex-row text-white items-center">
            <div className="flex-shrink-0">
              {" "}
              {/* Use flex-shrink-0 to prevent logo from shrinking */}
              <img
                className="w-20 mt-3 rounded-b-[50%] rounded-tl-[50%] rounded-tr-[10%] shadow-lg"
                src={content.logo.asset.url}
                alt={content.logo?.alt || "No description"}
              />
            </div>
            <div className="flex-grow text-center">
              {" "}
              {/* Use flex-grow for text and text-center */}
              <h1>{content.footer_text}</h1>
            </div>
          </div>
          <div className="flex space-x-10 mt-3 justify-center">
            <a
              href={`https://www.facebook.com/${content.facebook_acount}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook className="w-6 h-6 text-blue-600 hover:text-blue-800" />
            </a>
            <a
              href={`https://wa.me/${content.whatsapp_number}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp className="w-6 h-6 text-green-600 hover:text-green-800" />
            </a>
            <a
              href={`https://www.Instagram.com/${content.ig_acount}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className="w-6 h-6 text-[#C13584] hover:text-[#b15f8e]" />
            </a>
          </div>
          <div className="flex justify-center">
            <p className="text-sm p-3 text-white">
              © {new Date().getFullYear()} {content.company_Name}. All rights
              reserved.
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Footer;
