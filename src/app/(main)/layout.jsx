import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import React from 'react';
import { Toaster } from 'react-hot-toast';

const DashboardLayout = ({children}) => {
  return (
  <>
<Navbar></Navbar>
     {children}
 <Footer></Footer>
  <Toaster />
  </>        
       
     

  );
};

export default DashboardLayout;