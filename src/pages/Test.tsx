// import React, { useState, useEffect } from "react";
// import sanityClient from "../../website/src/client";

// export default function Post() {
//   const [postData, setPost] = useState([] as any[]); // Use 'as any[]' to avoid type errors

//   useEffect(() => {
//     sanityClient
//       .fetch(
//         `*[_type == "post"]{
//           title,
//           slug,
//           mainImage{
//             asset->{
//               _id,
//               url
//             },
//             alt
//           }
//         }`
//       )
//       .then((data) => setPost(data as any[])) // Use 'as any[]' to assert the expected array type
//       .catch(console.error);
//   }, []);

//   return (
//     <main className="bg-green-100 min-h-screen p-12 mb-30">
//       <section className="container mx-auto">
//         <h1 className="text-5xl flex justify-center cursive">
//           Blog Posts Page
//         </h1>
//         <h2 className="text-lg text-gray-600 flex justify-center mb-12">
//           Welcome to my page of blog posts
//         </h2>
//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {postData.map((post, index) => (
//             <article key={index}>
//               <a href={"/post/" + post.slug.current}>
//                 <span className="block h-64 relative rounded shadow leading-snug bg-white border-l-8 border-green-400">
//                   {post.mainImage?.asset?.url ? (
//                     <img
//                       src={post.mainImage.asset.url}
//                       alt={post.mainImage?.alt || "No description"}
//                       className="w-full h-full rounded-r object-cover absolute"
//                     />
//                   ) : (
//                     <div className="w-full h-full rounded-r bg-gray-300 flex items-center justify-center">
//                       <p className="text-gray-600">No Image Available</p>
//                     </div>
//                   )}
//                   <span className="block relative h-full flex justify-end items-end pr-4 pb-4">
//                     <h3 className="text-gray-800 text-lg font-blog px-3 py-4 bg-red-700 bg-opacity-75 rounded">
//                       {post.title}
//                     </h3>
//                   </span>
//                 </span>
//               </a>
//             </article>
//           ))}
//         </div>
//       </section>
//     </main>
//   );
// }

// // export default Test;
