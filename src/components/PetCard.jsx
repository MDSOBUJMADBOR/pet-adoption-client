"use client";

import Image from "next/image";
import { MapPin, DollarSign } from "lucide-react";

const PetCard = ({course}) => {
console.log(course,'course');
const { petName,species,breed,age,gender,image,healthStatus,location, ownerEmail ,price } = course;

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
          {petName}
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
          ${price}
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