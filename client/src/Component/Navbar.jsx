import React, { useEffect, useState } from 'react';
import {FaBars} from 'react-icons/fa';
import {AiOutlineClose} from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {

    const navigate = useNavigate();
 const [nav , setnav] = useState(false);
 const [users , setusers] = useState()

//  const user = JSON.parse(localStorage.getItem('user'));
//  const username = user.username;
 

 const logout = ()=>{
    localStorage.clear();
    navigate('/');
 }

  return (
    <div className=''> 
        <div className='flex items-center justify-between p-3 bg-purple-500 text-white font-bold m-1 rounded'>
            <h1>Logo</h1>
          
            <ul className='md:flex gap-3 hidden items-center'>
                <li>Home</li>
                <li>About</li>
                <li>services</li>
               <button onClick={logout} className='border px-3 py-1 rounded'>Logout</button>
            </ul>
          
            <div className='cursor-pointer md:hidden' onClick={(e)=>setnav(!nav)}>
             {
                !nav ? <FaBars/> : <AiOutlineClose/>
             }
            </div>

            <div className={nav ? 'fixed top-9 left-0 text-black mt-3 bg-gray-300 h-[200px] w-[200px] transition-all duration-500 ' : ' fixed left-[-100%]'}>
            <ul className='flex-col gap-3 p-4'>
                <li className='p-3 cursor-pointer hover:bg-white'>Home</li>
                <li className='p-3 cursor-pointer hover:bg-white'>About</li>
                <li className='p-3 cursor-pointer hover:bg-white'>services</li>
                
            </ul>
            </div>
        </div>
    </div>
  )
}

export default Navbar