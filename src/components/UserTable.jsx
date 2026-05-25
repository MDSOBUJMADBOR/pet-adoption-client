import { Button , Table} from '@heroui/react';
import { Eye } from 'lucide-react';
import Link from 'next/link';
import React from 'react';
import Cancel from './Cancel';


export const getRequest = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/request/${user?.email}`);
  const data = await res.json(); 
  console.log(data,'data');
  return data;
};

const UserTable = () => {
const request = getRequest()
console.log(request,'123');

const safeDate = (date) => {
  if (!date) return "N/A";
  return format(new Date(date), "dd MMM yyyy");
}
          return (
                    <div>

   <div>
 <Table>
      <Table.ScrollContainer>
        <Table.Content aria-label="Team members" className="w-full">

          <Table.Header className="">
            <Table.Column className='text-xl font-bold' isRowHeader>Name</Table.Column>
            <Table.Column className='text-xl font-bold'>Request Date</Table.Column>
            <Table.Column className='text-xl font-bold'>Pickup Date</Table.Column>
            <Table.Column className='text-xl font-bold'>Status</Table.Column>
            <Table.Column className='text-xl font-bold'>Actions</Table.Column>
          </Table.Header>

          <Table.Body>
            {request?.length > 0 ? (
              request.map((user) => (
                <Table.Row key={user._id}>
                  
                  <Table.Cell>{user.petName}</Table.Cell>
                  <Table.Cell>{safeDate(user.pickupDate)}</Table.Cell>
                  <Table.Cell> {safeDate(user.createdAt)}</Table.Cell>
                  <Table.Cell>Pending</Table.Cell>

                  <Table.Cell>
                   
 <div className="flex gap-3">
    <Link href={`/all-pets/${user._id}`}>
     <Button className="rounded-md" variant="outline"><Eye /> View</Button>
   </Link>

<Cancel user={user}></Cancel>
 </div>
                  </Table.Cell>


                </Table.Row>
              ))
            ) : (
              <Table.Row>
                <Table.Cell>No users found</Table.Cell>
                <Table.Cell></Table.Cell>
                <Table.Cell></Table.Cell>
                <Table.Cell></Table.Cell>
                <Table.Cell></Table.Cell>
              </Table.Row>
            )}
          </Table.Body>

        </Table.Content>
      </Table.ScrollContainer>
    </Table>
</div>        

                    </div>
          );
};

export default UserTable;