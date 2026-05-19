import React from 'react';

const AllPetsDetails =async ({ params }) => {
const { id } = await params;

console.log(id,'co');
// const {_id, petName,species,breed,age,gender,image,healthStatus,location, ownerEmail ,price } = course;
          return (
                    <div>
details page 


                    </div>
          );
};

export default AllPetsDetails;