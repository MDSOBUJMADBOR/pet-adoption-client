import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import Navbar2 from '@/components/Navbar2';
import React from 'react';

const DashboardLayout = ({children}) => {
  return (
  <>
<Navbar></Navbar>
     {children}
 <Footer></Footer>
  </>        
       
     

  );
};

export default DashboardLayout;