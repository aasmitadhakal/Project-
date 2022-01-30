import React from "react";
import Paper from "./components/Paper";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Category from "./components/Category"
import { useState } from "react";
const App = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="flex justify-between h-screen overflow-y-hidden">
      <div
        className={`${
          sidebarOpen ? "w-72" : "w-0 lg:w-16"
        } transition-all duration-300 ease-in-out absolute lg:relative left-0 top-0`}
      >
        <Sidebar toggleSidebar={toggleSidebar} sidebarOpen={sidebarOpen} />
      </div>
      <div className="flex-1 overflow-auto">
        <Navbar toggleSidebar={toggleSidebar} />
        <Category />
        <Paper />
      
      </div>
    </div>
  );
};
export default App;
