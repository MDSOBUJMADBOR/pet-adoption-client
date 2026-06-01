

// import React, { useState } from 'react';
import Image from 'next/image';
import { fetchSingleCourse } from '@/lib/pets/data';
import FormDetails from '@/components/FormDetails';
import Link from 'next/link';
import { Button } from '@heroui/react';
import { ArrowLeft } from 'lucide-react';

export default async  function PetAdoptionPage({params}) {
  const { id } = await params;
  const course = await fetchSingleCourse(id)
  // const { petName,age,gender,image,healthStatus,location ,price } = course;
  // console.log(course,'course');

 


  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-6xl mx-auto">
         <Link href={'/all-pets'}><Button className="text-sm"><ArrowLeft /> Back to All Pet</Button></Link>
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-gray-900">Adopt a Friend</h1>
          <p className="text-gray-600 mt-2">Give Bruno a loving home</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 bg-white rounded-3xl shadow-xl overflow-hidden">
          {/* Left Side - Dog Info */}
          <div className="p-8 lg:p-12">
            <div className="relative h-[420px] w-full rounded-2xl overflow-hidden mb-8">
              <Image
                src={course?.image}
                alt="Bruno the Golden Retriever"
                fill
                className="object-cover"
                priority
              />
            </div>

            <div className="space-y-6">
              <div>
                <h2 className="text-4xl font-bold text-amber-900">{course?.petName}</h2>
                <p className="text-xl text-amber-700">Golden Retriever</p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-amber-50 p-4 rounded-2xl">
                  <p className="text-sm text-amber-600">Age</p>
                  <p className="text-2xl font-semibold">{course?.age} Years</p>
                </div>
                <div className="bg-amber-50 p-4 rounded-2xl">
                  <p className="text-sm text-amber-600">Gender</p>
                  <p className="text-2xl font-semibold">{course?.gender}</p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex justify-between items-center py-3 border-b">
                  <span className="text-gray-600">Health Status</span>
                  <span className="font-medium text-emerald-600">{course?.healthStatus}</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b">
                  <span className="text-gray-600">Vaccination Status</span>
                  <span className="font-medium text-emerald-600">Up to date</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b">
                  <span className="text-gray-600">Location</span>
                  <span className="font-medium">{course?.location}</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b">
                  <span className="text-gray-600">Adoption Fee</span>
                  <span className="font-bold text-xl">${course?.adoptionFee}</span>
                </div>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">About Bruno</h3>
                <p className="text-gray-600 leading-relaxed">
                  {course?.description}
                </p>
              </div>
            </div>
          </div>

          {/* Right Side - Adoption Form */}
          <div className="bg-gray-50 p-8 lg:p-12 flex flex-col">
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-gray-900">Adoption Request</h2>
              <p className="text-gray-500 mt-1">Fill out the form to adopt Bruno</p>
            </div>

          
            <FormDetails course={course}></FormDetails>

            <p className="text-center text-xs text-gray-500 mt-6">
              Your information is safe with us
            </p>
          </div>
        </div>
      </div>
    </div>
   
  );
}