"use client";

import React, { useEffect, useState } from "react";
import { AlertDialog, Button } from "@heroui/react";
import { User, UserRound } from "lucide-react";
import { authClient } from "@/lib/auth-client";

const UserRountPage = () => {
  const { data: session } = authClient.useSession();
  const user = session?.user;

  const [request, setRequest] = useState([]);

  // 🔵 Fetch Requests
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

 


  return (
    <div>
      <AlertDialog>
        <Button className="rounded-md">
          <UserRound />
        </Button>

        <AlertDialog.Backdrop>
          <AlertDialog.Container>
            <AlertDialog.Dialog className="sm:max-w-[400px]">
              <AlertDialog.CloseTrigger />

              <AlertDialog.Header>
                <User className="text-red-300" />
                <AlertDialog.Heading>
                  Adoption Requests
                </AlertDialog.Heading>
              </AlertDialog.Header>

              <AlertDialog.Body>
                {request.length === 0 && (
                  <p>No Requests Found</p>
                )}

                {request.map((req) => (
                  <div
                    key={req._id}
                    className="border p-3 mb-3 rounded-md"
                  >
                    <p>
                      <strong>Name:</strong> {req.userName}
                    </p>
                    <p>
                      <strong>Email:</strong> {req.userEmail}
                    </p>
                    <p>
                      <strong>Pickup:</strong> {req.pickupDate}
                    </p>

                    {/* 🟡 Status */}
                    <p>
                      <strong>Status:</strong>{" "}
                      <span
                        className={
                          req.status === "pending"
                            ? "text-yellow-500"
                            : req.status === "approved"
                            ? "text-green-500"
                            : "text-red-500"
                        }
                      >
                        {req.status}
                      </span>
                    </p>

                    {/* 🔥 Buttons */}
                    {req.status === "pending" && (
                      <div className="flex gap-2 mt-2">
                        <Button
                          color="success"
                          size="sm"
                          onClick={() =>
                            handleStatus(req._id, "approved")
                          }
                        >
                          Approve
                        </Button>

                        <Button
                          color="danger"
                          size="sm"
                          onClick={() =>
                            handleStatus(req._id, "rejected")
                          }
                        >
                          Reject
                        </Button>
                      </div>
                    )}
                  </div>
                ))}
              </AlertDialog.Body>

              <AlertDialog.Footer>
                <p className="text-sm text-gray-400">
                  Manage adoption requests
                </p>
              </AlertDialog.Footer>
            </AlertDialog.Dialog>
          </AlertDialog.Container>
        </AlertDialog.Backdrop>
      </AlertDialog>
    </div>
  );
};

export default UserRountPage;