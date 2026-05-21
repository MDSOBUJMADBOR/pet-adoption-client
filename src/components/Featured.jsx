
import { FetchGetAllPets } from '@/lib/pets/data';
import React from 'react';
import PetCard from './PetCard';


const Featured =async () => {
const courses = await FetchGetAllPets();
console.log(courses,'sob');
          return (
                    <div className='px-10 py-10'>
 <h1 className='font-bold text-3xl my-3 '>Featured Pets</h1>  



 <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
{
courses?.map(course => <PetCard key={course?._id} course={course}></PetCard>) 
}
</div> 

                    </div>
          );
};

export default Featured;