import React from "react";
import { AiOutlineClose,AiOutlineHome } from "react-icons/ai";
import {Link,NavLink} from 'react-router-dom'
import {MdOutlineKeyboardArrowDown ,MdOutlineKeyboardArrowUp}from "react-icons/md";
import { useState } from "react";



const Sidebar = ({ toggleSidebar, sidebarOpen }) => {
  const [toggle,setToggle]=useState(true);
  return (
    <div className="shodow-xl bg-blue text-white h-screen overflow-auto">
      <div className="flex justify-between items-center mb-2 p-3">
        <div>
          {sidebarOpen && (
            <h1 className="text-2xl font-bold pl-4 inline">Admin</h1>
          )}
        </div>
        {!sidebarOpen && (
          <span onClick={toggleSidebar}>
             {/* <AiOutlineClose/> */}
          </span>
        )}
        <span className="block lg:hidden" onClick={toggleSidebar}>
        
          <AiOutlineClose />
        </span>
      </div>
      <div className="mt-2 p-3 ">
          {/* Category route  */}
          <div className="bg-white text-blue font-bold py-2 px-3 mb-2  rounded flex space-x-4 items-center">
          <span>
             {/* icon */}
             <AiOutlineHome/>
      
               </span>
               <NavLink exact activeClassName="active" to ="/">
               <span>Profile</span>
               </NavLink>
               <hr />
          </div>
        {/* home route  */}
        <div  className='bg-white text-blue font-bold py-2 space-x-4 items-center px-3 mb-2 rounded '>
        <div className=" space-x-4 flex  ">
          {/* icon */}
          <span>
          <AiOutlineHome/>
          </span>
          <NavLink exact activeClassName="active" to ="/">
               <span>User</span>
               </NavLink>
           {toggle ?( 
          <span className='pl-28 text-2xl '>
            <MdOutlineKeyboardArrowUp 
             onClick={()=>setToggle(!toggle)}/></span>) :(
          <span className='pl-28 text-2xl'><MdOutlineKeyboardArrowDown  onClick={()=>setToggle(!toggle)}/></span>
          )  }
        </div>
        {toggle &&(
        <div className=''>
               <h1>Add</h1>
               <h1>List</h1>
               </div>

               )}
               </div>
        
          
            {/* Book route  */}
          <div className="bg-white text-blue font-bold py-2 px-3 mb-2  rounded flex space-x-4 items-center">
          <span>
             {/* icon */}
             <AiOutlineHome/>
               </span>
               <Link to="/paper">
               <span>Book</span>
               </Link>
          </div>
             {/* Setting route  */}
             <div className="bg-white text-blue font-bold py-2 px-3 mb-2  rounded flex space-x-4 items-center">
          <span>
             {/* icon */}
             <AiOutlineHome/>
               </span>
               <Link to="/paper">
               <span>Setting</span>
               </Link>
          </div>
      </div>
    </div>
  );
};
export default Sidebar;
