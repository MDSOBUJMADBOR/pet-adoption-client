'use client'
import {Envelope} from "@gravity-ui/icons";
import {Button, Input, Label, Modal, Surface, TextArea, TextField} from "@heroui/react";
import { SquarePen } from "lucide-react";

const EditModal = ({item}) => {
  console.log(item,'item');
  const {_id,petName,species,breed,description,gender,healthStatus,image,location,status,adoptionFee,age} = item ;
  // console.log(species,'petName');
const onSubmit = async (e) => {
e.preventDefault();
const formData = new FormData(e.currentTarget);
const item = Object.fromEntries(formData.entries());

// console.log(item,'form');

const res = await fetch(`http://localhost:8080/courses/${_id}` , {
  method: "PATCH",
  headers: {
    "content-type": "application/json",
  },
  body: JSON.stringify(item)
})
const data = await res.json(); 
// console.log(data,'data');
}


          return (
                    <div>
  <Modal>
<Button className='rounded-md'> 
<SquarePen size={16} />
</Button>
      <Modal.Backdrop>
        <Modal.Container placement="auto">
          <Modal.Dialog className="sm:max-w-lg">
            <Modal.CloseTrigger />
            <Modal.Header>
              <Modal.Icon className="bg-accent-soft text-accent-soft-foreground">
                <Envelope className="size-5" />
              </Modal.Icon>
              <Modal.Heading>Update</Modal.Heading>
             
            </Modal.Header>
            <Modal.Body className="p-6">
              <Surface variant="default">
                <form onSubmit={onSubmit}  className="flex flex-col gap-4">
                  <TextField className="w-full" name="name" isRequired  defaultValue={petName} >
                    <Label>Pet Name</Label>
                    {/* <Input placeholder="Enter your name" /> */}
                    <Input className="w-full" name="petName"  /> 
                  </TextField>

                  <TextField className="w-full" name="Species"  isRequired  defaultValue={species}  >
                    <Label>Species</Label>
                    <Input className='w-full' name="species"/> 
                  </TextField>

                  <TextField className="w-full" name="age"  isRequired  defaultValue={age} >
                    <Label>Age</Label>
                    <Input className='w-full' type="number" name="age"/>
                  </TextField>

                  <TextField className="w-full" name="gender" isRequired  defaultValue={gender}>
                    <Label>Gender</Label>
                    <Input className='w-full' name="gender"/> 
                  </TextField>

                  <TextField className="w-full" name="image" isRequired  defaultValue={image}>
                    <Label>Image URL</Label>
                    <Input className='w-full' name="image"/> 
                  </TextField>

                  <TextField className="w-full" name="healthStatus" isRequired  defaultValue={healthStatus}>
                    <Label>Health Status</Label>
                    <Input className='w-full' name="healthStatus"/> 
                  </TextField>

                  <TextField className="w-full" name="location" isRequired  defaultValue={location}>
                    <Label>Location</Label>
                    <Input className='w-full' name="location"/> 
                  </TextField>

                  <TextField className="w-full" name="adoptionFee" isRequired  defaultValue={adoptionFee}>
                    <Label>Adoption Fee</Label>
                    <Input className='w-full' name="adoptionFee"/> 
                  </TextField>

                  <TextField className="w-full" name="status" isRequired  defaultValue={status}>
                    <Label>Status</Label>
                    <Input className='w-full' name="status"/> 
                  </TextField>

                  <TextField className="w-full" name="description" isRequired  defaultValue={description}>
                    <Label>Description</Label>                    
                    <TextArea
                                   className="w-full"
                                   name="description"
                                   placeholder="Write details about the pet..."
                                   variant="bordered"
                                   required
                                 />
                  </TextField>
 <Modal.Footer>            
<Button type="submit" slot="close">Save</Button> 
  </Modal.Footer>
                </form>
              </Surface>
            </Modal.Body>
           
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>                            
                    </div>
          );
};

export default EditModal;