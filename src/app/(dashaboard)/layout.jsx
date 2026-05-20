import Navbar2 from '@/components/Navbar2';
import React from 'react';

const DashboardLayout = ({children}) => {
          return (
  <>
  <Navbar2></Navbar2>
     {children}

  </>             

      
       
     

          );
};

export default DashboardLayout;