import React from 'react';

function Paper() {
  return <>
  <h2 className=" md:item-none md:justify-left p-2 flex pl-5 font-bold  text-xl">Detail of the Paper</h2>
        <div className=" h-100  flex pl-5 ">
  
      <form className=" border-2 border-gray-600 p-6">
        <div>
      <label className="p-2 font-semibold pr-9 ">Paper Title:</label>
      <input className="border-2 border-gray-500  m-2 w-64 rounded text-lg" type="text" name ="paper title"></input>
      </div>
      <div>
      <label className="p-2 font-semibold pr-5">Published By:</label>
      <input className="border-2 border-gray-500 rounded m-2 w-64 " type="text" name ="Published By"></input>
      </div>
      <div>
      <label className="p-2 font-semibold  ">Published Date:</label>
      <input className="  roundedborder-2 border-gray-500 m-2 w-64 " type="date" name ="Published Date"></input>
      </div>
      <div>
      <label className="p-2 font-semibold pr-12">Category:</label>
      <select className="border-2 border-gray-500 m-2 w-64 rounded">	
				<option>Category1</option>
				<option>Category 2</option>
				<option>Category3</option>
				<option>Category4</option>
			</select>
      </div>
      <div>
      <label className="font-semibold p-2 pr-20">Link:</label>
      <input className="border-2  rounded border-gray-500 m-2 w-64 " type="text" name ="link"></input>
      </div>
      <div>
      <label className="p-2 font-semibold pr-4">Pdf/wordFile:</label>
      <input className="border-2 border-gray-500 m-2 w-64  rounded" type="text" name ="pdf"></input>
      </div>
      <div className='pl-72 pt-2'>
     <button className='bg-blue-900 rounded px-6 text-white '>Save</button>
     </div>
     </form>
    </div>
    
    
    
  </>;
}

export default Paper;
