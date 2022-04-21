
import React,{useState} from 'react';
import Validation from './Validation'
const Form =()=>{
    const [values,setValues] = useState({
       Fullname:"",
       email:"",
       password:"",
 });
 const [errors,setErros] =useState({});
 const handleChange =(event)=>{
    setValues({
        ...values,
        [event.target.name]:event.target.value,
    }) ;
 }
 const handleForSubmit =(event) =>{
     event.preventDefault(event);
     setErros(Validation(values));
 };
 

return (
 <>
 <div className='min-h-screen flex items-center justify-center bg-blue-400'>
     {/* Sigin form */}
     <div className='bg-white p-16 roundend shadow-2xl '>
         <h2 className='text-3xl font-bold mb-10 text-gray-800 '>SigIn</h2>
         <form className='space-y-5 '>
          <div className=''>
           <label className='block mb-1 font-bold ' >Full Name</label>
          <input className='input w-full rounded outline-none border-2 border-gray-200 focus:border-purple-500 text-gray-500  p-3'
          placeholder='enter Full Name'
           type ="text" name='fullname'
            value={values.fullname}
                onChange={handleChange}>
            </input>
            {errors.fullname && <p className='error'>{errors.fullname}</p>}
          </div>
           <div>
          <label className='block mb-1 font-bold '>Email</label>
         <input className='input w-full rounded outline-none border-2 border-gray-200 focus:border-purple-500 text-gray-500  p-3'
          placeholder='Enter Email'
           type ="email"
            name='email' 
             value={values.email}
                 onChange={handleChange} >
            </input>
            {errors.email && <p className='error'>{errors.email}</p>}
        </div>
        <div>
          <label className='block mb-1 font-bold '>Password</label>
         <input className='input w-full rounded outline-none border-2 border-gray-200 focus:border-purple-500 text-gray-500  p-3'
          placeholder='Enter Email'
           type ="password"
            name='password' 
             value={values.password}
                 onChange={handleChange} >
            </input>
            {errors.password && <p className='error'>{errors.password}</p>}
        </div>
      
     <div>
     <input type="checkbox" id="agree"></input>
             <label form="agree" className='ml-2 text-gray-700 text-sm'>I agree to the terms and privacy</label>
     </div>
     
     <button className='block bg-yellow-600 hover:bg-purple-300 hover:text-purple-800 w-full p-4 rounded transition-duration-300'
       onClick={handleForSubmit}
     >Sign UP</button>
    </form>
     </div>
 </div>
 </>
)

};
export default Form