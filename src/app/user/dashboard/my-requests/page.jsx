import { getRequest } from '@/lib/pets/data';
import React from 'react';

const MyRequestsPage = async() => {
const request = await getRequest();
console.log(request,'request');
 
          
          return (
                    <div>
<h2 className='text-4xl font-bold text-green-500'>My Adoption Requests</h2>





                    </div>
          );
};

export default MyRequestsPage;