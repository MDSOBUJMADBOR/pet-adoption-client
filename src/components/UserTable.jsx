"use client";

import React, { useEffect, useState } from "react";
import { Button, Table } from "@heroui/react";
import { Eye } from "lucide-react";
import Link from "next/link";
import Cancel from "./Cancel";
import { authClient } from "@/lib/auth-client"; 
import { format } from "date-fns";


const UserTable = () => {

  const { data: session } = authClient.useSession();
  const user = session?.user;

  const [request, setRequest] = useState([]);

  useEffect(() => {
    const getRequest = async () => {
      if (!user?.email) return;

      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/request/${user.email}`
        );
        const data = await res.json();
        setRequest(data);
      } catch (error) {
        console.error("Error fetching requests:", error);
      }
    };

    getRequest();
  }, [user]);


  const safeDate = (date) => {
    if (!date) return "N/A";
    return format(new Date(date), "dd MMM yyyy");
  };

  return (
    <div>
      <Table>
        <Table.ScrollContainer>
          <Table.Content className="w-full">

            <Table.Header>
              <Table.Column>Name</Table.Column>
              <Table.Column>Request Date</Table.Column>
              <Table.Column>Pickup Date</Table.Column>
              <Table.Column>Status</Table.Column>
              <Table.Column>Actions</Table.Column>
            </Table.Header>

            <Table.Body>
              {request.length > 0 ? (
                request.map((item) => (
                  <Table.Row key={user._id}>
                    <Table.Cell>{item.petName}</Table.Cell>
                    <Table.Cell>{safeDate(item.pickupDate)}</Table.Cell>
                    <Table.Cell>{safeDate(item.createdAt)}</Table.Cell>
                    <Table.Cell>Pending</Table.Cell>

                    <Table.Cell>
                      <div className="flex gap-3">
                        <Link href={`/all-pets/${item.userId}`}>
                          <Button variant="outline">
                            <Eye /> View
                          </Button>
                        </Link>

                        <Cancel user={item} />
                      </div>
                    </Table.Cell>
                  </Table.Row>
                ))
              ) : (
                <Table.Row>
                  <Table.Cell></Table.Cell>
                  <Table.Cell></Table.Cell>
                  <Table.Cell><Link href={'/all-pets'}>  
                             
               <Button> No Request</Button>       
                  
                  </Link></Table.Cell>
                  <Table.Cell></Table.Cell>
                  <Table.Cell></Table.Cell>
                </Table.Row>
              )}
            </Table.Body>

          </Table.Content>
        </Table.ScrollContainer>
      </Table>
    </div>
  );
};

export default UserTable;