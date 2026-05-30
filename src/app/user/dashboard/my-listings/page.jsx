'use client'

import Cancel from '@/components/Cancel';
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
      <h1>total: {courses.length}</h1>                        


 <div>
  {
    courses.length > 0 ? (
      <div>
        {courses.map((item) => (
          <div key={item._id} className='flex gap-5 justify-between'>
            {/* 
            <p>{item.pickupDate}</p> */}
            <div className='flex gap-2'>
             <Image
      src={item.image}
      width={50}
      height={50}
      alt="Image"
    />
    <h2 className='font-bold text-2xl'>{item.petName}</h2>
            </div>
<div>
  <h1>${item.adoptionFee}</h1>
</div>

            <div className="flex gap-2">
              <Link href={`/all-pets/${item._id}`}>
                <Button>
                  <Eye size={16} />
                </Button>
              </Link>
               <Button>
                <UserRound size={16} />
               </Button>
              <Button>
                <SquarePen size={16} />
              </Button>

              <Cancel user={item} />
            </div>
          </div>
        ))}
      </div>
    ) : (
      <div>
        <h2>No Data Found</h2>
      </div>
    )
  }
</div>


                    </div>
          );
};

export default MyListing;