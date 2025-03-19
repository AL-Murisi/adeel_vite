import { FaTractor, FaLeaf, FaShieldAlt } from "react-icons/fa";
import React, { useEffect, useState } from "react";
import sanityClient from "../client";
export default function AboutUs() {
  const [postData, setData] = useState([] as any[]);
  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type=="aboutus"]{
      company_name,
      about_the_company,
      why_chose_us,
      product_images[]{
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
    <div className=" w-full md:px-20 px-5 py-16 md:py-24 lg:py-32">
      <div className="bg-green-700    mx-auto max-w-7xl flex items-center justify-center font-bold text-2xl rounded-2xl shadow-2xl dark:shadow-[#58585a]  shadow-black mb-10 h-20">
        <h1>About us/ من نحن</h1>
      </div>
      {postData &&
        postData.map((aboutus, index) => (
          <h1
            key={index}
            className="text-4xl text-1xl md:text-5xl text-center font-bold"
          >
            {aboutus.company_name}
          </h1>
        ))}
      <div className="  p-7 flex flex-col lg:flex-row gap-4 ">
        {/* Right Images */}
        {postData &&
          postData.map((aboutus, index) => (
            <div key={index} className="grid grid-cols-3 w-full gap-2">
              {/* Third Image (Middle Center) */}
              <div className="flex flex-col gap-3">
                <img
                  src={
                    aboutus.product_images?.[0]?.asset?.url || "/fallback.jpg"
                  }
                  alt={aboutus.product_images?.[0]?.alt || "Product image"}
                  className="md:w-full h-50 shadow-2xl dark:shadow-[#58585a] shadow-black rounded-lg"
                />
                <img
                  src={aboutus.product_images?.[1]?.asset?.url}
                  alt="Product 2"
                  className=" md:w-full h-50 shadow-2xl dark:shadow-[#58585a]  shadow-black rounded-lg"
                />
              </div>

              {/* Second Image (Bottom Left) */}
              <div className="mt-20 space-y-2">
                <img
                  src={aboutus.product_images?.[2].asset.url}
                  alt="Product 2"
                  className=" h-50 md:w-full shadow-2xl shadow-black dark:shadow-[#58585a]  w-50 rounded-lg"
                />
                <img
                  src={aboutus.product_images?.[3]?.asset?.url}
                  alt="Product 2"
                  className="h-50 md:w-full shadow-2xl shadow-black dark:shadow-[#58585a]  w-50 rounded-lg"
                />
              </div>
              <div className="mt-44 ">
                <img
                  src={aboutus.product_images?.[4]?.asset?.url}
                  alt="Product 2"
                  className="h-60 md:w-full shadow-2xl shadow-black dark:shadow-[#58585a]   w-50 rounded-lg"
                />
              </div>
            </div>
          ))}

        {postData.map((aboutus, index) => (
          <div
            key={index}
            className="flex flex-col justify-center text-right w-full"
          >
            <p className="mt-6 text-lg  leading-relaxed text-justify">
              {aboutus.about_the_company}.
            </p>

            <div className="flex flex-col md:flex-row md:gap-20 gap-3">
              <div className="flex  items-center justify-end space-x-4">
                <h3 className="text-lg font-semibold ">معدات زراعية</h3>
                <FaTractor className="text-8xl text-green-600" />
              </div>
              <div className="flex items-center justify-end space-x-4">
                <h3 className="text-lg font-semibold ">أسمدة زراعية</h3>
                <FaLeaf className="text-8xl text-green-600" />
              </div>
              <div className="flex items-center justify-end space-x-4">
                <h3 className="text-lg font-semibold ">سموم زراعية</h3>
                <FaShieldAlt className="text-8xl text-green-600" />
              </div>
            </div>
            <span className="mt-10 p-2 font-bold text-3xl ">
              لماذا تختارنا؟
            </span>
            <p>{aboutus.why_chose_us}</p>
          </div>
        ))}
        {/* Left Content */}
      </div>
    </div>
  );
}
