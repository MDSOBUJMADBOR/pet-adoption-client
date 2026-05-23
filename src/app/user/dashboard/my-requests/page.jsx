
import {Table} from "@heroui/react";
import { getRequest } from '@/lib/pets/data';
import React from 'react';
import { AlertDialog, Button } from '@heroui/react';
import Link from 'next/link';
import { Eye } from "lucide-react";
import { format } from "date-fns";
const MyRequestsPage = async() => {
const request = await getRequest();
console.log(request,'re');
const { userId,petName,pickupDate,yourName,yourEmail ,_id } = request;
console.log(request?.petName,'petname');




const safeDate = (date) => {
  if (!date) return "N/A";
  return format(new Date(date), "dd MMM yyyy");
};

          return (
                    <div>
<h2 className='text-4xl font-bold text-green-500'>My Adoption Requests</h2>


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
                <Table.Row key={request._id}>
                  
                  <Table.Cell>{user.petName}</Table.Cell>
                  <Table.Cell>{safeDate(user.pickupDate)}</Table.Cell>
                  <Table.Cell> {safeDate(user.createdAt)}</Table.Cell>
                  <Table.Cell>Pending</Table.Cell>

                  <Table.Cell>
                   
                    <Link href={`/users/${user._id}/edit`}>
                      <Button variant="outline"><Eye /> View</Button>
                    </Link>



<AlertDialog>
      <Button variant="danger">Cancel</Button>
      <AlertDialog.Backdrop>
        <AlertDialog.Container>
          <AlertDialog.Dialog className="sm:max-w-[400px]">
            <AlertDialog.CloseTrigger />
            <AlertDialog.Header>
              <AlertDialog.Icon status="danger" />
              <AlertDialog.Heading>Cancel User permanently?</AlertDialog.Heading>
            </AlertDialog.Header>
            <AlertDialog.Body>
              <p>
                This will permanently delete <strong>{user.name}</strong> and all of its
                data. This action cannot be undone.
              </p>
            </AlertDialog.Body>
            <AlertDialog.Footer>
              <Button slot="close"  variant="tertiary">
                Cancel
              </Button>
              <Button onClick={ () => handleDelete(user._id)} slot="close" variant="danger">
              Confirm  Delete
              </Button>
            </AlertDialog.Footer>
          </AlertDialog.Dialog>
        </AlertDialog.Container>
      </AlertDialog.Backdrop>
    </AlertDialog>



                    
                  </Table.Cell>


                </Table.Row>
              ))
            ) : (
              <Table.Row>
                <Table.Cell>No users found</Table.Cell>
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

export default MyRequestsPage;