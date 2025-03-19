import React, { useEffect, useState } from "react";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../../components/ui/carousel";
import sanityClient from "../client";
import { CardContent } from "../../components/ui/card";
const OurProducts = () => {
  const plugin = React.useRef(Autoplay({ delay: 2000 }));
  const [selectedProduct, setSelectedProduct] = useState<any | null>(null);
  const [Products, setProducts] = useState<any[]>([]);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type=="product"]{
          _id,
          product_name,
          product_price,
          product_imag{
            asset->{
              _id,
              url
            },
            alt
          },
          product_usage,
          product_feedback
        }`
      )
      .then((data) => setProducts(data))
      .catch(console.error);
  }, []);

  return (
    <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
      {/* Carousel Section */}
      <div>
        <div className="flex flex-col items-center justify-center bg-green-900 rounded-t-2xl rounded-b-0">
          <h2 className="font-bold m-5 text-white  sm:text-3xl md:text-2xl lg:text-3xl">
            Our Products /منتجاتنا
          </h2>
          <Carousel
            opts={{ align: "start", loop: true }}
            plugins={[plugin.current]}
            className="sm:w-96 md:w-96 w-50 bg-[#e5eae4] dark:bg-[#1a1637] rounded-2xl mb-9 lg:w-3xl "
            onMouseEnter={plugin.current.stop}
            onMouseLeave={plugin.current.reset}
          >
            <CarouselContent>
              {Products.map((product) => (
                <CarouselItem
                  key={product._id}
                  className="md:basis-1/3 sm:basis-1/2 basis-1/2 lg:basis-1/4"
                >
                  <CardContent
                    onClick={() => setSelectedProduct(product)}
                    className="flex aspect-square items-center justify-center p-4 cursor-pointer"
                  >
                    <img
                      src={product.product_imag.asset.url}
                      alt={product.product_imag.alt || "Product image"}
                      className="h-full w-full object-cover rounded-lg shadow-lg   shadow-black"
                    />
                  </CardContent>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden bg-amber-100" />
            <CarouselNext className="hidden  bg-amber-100 " />
          </Carousel>
        </div>

        {selectedProduct !== null ? (
          <div className="p-5 grid grid-cols-2 place-items-center border-4 rounded-b-2xl border-t-0 border-green-600 shadow-lg">
            <p className="text-gray-600 dark:text-gray-300 mt-2">
              {selectedProduct.product_usage}
            </p>
            <div className="group border-b-4 border-green-600 cursor-pointer">
              <img
                src={selectedProduct.product_imag.asset.url}
                alt={selectedProduct.product_imag.alt || "No description"}
                className="aspect-square w-90 rounded-lg bg-gray-200 object-cover shadow-lg shadow-black dark:shadow-[#58585a] transition-transform duration-300 ease-in-out"
              />
              <h2 className="text-2xl font-bold mt-4">
                {selectedProduct.product_name}
              </h2>
              <p className="text-lg font-semibold mt-2">
                ${selectedProduct.product_price}
              </p>
            </div>
            <button
              onClick={() => setSelectedProduct(null)}
              className="mb-4 px-4 py-2 bg-red-600 text-white rounded-lg"
            >
              Back
            </button>
          </div>
        ) : (
          <>
            {/* Grid Section */}
            <div className="grid grid-cols-1 border-4 rounded-b-2xl border-t-0 2xl p-7 border-green-600 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
              {Products.map((product) => (
                <div
                  key={product._id}
                  className="group border-b-4 border-green-600 cursor-pointer"
                  onClick={() => setSelectedProduct(product)}
                >
                  <img
                    alt={product.product_imag.alt || "No description"}
                    src={product.product_imag.asset.url}
                    className="aspect-square w-full rounded-lg bg-gray-200 object-cover group-hover:opacity-75 shadow-lg dark:shadow-[#424a60] shadow-black xl:aspect-7/8 transition-transform duration-300 ease-in-out group-hover:-translate-x-2 group-hover:translate-x-2"
                  />
                  <h3 className="mt-4 text-lg font-bold dark:text-white text-black">
                    {product.product_name}
                  </h3>
                  <p className="mt-1 text-lg dark:text-white font-medium text-gray-900">
                    ${product.product_price}
                  </p>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};
export default OurProducts;
