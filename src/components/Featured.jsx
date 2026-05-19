import PetCard from '@/app/all-pets/page';
import { getAllPets } from '@/lib/pets/data';
import React from 'react';


const Featured =async () => {
const courses = await getAllPets();
console.log(courses,'sob');
          return (
                    <div className='max-w-7xl mx-auto'>
 <h1>Featured Pets</h1>  



<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
{
courses?.map(course => <PetCard key={course?._id} course={course}></PetCard>)
}
</div>

                    </div>
          );
};

export default Featured;