"use client";

import React, { useEffect, useState } from "react";
import { Button, Table } from "@heroui/react";
import { Eye, Trash } from "lucide-react";
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

  // ✅ Safe date
  const safeDate = (date) => {
    if (!date) return "N/A";
    return format(new Date(date), "dd MMM yyyy");
  };

  // ✅ FIXED STATUS HANDLER (সব case handle করবে)
  const getStatus = (status) => {
    if (!status) return "Pending";

    // যদি object আসে (wrong backend data)
    if (typeof status === "object" && !Array.isArray(status)) {
      return status.default || "Pending";
    }

    // যদি array আসে
    if (Array.isArray(status)) {
      return status[1] || "Pending";
    }

    // normal string
    return status;
  };

  // ✅ color handler
  const getStatusColor = (status) => {
    if (status === "Approved") return "bg-green-500 text-white";
    if (status === "Rejected") return "bg-red-500 text-white";
    return "bg-yellow-500 text-white";
  };
  const pendingCount = request.filter(
  (item) => getStatus(item.status) === "Pending"
).length;

const approvedCount = request.filter(
  (item) => getStatus(item.status) === "Approved"
).length;

const rejectedCount = request.filter(
  (item) => getStatus(item.status) === "Rejected"
).length;

  return (
    <div className="w-full">
<div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-4 py-3">
     <h1 className='font-bold text-3xl bg-white border-2 border-gray-300 flex justify-center items-center h-[100px] w-[200px] rounded-lg'>Total: {request.length}</h1> 
  <h1 className='font-bold text-3xl bg-white border-2 border-gray-300 flex justify-center items-center h-[100px] w-[200px] rounded-lg'>Pending: {pendingCount}</h1>
  <h1 className='font-bold text-3xl bg-white border-2 border-gray-300 flex justify-center items-center h-[100px] w-[200px] rounded-lg'>Approved: {approvedCount}</h1>
  <h1 className='font-bold text-3xl bg-white border-2 border-gray-300 flex justify-center items-center h-[100px] w-[200px] rounded-lg'>Rejected: {rejectedCount}</h1>
</div>
      {/* ================= DESKTOP TABLE ================= */}
      <div className="hidden md:block overflow-x-auto">
        <Table className="min-w-[700px]">
          <Table.ScrollContainer>
            <Table.Content>

              <Table.Header>
                <Table.Column isRowHeader className="text-xl">
                  Name
                </Table.Column>
                <Table.Column className="text-xl">Request Date</Table.Column>
                <Table.Column className="text-xl">Pickup Date</Table.Column>
                <Table.Column className="text-xl">Status</Table.Column>
                <Table.Column className="text-xl">Actions</Table.Column>
              </Table.Header>

              <Table.Body>
                {request.length > 0 ? (
                  request.map((item) => {
                    const status = getStatus(item.status);

                    return (
                      <Table.Row key={item._id}>
                        <Table.Cell>{item.petName}</Table.Cell>

                        <Table.Cell>{safeDate(item.createdAt)}</Table.Cell>
                        <Table.Cell>{safeDate(item.pickupDate)}</Table.Cell>

                        <Table.Cell>
                          <span
                            className={`px-3 py-1 rounded-full text-sm ${getStatusColor(
                              status
                            )}`}
                          >
                            {status}
                          </span>
                        </Table.Cell>

                        <Table.Cell>
                          <div className="flex gap-3">
                            <Link href={`/all-pets/${item.userId}`}>
                              <Button className="rounded-md">
                                <Eye size={16} /> View
                              </Button>
                            </Link>

                            <Cancel user={item} />
                          </div>
                        </Table.Cell>
                      </Table.Row>
                    );
                  })
                ) : (
                  <Table.Row>
                    <Table.Cell colSpan={5} className="text-center py-10">
                      <Link href="/all-pets">
                        <Button>
                          No Request <Trash />
                        </Button>
                      </Link>
                    </Table.Cell>
                  </Table.Row>
                )}
              </Table.Body>

            </Table.Content>
          </Table.ScrollContainer>
        </Table>
      </div>

      {/* ================= MOBILE CARD ================= */}
      <div className="md:hidden space-y-4">
        {request.length > 0 ? (
          request.map((item) => {
            const status = getStatus(item.status);

            return (
              <div key={item._id} className="bg-white p-4 rounded-xl shadow">
                <h2 className="font-bold text-lg">{item.petName}</h2>

                <p className="text-sm text-gray-500">
                  Request: {safeDate(item.createdAt)}
                </p>

                <p className="text-sm text-gray-500">
                  Pickup: {safeDate(item.pickupDate)}
                </p>

                <p className="mt-2">
                  Status:{" "}
                  <span
                    className={`font-semibold ${
                      status === "Approved"
                        ? "text-green-500"
                        : status === "Rejected"
                        ? "text-red-500"
                        : "text-yellow-500"
                    }`}
                  >
                    {status}
                  </span>
                </p>

                <div className="flex gap-2 mt-3">
                  <Link href={`/all-pets/${item.userId}`}>
                    <Button size="sm">
                      <Eye size={14} /> View
                    </Button>
                  </Link>

                  <Cancel user={item} />
                </div>
              </div>
            );
          })
        ) : (
          <div className="text-center py-10">
            <Link href="/all-pets">
              <Button>
                No Request <Trash />
              </Button>
            </Link>
          </div>
        )}
      </div>

    </div>
  );
};

export default UserTable;