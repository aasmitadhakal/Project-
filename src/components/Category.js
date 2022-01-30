import React from 'react';

function Category() {
  return (


<>
    <div className="flex flex-col w-full sm:m-3 shadow-md p-2 rounded">
      <div className="w-1/2 md:w-full items-center">
        <form className="p-2 w-full" action="#" method="post">
          <legend className="text-xl text-grey-700 font-bold mb-5 w-full">Category</legend>

          <div className='flex items-center px-1 sm:px-3 sm:w-16'>
            <label for='name' className="inline-block font-medium mr-1 sm:mr-5 tracking-wider text-grey-800">Name:</label>
            <input id='name' type="text" className="flex-3 bg-gray-200 appearance-none border-2 border-gray-200 rounded w-half py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"/>
            <button className="ml-3 lg:w-1/8 sm:w-1/8 block bg-blue-800 p-2 rounded hover:bg-blue-600 text-white">Save</button>
            
  </div>
        </form>
      </div>
      <hr className="my-3" />
      <div class="table w-full px-3">
        <table class="w-full border">
          <thead>
            <tr class="bg-gray-50 border-b font-semibold">

              <th class="p-2 border-r text-sm text-gray-500">
                <div class="flex items-center justify-center">
                  ID
                  </div>
                  </th>

                  <th class="p-2 border-r text-sm text-gray-500">
                    <div class="flex items-center justify-center">
                      Name
                      </div>
                      </th>

                      <th class="p-2 border-r text-sm text-gray-500">
                        <div class="flex items-center justify center">
                          Action
                          </div>
                          </th>
                          
            </tr>
                          </thead>

                          <tbody>
                            <tr class="bg-gray-100 text-center border-b text-sm text-gray-600">
                              <td class="p-2 border-r">1</td>
                              <td class="p-2 border-r">Sample Category</td>
                              <td className="flex w-full mx-3 justify-center gap-2">
                                <a href="#" class="bg-blue-800 block p-2 text-white hover:shadow-lg bg-red-600">Add</a>
                                <a href="#" class="bg-blue-800 block p-2 text-white hover:shadow-lg bg-red-600">Remove</a>
                                </td>
                            </tr>
                                </tbody>


                                <tbody>
                            <tr class="bg-gray-100 text-center border-b text-sm text-gray-600">
                              <td class="p-2 border-r">2</td>
                              <td class="p-2 border-r">Sample Category</td>
                              <td className="flex w-full mx-3 justify-center gap-2">
                                <a href="#" class="bg-blue-800 block p-2 text-white hover:shadow-lg bg-red-600">Add</a>
                                <a href="#" class="bg-blue-800 block p-2 text-white hover:shadow-lg bg-red-600">Remove</a>
                                </td>
                            </tr>
                                </tbody>

                                <tbody>
                            <tr class="bg-gray-100 text-center border-b text-sm text-gray-600">
                              <td class="p-2 border-r">3</td>
                              <td class="p-2 border-r">Sample Category</td>
                              <td className="flex w-full mx-3 justify-center gap-2">
                                <a href="#" class="bg-blue-800 block p-2 text-white hover:shadow-lg bg-red-600">Add</a>
                                <a href="#" class="bg-blue-800 block p-2 text-white hover:shadow-lg bg-red-600">Remove</a>
                                </td>
                            </tr>
                                </tbody>

                                <tbody>
                            <tr class="bg-gray-100 text-center border-b text-sm text-gray-600">
                              <td class="p-2 border-r">4</td>
                              <td class="p-2 border-r">Sample Category</td>
                              <td className="flex w-full mx-3 justify-center gap-2">
                                <a href="#" class="bg-blue-800 block p-2 text-white hover:shadow-lg bg-red-600">Add</a>
                                <a href="#" class="bg-blue-800 block p-2 text-white hover:shadow-lg bg-red-600">Remove</a>
                                </td>
                            </tr>
                                </tbody>



        </table>

      </div>
    </div>
    </>
  );
  
}

export default Category;
