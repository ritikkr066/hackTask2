import React from 'react';
import { Link } from 'react-router-dom';

const Firstpage = () => {
  return (
    <>
      <div className='flex flex-col items-center justify-center h-screen bg-slate-100 '>
         <div className='flex flex-col my-5 text-5xl font-bold text-blue-800'>WELCOME TO HACKSLACH</div>
        {/* <div className='text-3xl font-semibold text-blue-400'>TEAM 405 FOUND</div>  */}
       <div className='flex flex-row'> <Link to ="/register"><button
        
        className="w-full p-2 text-black bg-blue-500 rounded "
      >
      Sign Up
      </button></Link>
      <Link to ="/login"><button
        
        className="w-full p-2 mx-6 text-black bg-green-500 rounded "
      >
     Login
      </button></Link>
      </div>
      </div>
    </>
  );
}

export default Firstpage ;
