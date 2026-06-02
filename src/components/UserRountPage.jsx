"use client";

import { useEffect, useState } from "react";
import { AlertDialog, Button } from "@heroui/react";
import { User, UserRound } from "lucide-react";
import { useParams } from "next/navigation";

const UserRountPage = () => {
  const params = useParams();
  const petId = params?.petId;

  const [request, setRequest] = useState([]);

  // ✅ fetch requests
  useEffect(() => {
    if (!petId) return;

    fetch(`http://localhost:8080/request/${petId}`)
      .then((res) => res.json())
      .then((data) => setRequest(data));
  }, [petId]);

  // ✅ status update function
  const handleStatus = async (id, status) => {
    const res = await fetch(`http://localhost:5000/request/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ status }),
    });

    if (res.ok) {
      setRequest((prev) =>
        prev.map((req) =>
          req._id === id ? { ...req, status } : req
        )
      );
    }
  };

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
                {request.length === 0 ? (
                  <p>No requests found</p>
                ) : (
                  request.map((req) => (
                    <div key={req._id} className="border p-3 mb-3 rounded-md">
                      <p><strong>Name:</strong> {req.yourName}</p>
                      <p><strong>Email:</strong> {req.yourEmail}</p>
                      <p><strong>Pickup:</strong> {req.pickupDate}</p>

                      {/* STATUS */}
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

                      {/* BUTTONS */}
                      {req.status === "pending" && (
                        <div className="flex gap-2 mt-2">
                          <Button
                            color="success"
                            size="sm"
                            onClick={() => handleStatus(req._id, "approved")}
                          >
                            Approve
                          </Button>

                          <Button
                            color="danger"
                            size="sm"
                            onClick={() => handleStatus(req._id, "rejected")}
                          >
                            Reject
                          </Button>
                        </div>
                      )}
                    </div>
                  ))
                )}
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