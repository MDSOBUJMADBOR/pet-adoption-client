import { AlertDialog, Button } from '@heroui/react';
import {  User, UserRound } from 'lucide-react';
import React from 'react';

const UserRountPage = () => {
          return (
                    <div>
 <AlertDialog>
      <Button className="rounded-md"> <UserRound></UserRound></Button>
      <AlertDialog.Backdrop>
        <AlertDialog.Container>
          <AlertDialog.Dialog className="sm:max-w-[400px]">
            <AlertDialog.CloseTrigger className="space-y-4" /> 
            <AlertDialog.Header>
                <User className='text-red-300' /> 
              <AlertDialog.Heading>Adoption Requests for dog</AlertDialog.Heading>
            </AlertDialog.Header>
            <AlertDialog.Body>
             <p className='text-center'>No requests yet for dog</p>                      
           
            </AlertDialog.Body> 
            <AlertDialog.Footer>
           
            </AlertDialog.Footer> 
          </AlertDialog.Dialog>
        </AlertDialog.Container>
      </AlertDialog.Backdrop>
    </AlertDialog>  

                    </div>
          );
};

export default UserRountPage;