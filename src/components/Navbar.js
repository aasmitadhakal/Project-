import React from "react";
const Navbar = ({ toggleSidebar }) => {
  return (
    <nav className="bg-white m-2 flex justify-between ">
      <div className="flex ">
        <span onClick={toggleSidebar}>
<<<<<<< HEAD
<<<<<<< HEAD
        <svg className="w-6 h-6"
         fill="none" 
         stroke="currentColor"
          viewBox="0 0 24 24"
           xmlns="http://www.w3.org/2000/svg">
             <path strokeLinecap="round"
              strokeLinejoin="round" 
              strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
=======
=======
>>>>>>> 4845700be8565c2486aa5352f6d372012a4f23a9
          <svg
            className="stroke-cyan-500 pr-4"
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
<<<<<<< HEAD
>>>>>>> 4845700be8565c2486aa5352f6d372012a4f23a9
=======
>>>>>>> 4845700be8565c2486aa5352f6d372012a4f23a9
        </span>
        <input
          className=" pr-2 ml-2 mr-2 rounded-xl  border-none placeholder-gray-500 text-black ring-2 ring-gray-300 focus:ring-gray-500 focus-ring-2  "
          type="text"
          name="search"
          placeholder="Search talk"
          autoComplete="off"
          aria-label="Search talk"
        ></input>
        <button className="bg-blue-800 px-4 p-1  text-white rounded-full ">
          Search
        </button>
      </div>
      <div className="">
        <button className="bg-blue-800 rounded-full px-5 p-1 text-white  justify-end ">
          Login
        </button>
      </div>
    </nav>
  );
};
export default Navbar;
