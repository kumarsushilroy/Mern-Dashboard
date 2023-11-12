
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Register = () => {
const navigate = useNavigate();
 const [username, setusername] = useState();
 const [email , setemail] = useState();
 const [password , setpassword] = useState();

 const obj = {username, email, password};

 const handleSubmit = async(e)=>{
    e.preventDefault();
    let postUser = await fetch('http://localhost:4000/create/user',{
        method:'post',
        body:JSON.stringify(obj),
        headers:{
            'Content-Type':'application/json'
        }
    });
    postUser = await postUser.json();
    
    localStorage.setItem('user' , JSON.stringify(postUser.newUser));
        localStorage.setItem('token' , JSON.stringify(postUser.Token));
    
        if(postUser.Token){
           alert('Register Successfully');
           navigate('/')
        }else{
            alert(postUser.msg);
        }
 }

  return (
    <div className='w-full'>
       <div className='md:w-[800px] md:h-[450px] border mx-auto md:mt-20 shadow-lg md:flex m-1'>
            <div className='md:w-[60%]'>
                <img className='h-full w-full object-cover' src="https://media.istockphoto.com/id/1360520603/photo/busines-using-a-computer-select-the-icon-security-on-the-virtual-display-to-data-protection.webp?b=1&s=170667a&w=0&k=20&c=dOCvmeutzDoUoEYGjmlvw8nfX2dbbPLvrZC8t2Kh6oA=" alt="" />
            </div>

            <div className=' md:w-[40%] h-full border'>
                <form onSubmit={handleSubmit} className='h-full p-2'>
                    <h1 className='text-center py-3 font-bold text-xl'>Register</h1>
                    <div className='pt-4'>
                        <input onChange={(e)=>setusername(e.target.value)} type="text" className='border-b outline-none w-full p-2' placeholder='Enter username' />
                    </div>
                    <div className='pt-4'>
                        <input onChange={(e)=>setemail(e.target.value)} type="text" className='border-b outline-none w-full p-2' placeholder='Enter email' />
                    </div>
                    <div className='pt-4'>
                        <input onChange={(e)=>setpassword(e.target.value)} type="text" className='border-b outline-none w-full p-2' placeholder='Enter password' />
                    </div>

                    <div className='pt-7 p-1 '>
                        <button type='submit' className='border w-full hover:bg-green-600 duration-300 bg-green-500 text-white font-bold px-4 rounded py-1 mt-2'>Submit</button>
                    </div>

                    <div className='flex gap-1 w-[140px] mt-8 mx-auto font-[poppins]'>
                    <p className='text-center'>Already user ?</p>
                    <Link to={'/'}><p className='text-blue-500 underline'>Login</p></Link>
                </div>
                </form>
            </div>
       </div>
    </div>
  )
}

export default Register