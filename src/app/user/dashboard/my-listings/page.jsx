'use client'


import CancelListing from '@/components/CancelListing';
import EditModal from '@/components/EditModal';
import UserRountPage from '@/components/UserRountPage';
import { authClient } from '@/lib/auth-client';
import { Button, Table } from '@heroui/react';
import { Eye, SquarePen, Trash, UserRound } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import  { useEffect, useState } from 'react';

const MyListing = () => {
  const { data: session } = authClient.useSession();
  const user = session?.user; 
console.log(user,'user');
  const [courses, setCourses] = useState([]); 
 
  useEffect(() => {
    const getCourses = async () => {
      if (!user?.email) return;
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/courses/email/${user.email}`
        );
        const data = await res.json();
        setCourses(data);
      } catch (error) {
        console.error("Error fetching requests:", error);
      }
    };
    getCourses();
  }, [user]);

  return (
                    <div>
      <h1 className='text-4xl font-bold text-green-500'>My Listings</h1>

       <div className='flex justify-between'>
        <h1 className='font-bold text-3xl'>Total: {courses.length}</h1> 
        <Button><Link href={'/user/dashboard/add-pet'}>Add New Pet</Link></Button>
       </div>
       
     

  {
    courses.length > 0 ? (
      
      <div>
        <div className='grid grid-cols-1 lg:grid-cols-4  items-center text-center'>
          <h1 className='font-semibold text-xl'>Pet</h1>
          <h1 className='font-semibold text-xl'>Fee</h1>
          <h1 className='font-semibold text-xl'>Status</h1>
          <h1 className='font-semibold text-xl'>Actions</h1>
        </div>
        {courses.map((item) => (
          <div key={item._id} className='grid grid-cols-1 lg:grid-cols-4  items-center  bg-white p-2 rounded-md text-center' >
            {/* 
            <p>{item.pickupDate}</p> */}
            <div className='flex gap-2'>
             <Image
      src={item.image}
      className='rounded-lg'
      width={50}
      height={50}
      alt="Image"
    />
    <h2 className='font-bold text-lg'>{item.petName}</h2>
            </div>
<div>
  <h1>${item.adoptionFee}</h1>
</div>
<div>
  <h1>{item.status}</h1>
</div>

            <div className="flex gap-2">
              <Link href={`/all-pets/${item._id}`}>
                <Button>
                  <Eye size={16} />
                </Button>
              </Link>
               <UserRountPage></UserRountPage>
             <EditModal></EditModal>

             <CancelListing user={item}></CancelListing>
            </div>
          </div>
        ))}
      </div>
    ) : (
      <div>
      <div class="flex justify-center items-center h-72">
  <div class="bg-white shadow-xl rounded-2xl p-8 text-center max-w-sm">
    
    <div class="text-5xl mb-3">📭</div>

    <h2 class="text-xl font-bold text-gray-800">
      No Data Found
    </h2>

    <p class="text-gray-500 mt-2 text-sm">
      We couldn’t find any results. Try adding something new.
    </p>

    {/* <button class="mt-5 px-5 py-2 bg-indigo-500 text-white rounded-full hover:bg-indigo-600 transition">
     
    </button> */}
    <Button><Link href={'/user/dashboard/add-pet'}> Add Data</Link></Button>

  </div>
</div>
      </div>
    )
  }
</div>


                  
          );
};

export default MyListing;