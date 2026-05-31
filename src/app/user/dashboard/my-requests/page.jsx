
import UserTable from '@/components/UserTable'; 
import React from 'react';

const MyRequestsPage = async() => { 

   
          return (
                    <div className='space-y-5'>
<h2 className='text-4xl font-bold text-green-500'>My Adoption Requests</h2>

<UserTable></UserTable>

                    </div>
          );
};

export default MyRequestsPage;