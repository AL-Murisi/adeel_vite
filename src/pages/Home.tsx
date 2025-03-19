import React, { useState, useEffect } from "react";

import sanityClient from "../client";
const Home = () => {
  const [Data, setData] = useState([] as any[]);
  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type=="home"]{
      company_Name,
      homepage_content_text,
      mainImage{
        asset->{
          _id,
          url
        },
        alt
      },
      slug // Make sure to include this field
    }`
      )
      .then((data) => setData(data as any[])) // Use 'as any[]' to assert the expected array type
      .catch(console.error);
  }, []);
  return (
    <div>
      {/* we are here where are you */}
      {Data &&
        Data.map((home, index) => (
          <div
            className="  md:w-full w-auto p-7 flex  md:flex-row flex-col gap-4"
            key={index}
          >
            <div className="relative w-full h">
              <img
                className="lg:mt-4 h-90 w-[650px] lg:h-[550px] lg:w-[650px] md:mt-14 rounded-b-[40%] rounded-tl-[70%]  rounded-tr-[10%] shadow-black dark:shadow-[#424a60] dark:shadow-1xs shadow-2xl"
                src={home.mainImage.asset.url}
                alt={home.mainImage?.alt || "No description"}
              />
            </div>
            <div className=" lg:mt-10 mt-10 w-full">
              <div className=" inset-0 bg-opacity-50 flex flex-col items-center justify-center   text-center p-6">
                <h1 className="md:text-5xl text-2xl lg:text-6xl dark:text-white text-black  w-full font-bold">
                  {/* مؤسسة عادل الرياشي للتجارة والاستيراد */}
                  {home.company_Name}
                </h1>
                <p className="mt-4 text-lg md:text-xl dark:text-white text-black text-justify ">
                  {/* نحن في مؤسسة عادل الرياشي للتجارة والاستيراد نُقدِّم حلولاً
                    مبتكرة ومتنوعة في مجال الزراعة، حيث تخصصنا في توفير معدات
                    الزراعة عالية الجودة، السموم الزراعية الفعّالة، و الأسمدة
                    التي تدعم نمو المحاصيل وزيادة الإنتاجية. نعمل بشغف واهتمام
                    لتلبية احتياجات المزارعين والمهتمين بالقطاع الزراعي، من خلال
                    تقديم أفضل المنتجات التي تساهم في تعزيز الاستدامة الزراعية
                    وتحقيق نتائج متميزة. */}
                  {home.homepage_content_text}
                </p>
                <button className="mt-6 px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-full">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Home;
