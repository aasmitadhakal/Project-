import React from "react";
const Sidebar = ({ toggleSidebar, sidebarOpen }) => {
  return (
    <div className="bg-gray-700 text-white h-screen overflow-auto">
      <div className="flex justify-between items-center mb-2 p-3">
        <div>
          {sidebarOpen && (
            <h1 className="text-xl inline">School Managment Project </h1>
          )}
        </div>
        {!sidebarOpen && (
          <span onClick={toggleSidebar}>
            <svg
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
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </span>
        )}
        <span className="block lg:hidden" onClick={toggleSidebar}>
          <svg
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
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </span>
      </div>
      <div className="mt-5 p-3">
        {/* home route  */}
        <div className="bg-gray-800 py-2 px-3 rounded flex space-x-4 items-center">
          {/* icon */}
          <span>
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
              />
            </svg>
          </span>
          <span>Home</span>
        </div>
      </div>
    </div>
  );
};
export default Sidebar;
