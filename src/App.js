import React from 'react';
import Paper from './components/Paper';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import { useState } from 'react';
const App =() => {
  const[sidebarOpen,setSidebarOpen] =useState(false);

  const openSidebar = () =>{
      setSidebarOpen(true);
  }
  const closeSidebar = () =>{
      setSidebarOpen(false);
  }
  
  
  return(
      <div className ="grid grid-cols-6 md-col-span-2 font-sans">
          <div className='col-span-1'>
            <Sidebar  sidebarOpen={sidebarOpen} closeSidebar={closeSidebar} />
            </div>
            <div className='col-span-5 '>
          <Navbar  sidebarOpen ={sidebarOpen} openSidebar={openSidebar} />
          <Paper />
          
          
          </div>
         
        
      </div>
  )
}
export default App;


