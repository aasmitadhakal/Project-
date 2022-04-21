import React from "react";
import Sidebars from "./Sidebars";
import {Route,Routes} from 'react-router-dom';
import Paper from "./components/Paper";
import Navbar from "./components/Navbar";
import { useState } from "react";
import Form from "./Form";

// import About from "./About";
const App = () => {

 
 const [sidebarOpen, setSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <>
  <div className="flex justify-between h-screen overflow-y-hidden">
      <div
        className={`${
          sidebarOpen ? "w-72" : "w-0 "
        } transition-all duration-300 ease-in-out absolute lg:relative left-0 top-0`}
      >
        <Sidebars toggleSidebar={toggleSidebar} sidebarOpen={sidebarOpen} />
      </div>
      <div className="flex-1 overflow-auto">
        <Navbar toggleSidebar={toggleSidebar} />
     
    <Routes>
      {/* <Navbar /> */}
    <Route path ='/' element = {<Paper />} />
      <Route path ='/paper' element = {<Paper/>} />
      <Route path ='/form' element = {<Form/>} />
    </Routes>
    </div>
    </div>
</>
  );
};
export default App;
