import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Login = () => {

    const navigate = useNavigate();

    const [email , setemail] = useState();
    const [password , setpassword] = useState();

    const obj = {email, password};

    const handleSubmit = async(e)=>{
        e.preventDefault();
        let loginUser = await fetch('http://localhost:4000/login/user', {
            method:'post',
            body:JSON.stringify(obj),
            headers:{
                'Content-Type':'application/json'
            }
        });
        loginUser = await loginUser.json();
        localStorage.setItem('user' , JSON.stringify(loginUser.user));
        localStorage.setItem('token' , JSON.stringify(loginUser.Token));
        if(loginUser.Token){
            alert('Login successfully');
            navigate('/product')
        }else{
            alert(loginUser.msg)
        }
        
    }

  return (
    <div className='w-full'>
        <div className='md:w-[800px] md:h-[500px] border md:flex shadow-lg mx-auto md:mt-20 m-3'>
          <div className='md:w-[60%]'>
            <img className='h-full  object-cover' src="https://images.unsplash.com/photo-1529539795054-3c162aab037a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bG9naW58ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60" alt="" />
          </div>

          <div className='md:w-[40%] h-full'>
            <form onSubmit={handleSubmit} className='p-3 w-full'>
                <h1 className='font-bold py-5 text-center font-[poppins] text-xl'>Login</h1>
                <div className='py-2'> 
                    <input onChange={(e)=>setemail(e.target.value)} type="text" className='outline-none p-2 border-b w-full' placeholder='Enter email' />
                </div>
                <div className='py-3'> 
                    <input onChange={(e)=>setpassword(e.target.value)} type="text" className='outline-none p-2 border-b w-full' placeholder='Enter password' />
                </div>

                <div className='py-8 p-1'>
                    <button type='submit' className='px-4 py-1 rounded w-full bg-green-500 hover:bg-green-600 duration-300 text-white font-bold'>Submit</button>
                </div>

                <div className='flex gap-1 w-[140px]  mx-auto font-[poppins]'>
                    <p className='text-center'>Not a user ?</p>
                    <Link to={'/register'}><p className='text-blue-500 underline'>Register</p></Link>
                </div>
            </form>
          </div>
        </div>
    </div>
  )
}

export default Login