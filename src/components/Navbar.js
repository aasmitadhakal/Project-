import React from 'react';
const Navbar =({ sidebarOpen,openSidebar }) =>{
  return(
    <nav className='bg-white m-2 flex justify-between '>
     <div className='flex '>
      <svg className='stroke-cyan-500 pr-4' onClick={() => openSidebar()} xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" /></svg>
     
       <input className=' pr-2 ml-2 mr-2 rounded-xl  border-none placeholder-gray-500 text-black ring-2 ring-gray-300 focus:ring-gray-500 focus-ring-2  '
       type="text"
       name="search"
       placeholder="Search talk"
       autocomplete ="off"
       aria-label="Search talk"
       ></input>
       <bottom className='bg-blue-800 px-4 p-1  text-white rounded-full '>Search</bottom>
      </div>
        <div className=''>
        <bottom className='bg-blue-800 rounded-full px-5 p-1 text-white  justify-end '>Login</bottom>
        </div>
    </nav>
  )
}
export default Navbar;