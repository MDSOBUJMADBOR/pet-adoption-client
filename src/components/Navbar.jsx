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



const Navbar = () => {
const toggleMenu = () => {
  setOpen(prev => !prev); 
};
const navItems = [
 {
path: "/",
text: "Home"
 },
 {
path: "/all-pets", 
text: "All Pets"
 },

]
 
const navItem = [
  {
  path: "/",
  text: "Home"
  },
  {
path: "/all-pets",
text: "All Pets"
 },
 {
  path: "/login",
  text: "Login"
 },
 {
  path: "/",
  text: "Get Started"
 }
]
const navItem2 = [
 {
path: "/",
text: "Home"
 },
 {
path: "/all-pets",
text: "All Pets"
 },
 {
  path: "/user/dashboard",
  text: "dashboard"
 },
]



const [open,setOpen] = useState(false)
const router = useRouter();
const { data : session} = authClient.useSession();
const user = session?.user;

const handleLogOut = async () => {
  await authClient.signOut();
  router.push("/")
}



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
  <h3 className="hidden md:flex text-[24px] font-bold  bg-gradient-to-r from-green-600 to-red-400 bg-clip-text text-transparent">
    Pet Adoption Platform
  </h3>
</Link>
        </div>

        <ul className="sm:flex hidden items-center  text-sm">
{
navItems.map((item,index) => (<MyNavLink key={index} href={item.path}>
<li className="px-7 py-2 text-center font-semibold">{item.text}</li>
</MyNavLink>
))}
</ul>




{/* Mobile device start */}

{ !user ?
 <>
<p></p>
</> : 
<>
 <Image
                      width={40}
                      height={40}
                      src={session?.user?.image || "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?q=80&w=400"}
                      alt="avatar"
                      className="w-10 h-10 rounded-full object-cover ring-2 ring-blue-600/10 md:hidden"
/>


</>

}
    <div onClick={() => setOpen(!open)} className="dropdown dropdown-center sm:hidden">
  
  <div onClick={toggleMenu} className="sm:hidden cursor-pointer">

  {open ? <X className="" /> : <Menu className="" />}  
  
</div> 

  
<ul
  className={` sm:hidden absolute top-14 left-0 w-full bg-green-300   ${
    open ? "max-h-96 opacity-100" : "max-h-0 opacity-0 overflow-hidden"
  }`}
>


{! user ? <>
{
navItem.map((item,index) => (<MyNavLink1 key={index} href={item.path}>
<li className="px-7 py-2 text-center font-semibold  text-xl m-2 rounded-lg hover:bg-gradient-to-r hover:from-green-600 hover:to-red-400 transition-all duration-300">{item.text}</li>

</MyNavLink1>
))}

</>
:
<>
{
navItem2.map((item,index) => (<MyNavLink2 key={index} href={item.path}>
<li className="px-7 py-2 text-center font-semibold  text-xl m-2  rounded-lg hover:bg-gradient-to-r hover:from-green-600 hover:to-red-400 transition-all duration-300">{item.text}</li>

</MyNavLink2>
))}
<Button onClick={handleLogOut} className="w-full px-7 py-2 mx-auto">Log Out</Button>

</>

}
 </ul>



</div>




{/* MObile end */}



<div className="hidden md:flex items-center gap-4">
  {
              !user ? <>
                <Link href="/login" className="font-medium text-slate-700 hover:text-blue-600 transition-colors">Login</Link>
                <Link href="/register">

                   <Button color="primary" className="bg-gradient-to-r from-red-500 to-green-500 text-white font-bold rounded-full px-8 shadow-lg shadow-blue-600/20">
                    Get Started
                  </Button> 
                </Link>
              </> :
                <div className="relative group">
                  <button className="flex items-center gap-3 p-1 rounded-full hover:bg-muted transition-colors border border-transparent hover:border-border">
                    <Image
                      width={40}
                      height={40}
                      src={session?.user?.image || "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?q=80&w=400"}
                      alt="avatar"
                      className="w-10 h-10 rounded-full object-cover ring-2 ring-blue-600/10"
                    />
                    <div className="text-left hidden lg:block">
                      <p className="text-sm font-bold truncate max-w-25">{session?.user?.name}</p>
                      <p className="text-[10px] text-slate-500">Student</p>
                    </div>
                  </button>
                  <div className="absolute right-0 top-12 w-56 bg-white border border-slate-200 rounded-2xl shadow-2xl hidden group-hover:flex flex-col py-2 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                    <div className="px-4 py-3 border-b border-slate-100">
                      <p className="font-bold text-sm">Welcome back!</p>
                      <p>{session?.user?.name}</p>
                      <p className=" truncate text-slate-500">{session?.user?.email}</p>
                    </div>
                    <Link href="/user/dashboard" className="px-4 py-2 text-sm hover:bg-gray-200 flex items-center gap-3 transition-colors">
                      <LayoutDashboard className="w-4 h-4" /> Dashboard
                    </Link>
                    
                    <button
                      onClick={handleLogOut}
                      className="px-4 py-2 text-sm text-red-500 hover:bg-red-50 flex items-center gap-3 transition-colors text-left cursor-pointer">
                      <LogOut className="w-4 h-4" /> Log Out
                    </button>
                  </div>
                </div>
}
</div>   




    
      </nav>
    </div>
  );
};

export default Navbar;