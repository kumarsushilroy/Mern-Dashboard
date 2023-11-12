import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
const Viewproduct = () => {
    const params = useParams();
    const paramsId = params.id;

    const [view, setview] = useState();
    
    useEffect(()=>{
       const getSingleData = async()=>{
           let getSingle = await fetch(`http://localhost:4000/get/single/product/${paramsId}`,{
            method:'get',
            headers:{
                'Content-Type':'application/json'
            }
           });
           getSingle = await getSingle.json();
        //    console.log(getSingle);
           setview(getSingle.getSinglePrdct);
           console.log(view)
       }
       getSingleData();
    },[])
  return (
    <div>
        <div className='md:w-[800px] mx-auto border p-3 flex mt-20 shadow-lg'>
          <div className='md:w-[70%]'>
            <img src={view ? view.productimage:''} alt="" />
          </div>

          <div className=' p-3 md:w-[30%]'>
            <h1 className='font-bold py-3'>ProductName:  {view ? view.productname : ''}</h1>
            <h1 className='font-bold py-3'>Category:  {view? view.category: ''}</h1>
            <h1 className='font-bold py-3'>Company:  {view?view.company:''}</h1>
            <h1 className='font-bold py-3'>Price:  {view?view.price :''}</h1>

           <Link to={'/product'}><button className='border mt-6 bg-purple-500 hover:bg-purple-600 duration-300 text-white font-bold px-7 py-1 rounded'>←Back</button></Link> 
          </div>
        </div>
    </div>
  )
}

export default Viewproduct