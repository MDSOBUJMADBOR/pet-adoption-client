import { Award, Layers, Shield, Trophy } from 'lucide-react';
import React from 'react';

const StaticSectionPage = () => {
          return (
                   <div className='bg-gray-100'>
 <div className='grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 max-w-7xl mx-auto py-10 px-5'>

<div className='text-center border space-y-4 p-6 bg-white rounded-[18px] cursor-pointer hover:shadow-2xl transition duration-500 hover:scale-104'>
<p className='flex justify-center items-center '>  <Layers className='text-red-500 bg-[#fef2f2] p-3 size-14 rounded-[10px]' /> </p>
<h2 className='font-semibold text-[20px]'>Why Adopt Pets?</h2>
<p className='text-gray-500'>Give a pet a second change <br /> and make a lifelong friend. </p>
</div>

<div className='text-center border space-y-4 p-6 bg-white rounded-[18px] cursor-pointer hover:shadow-2xl transition duration-500 hover:scale-104'>
<p className='flex justify-center items-center '> <Trophy className='text-[#0968f7] bg-[#eff6ff] p-3 size-14 rounded-[10px]' /> </p>
<h2 className='font-semibold text-[20px]'>Success Stories</h2>
<p className='text-gray-500'>Thusands of pets have  <br /> found their forever homes. </p>

</div>
<div className='text-center border space-y-4 p-6 bg-white rounded-[18px] cursor-pointer hover:shadow-2xl transition duration-500 hover:scale-104'>
<p className='flex justify-center items-center '>  <Shield className='text-green-500 bg-[#f0fdf4] p-3 size-14 rounded-[10px]' /> </p> 
<h2 className='font-semibold text-[20px]'>Pet Care Tips</h2>
<p className='text-gray-500'>Learn how to take better  <br /> care of your pets. </p>

</div>
<div className='text-center border space-y-4 p-6 bg-white rounded-[18px] cursor-pointer hover:shadow-2xl transition duration-500 hover:scale-104'>
<p className='flex justify-center items-center '>  <Award className='text-yellow-500 bg-[#fffbeb] p-3 size-14 rounded-[10px]' /> </p> 
<h2 className='font-semibold text-[20px]'>Happy Community</h2>
<p className='text-gray-500'>Join a loving community <br /> of pet lovers. </p>

</div>
                    </div>
                   </div>
          );
};

export default StaticSectionPage;