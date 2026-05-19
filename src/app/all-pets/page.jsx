
// import { Button, Chip } from '@heroui/react';
// import { BookOpen, Clock } from 'lucide-react';
// import Image from 'next/image';
// import Link from 'next/link';
// import React from 'react';

// const AllPetsPage =async ({course}) => {
// // console.log(course,'sot');
// const { _id,petName,species,breed,age,gender,image,healthStatus,location, ownerEmail  } = course;
//           return (
//                     <div
//                               className="group flex flex-col bg-white rounded-4xl border border-slate-200 overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
//                           >
//                               <div className="relative overflow-hidden aspect-16/10">
//                                   <Image
//                                       alt="Course Image"
//                                       className="object-cover group-hover:scale-110 transition-transform duration-700"
//                                       src={image || "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=600"}
                  
//                                       fill 
//                                   />
//                                   <div className="absolute top-4 right-4">
//                                       <Chip
//                                           color="primary"
//                                           variant="solid"
//                                           className="font-bold shadow-lg shadow-blue-600/20"
//                                       >
//                                          sobuj
//                                       </Chip>
//                                   </div>
//                               </div>
//                               <div className="p-8 flex flex-col grow space-y-4">
//                                   <div className="space-y-2">
//                                       <Link href={`/courses/${_id}`}>
//                                           <h3 className="text-xl font-bold leading-tight line-clamp-2 hover:text-blue-600 transition-colors">
//                                               {petName}
//                                           </h3>
//                                       </Link>
//                                       <p className="text-sm text-slate-500 font-medium flex items-center gap-1">
//                                           By <span className="text-slate-900">{species}</span>
//                                       </p>
//                                   </div>
                  
//                                   <div className="flex items-center gap-4 text-xs text-slate-500 font-bold">
//                                       <span className="flex items-center gap-1">
//                                           <Clock className="w-3.5 h-3.5" />ami
//                                       </span>
//                                       <span className="flex items-center gap-1">
//                                           <BookOpen className="w-3.5 h-3.5" /> 24 Lessons
//                                       </span>
//                                   </div>
                  
//                                   <div className="pt-6 mt-auto border-t border-slate-100 flex justify-between items-center">
//                                       <span className="text-2xl font-black text-blue-600">$price</span>
                  
//                                       <Button
//                                           variant="flat"
//                                           color="primary"
//                                           className="font-bold rounded-xl px-6"
//                                       >
//                                           Learn More
//                                       </Button>
                  
//                                   </div>
//                               </div>
//                           </div>
//           );
// };

// export default AllPetsPage;






"use client";

import Image from "next/image";
import { MapPin, DollarSign } from "lucide-react";

const PetCard = ({course}) => {
console.log(course,'course');
const { _id,petName,species,breed,age,gender,image,healthStatus,location, ownerEmail  } = course;

  return (
    <div className=" rounded-2xl  shadow-md border bg-white overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
      
      {/* TOP IMAGE SECTION */}
      <div className="relative h-56 bg-gradient-to-r from-purple-100 to-blue-100 flex items-center justify-center">
        
        {/* Category */}
        <span className="absolute top-4 left-4 bg-green-100 text-green-700 text-sm px-3 py-1 rounded-full flex items-center gap-1">
          🐢 Turtle
        </span>

        {/* Status */}
        <span className="absolute top-4 right-4 bg-green-500 text-white text-sm px-3 py-1 rounded-full">
          Available
        </span>

        {/* Image */}
        {/* <Image
          src={image}
          alt="pet"
          width={150}
          height={120}
          className="object-contain w-full h-full"
        /> */}
        <Image src={image || 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=600'}

                    alt="Course Image"
                    fill
                                     
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover "
                />
      </div>

      {/* CONTENT */}
      <div className="p-5 space-y-3">
        <h2 className="text-xl font-bold text-gray-800">
          Burke Harvey
        </h2>

        <p className="text-gray-500 text-sm">
          In odit atque hic pr • 1988 years old • Female
        </p>

        {/* Location */}
        <div className="flex items-center gap-2 text-gray-600 text-sm">
          <MapPin size={16} className="text-red-500" />
          Ea aut sunt quia ali
        </div>

        {/* Price */}
        <div className="flex items-center gap-2 text-gray-800 font-medium">
          <DollarSign size={16} className="text-red-500" />
          $58 adoption fee
        </div>
      </div>

      {/* BUTTONS */}
      <div className="border-t p-4 flex gap-3">
        <button className="flex-1 border rounded-full py-2 text-gray-700 hover:bg-gray-100 transition">
          View Details
        </button>

        <button className="flex-1 rounded-full py-2 text-white bg-gradient-to-r from-pink-500 to-teal-400 hover:opacity-90 transition">
          Adopt Now
        </button>
      </div>
    </div>
  );
};

export default PetCard;




