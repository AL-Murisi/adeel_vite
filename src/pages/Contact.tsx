import {
  FaFacebook,
  FaWhatsapp,
  FaInstagram,
  FaLocationArrow,
} from "react-icons/fa";
import React, { useEffect, useState } from "react";
import sanityClient from "../client";

export default function Contact() {
  const [postData, setData] = useState([] as any[]);
  useEffect(() => {
    sanityClient
      .fetch(
        `
      *[_type == "contact"] {
        contact_text,
        locations[] { // Access the locations array
          location_name,
          mobile_number,
          location_moreinf,
          location_image {
            asset->{
              _id,
              url
            },
            alt
          }
        }
      }
    `
      )
      .then((data) => setData(data))
      .catch(console.error);
  }, []);

  return (
    <div className="  px-6 py-16 md:py-24 ">
      <div className="bg-green-700 mx-auto max-w-7xl rounded-2xl flex justify-center items-center  h-20">
        <h2 className="md:text-4xl text-1xl font-bold ">
          Our office Contact us/تواصل معانا
        </h2>
      </div>
      {postData.map((contact, index) => (
        <div
          key={index}
          className="mt-10 flex flex-col  lg:flex-row  gap-9  justify-center border-gray-300 pt-8 "
        >
          <div className="lg:w-[600px]  ">
            <p className=" text-lg   text-justify">{contact.contact_text}</p>
          </div>
          {contact.locations?.map((loc, index) => (
            <div
              key={index}
              className="flex  flex-col md:flex-row sm:flex-row    gap-2 lg:justify-between items-center justify-center"
            >
              <div className="text-left">
                <h3 className="font-semibold border-l-2 border-blue-500 pl-2">
                  <FaLocationArrow /> {loc.location_name}
                </h3>
                <p className="pl-2  mt-1">{loc.location_moreinf}</p>
                <div className="flex">
                  <p className="pl-2 "> {loc.mobile_number}</p>
                  <a
                    href={`https://wa.me/${loc.mobile_number}`}
                    target="_blank"
                    className=""
                    rel="noopener noreferrer"
                  >
                    <FaWhatsapp className="w-6 h-6 ml-2  text-green-600 hover:text-green-800" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
