"use client"

import Image from "next/image";
import Link from "next/link";
import logo from "../../public/cat.png"
import MyNavLink from "./MyNavLink";
import { Menu, X } from 'lucide-react';
import { useState } from "react";
import { Button } from "@heroui/react";



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
const [open,setOpen] = useState(false)


  return (
    <div className="border-b border-gray-200 sticky top-0  z-50 shadow-xl/3 px-4 ">
      <nav className="flex justify-between items-center p-4 max-w-7xl mx-auto w-full ">
         
        <div className="flex  gap-4 items-center">
          <Image
            src={logo}
            alt="logo"
            loading="eager"  
            width={30}
            height={30}
            className="object-cover h-auto w-auto rounded-full"
          />
<Link href={"/"}>
  <h3 className="text-[24px] font-bold  ">
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
{/* small device start */}
    <div onClick={() => setOpen(!open)} className="dropdown dropdown-center sm:hidden ">
  
  <div onClick={toggleMenu} className="sm:hidden cursor-pointer">
  {open ? <X className="" /> : <Menu className="" />}
</div>

  {/* Mobile Menu */}
<ul
  className={` sm:hidden absolute top-12 left-0 w-full bg-green-100 shadow-md flex flex-col items-center gap-5 py-4 transition-all duration-300 ${
    open ? "max-h-96 opacity-100" : "max-h-0 opacity-0 overflow-hidden"
  }`}
>
  {navItems.map((item, index) => (
    <li className="w-full px-4 " key={index}>
      <Link
        href={item.path}
        onClick={() => setOpen(false)}
        className="block w-full py-3 text-center rounded-lg transition-all duration-400 ease-in-out  hover:bg-[#3cd86b]"
      >
        {item.text}
      </Link>
    </li>
  ))}





{/* {!user && <li className="w-full px-4">
    <Link
      href="/login"
      className="block w-full py-2 text-center rounded-lg transition-all duration-300 ease-in-out hover:bg-[#3cd86b] text-white"
    >
      <Button className="text-lg " variant="light">Login</Button>
    </Link>
  </li>}
{user && <li className="flex gap-3">
              <Avatar size="sm">
                <Avatar.Image
                  alt="John Doe"
                  src={user?.image}
                  referrerPolicy="no-referrer"
                />
                <Avatar.Fallback>{user?.name.charAt(0)}</Avatar.Fallback> 
              </Avatar>

              <Button onClick={handleSignOut} size="sm" variant="danger">LoginOut</Button>
            </li>
} */}



</ul>
</div>
{/* small device ent */} 



        <div className="sm:flex hidden gap-4">
          {/* {!user && 
            <ul className="flex items-center gap-4  text-sm">
            
            <li>
              <Link href={"/login"}><Button>Login</Button></Link>
            </li>
          </ul>}

          {user && (
            <div className="flex gap-3">
              <Avatar size="sm">
                <Avatar.Image
                  alt="John Doe"
                  src={user?.image}
                  referrerPolicy="no-referrer"
                />
                <Avatar.Fallback>{user?.name.charAt(0)}</Avatar.Fallback> 
              </Avatar>

              <Button onClick={handleSignOut} size="sm" variant="danger">LoginOut</Button>
            </div>
          )} */}
<Link href={"/login"}><Button>Login</Button></Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;