import { AlertDialog, Button } from '@heroui/react';
import { CircleX, UserRound } from 'lucide-react';
import React from 'react';

const UserRountPage = () => {
          return (
                    <div>
 <AlertDialog>
      <Button className="rounded-md"> <UserRound></UserRound></Button>
      <AlertDialog.Backdrop>
        <AlertDialog.Container>
          <AlertDialog.Dialog className="sm:max-w-[400px]">
            <AlertDialog.CloseTrigger /> 
            <AlertDialog.Header>
              <AlertDialog.Icon status="danger" />
              <AlertDialog.Heading>Delete project permanently?</AlertDialog.Heading>
            </AlertDialog.Header>
            <AlertDialog.Body>
              <p>
                This will permanently delete <strong>My Awesome Project</strong> and all of its
                data. This action cannot be undone.
              </p>
            </AlertDialog.Body> 
            <AlertDialog.Footer>
              <Button slot="close" variant="tertiary">
                Cancel
              </Button>
              <Button  slot="close" variant="danger">
                Confirm Cancel 
              </Button>
            </AlertDialog.Footer> 
          </AlertDialog.Dialog>
        </AlertDialog.Container>
      </AlertDialog.Backdrop>
    </AlertDialog>  

                    </div>
          );
};

export default UserRountPage;