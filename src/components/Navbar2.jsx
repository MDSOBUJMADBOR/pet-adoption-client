"use client"

import Image from "next/image";
import Link from "next/link";
import logo from "../../public/cat.png"
import MyNavLink from "./MyNavLink";
import { LayoutDashboard, LogOut, Menu, User, X } from 'lucide-react';
import { useState } from "react";
import { Button } from "@heroui/react";


import { useRouter } from "next/navigation";
import { authClient } from "@/lib/auth-client";
import MyNavLink1 from "./MyNavLink1";
import MyNavLink2 from "./MyNavLink2"; 




const Navbar2 = () => {

const { data : session} = authClient.useSession();
const user = session?.user;



  return (
    <div className="border-b border-gray-200 sticky top-0  z-50 shadow-xl/3 px-4 ">
      <nav className="flex justify-between items-center p-4 max-w-7xl mx-auto w-full ">
         
        <div className="flex  gap-4 items-center">
        <Link href={"/"}>
          <Image
            src={logo}
            alt="logo"
            loading="eager"  
            width={30}
            height={30}
            className="object-cover h-auto w-auto rounded-full"
          />
        </Link>
<Link href={"/"}>
  <h3 className="flex text-[24px] font-bold  bg-gradient-to-r from-green-600 to-red-400 bg-clip-text text-transparent">
    Pet Adoption Platform
  </h3>
</Link>
 
        </div>
 <div className="hidden md:flex gap-2 items-center  "> 
<Image
                      width={40}
                      height={40}
                      src={session?.user?.image || "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?q=80&w=400"}
                      alt="avatar"
                      className="w-10 h-10 rounded-full object-cover ring-2 ring-blue-600/10" />
<div>
          <p className="font-bold">{session?.user?.name}</p>
          <p className="text-sm">{session?.user?.email}</p>
    </div>
 </div>
    

    
      </nav>
    </div>
  );
};

export default Navbar2;