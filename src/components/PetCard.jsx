"use client";

import Image from "next/image";
import { MapPin, DollarSign } from "lucide-react";
import Link from "next/link";
import { Button } from "@heroui/react";
 
const PetCard = ({course}) => { 
// console.log(course,'course');
const {_id, petName,species,breed,age,gender,image,healthStatus,location, ownerEmail ,price,adoptionFee } = course;
console.log(_id);

console.log(price,'courses');

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
        {breed} • {age} years old • {gender}
        </p>

        {/* Location */}
        <div className="flex items-center gap-2 text-gray-600 text-sm">
          <MapPin size={16} className="text-red-500" />
          {location}
        </div>

        {/* Price */}
        <div className="flex items-center gap-2 text-gray-800 font-medium">
          <DollarSign size={16} className="text-red-500" />
          {adoptionFee}
        </div> 
      </div>

      {/* BUTTONS */}
      <div className="border-t p-4 flex justify-between gap-3">
<Link href={`/all-pets/${_id}`}><Button className="bg-gradient-to-r from-red-500 to-green-500 text-white font-semibold px-6 py-2 rounded-xl shadow-md hover:scale-105 transition-all duration-300"> View Details</Button></Link>

<Link href={`/all-pets/${_id}`}><Button className="rounded-xl hover:scale-105 transition-all duration-300">
  Adopt Now
</Button></Link>
      </div>
    </div>
  );
};

export default PetCard;