import React from 'react';
const Sidebar = ({sidebarOpen,closeSidebar}) => {
    return(
        
            <div className='bg-gray-700 text-white   p-3'>
            <div className='flex justify-between items-center mb-2'>
                <div>
                <h1 className='text-xl inline'>School Managment  Project </h1>
                </div>
                <svg onClick={() => closeSidebar()} xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                 <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" /></svg>
            </div>
            <div className=' h-114  sidebar__menu h-300 overflow-auto'>
              
               <div className='flex pb-4 text-xl px-8 p-1 sidebar__link'>
               <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
               <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
               </svg>
               <a href='#'>Home </a>
               </div>
               <div className=' flex pb-4 text-xl px-8 p-1 sidebar__link'>
               <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
               <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
               <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
               </svg>
               <a href='#'>setting </a>
               </div>
               <div className=' flex  text-xl px-8 p-1 sidebar__link'>
               <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
               <a href='#'>Contact </a>
               </div>
               <div className='px-2 py-2'>
               <div className='pl-5 pt-4 pb-4 '>
                   <a href ="#">Component1</a>
               </div>
               <div className='pl-5 pt-4 pb-4 sidebar__link'>
                   <a href ="#">Component 2</a>
               </div>

               <div className='pl-5 pt-4 pb-4 sidebar__link'>
                   <a href ="#">Component 3</a>
               </div>

               <div className='pl-5 pt-4 pb-4 sidebar__link'>
                   <a href ="#">Component 4</a>
               </div>
             

               <div className='pl-5 pt-4 pb-4  sidebar__link'>
                   <a href ="#">Component 5</a>
               </div>
               </div>
               <h1 className='text-2xl'>second</h1>
               <div className='px-2 py-2 pl-5'>
               <div className='pt-4 pb-4 sidebar__link'>
                   <a href ="#">Component1</a>
               </div>
               <div className='pt-4 pb-4 sidebar__link'>
                   <a href ="#">Component 2</a>
               </div>
               <div className='pt-4 pb-4 sidebar__link'>
                   <a href ="#">Component 3</a>
               </div>
               <div className='pt-4 pb-4 sidebar__link'>
                   <a href ="#">Component 4</a>
               </div>
               </div>
               
             
            </div>
            
            </div>
    )
}
export default Sidebar;