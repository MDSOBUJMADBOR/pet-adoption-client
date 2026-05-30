"use client";

import Navbar2 from "@/components/Navbar2";
import { authClient } from "@/lib/auth-client";
import { FileText, Plus, Heart, LogOut, Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation"; 

import { useState } from "react";

const DashboardLayout = ({ children }) => {
  const router = useRouter();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const menuClass = (path) =>
    `flex items-center gap-2 px-4 py-2 rounded-lg cursor-pointer ${
      pathname === path
        ? "bg-gradient-to-r from-pink-500 to-red-400 text-white"
        : "text-gray-600 hover:text-black hover:bg-gray-100"
    }`;
const handleLogOut = async () => {
  await authClient.signOut();
  router.push("/")
}

  return (
    <div className="min-h-screen bg-gray-100">

      {/* NAVBAR */}
      <Navbar2 />

      {/* MOBILE MENU BUTTON */}
      <div className="md:hidden p-4">
        <button onClick={() => setOpen(!open)}>
          {open ? <X /> : <Menu />}
        </button>
      </div>

      <div className="flex">

        {/* SIDEBAR */}
        <aside
          className={`fixed md:static top-0 left-0 h-full w-64 bg-white border-r p-5 flex flex-col justify-between min-h-[calc(100vh-64px)] z-50 transform transition-transform duration-300
          ${open ? "translate-x-0" : "-translate-x-full"} md:translate-x-0`}
        >
          
          <div>
            <h2 className="text-gray-500 text-sm font-semibold mb-4">MENU</h2>

            <div className="space-y-3">

              <Link href="/user/dashboard/my-requests" onClick={() => setOpen(false)}>
                <div className={menuClass("/user/dashboard/my-requests")}>
                  <FileText size={18} /> My Requests
                </div>
              </Link>

              <Link href="/user/dashboard/add-pet" onClick={() => setOpen(false)}>
                <div className={menuClass("/user/dashboard/add-pet")}>
                  <Plus size={18} /> Add Pet
                </div>
              </Link> 

              <Link href="/user/dashboard/my-listings" onClick={() => setOpen(false)}>
                <div className={menuClass("/user/dashboard/my-listings")}>
                  <Heart size={18} /> My Listings
                </div>
              </Link>

            </div>
          </div>

          <button onClick={handleLogOut} className="cursor-pointer flex items-center gap-2 text-red-500 hover:text-red-600">
            <LogOut size={18} /> Logout
          </button>
        </aside>

        {/* OVERLAY (mobile) */}
        {open && (
          <div
            className="fixed inset-0 bg-black/30 md:hidden"
            onClick={() => setOpen(false)}
          ></div>
        )}

        {/* RIGHT SIDE */}
        <main className="flex-1 p-4 md:p-8 w-full">
          {children}
        </main>

      </div>
    </div>
  );
};

export default DashboardLayout;