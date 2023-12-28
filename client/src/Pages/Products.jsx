import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Products = () => {
  
  const navigate = useNavigate();
  const [data , setdata] = useState([]);
  const [searchData, setsearhData] = useState([]);
  

  //filter function
  const filtered = [...new Set(data.map((item)=> item.category))];
  // console.log(filtered)
 

  const filterbutton = (cat)=>{
    const filtering = data.filter((item)=> item.category === cat)
    setdata(filtering)
  }


  const getProducts = async ()=>{
    let getallProducts = await fetch('http://localhost:4000/get/all/products',{
      method:'get',
      headers:{
        'Content-Type':'application/json'
      }
    });
     getallProducts = await getallProducts.json();
    //  console.log(getallProducts);
    setdata(getallProducts.getAllProducts);
    setsearhData(getallProducts.getAllProducts)
    console.log(getallProducts.getAllProducts.category)
    
  }
  

  useEffect(()=>{
    getProducts();
  },[])

  const deleteProduct = async(dlt)=>{
     let deleted = await fetch(`http://localhost:4000/product/delete/${dlt}`, {
      method:'delete',
      headers:{
        'Content-Type':'application/json'
      }
     });
     deleted = await deleted.json();
     alert('deleted successfully')
     getProducts();
  }

  // SEARCH FUNCTION....................
  const handlesearch = (e)=>{
    const search = e.target.value;
    // console.log(search)
    if(search ===''){
      setdata(searchData)
    }else{
     const filterData = searchData.filter(item=> item.productname.toLowerCase().includes(search.toLowerCase()));
       setdata(filterData)
    }
  }

  return (
    <div>
        <div  className=' md:mt-10 md:w-[1400px] border w-full   mx-auto p-3 shadow-lg' >
          <div className='md:flex items-center'>
          <Link to={'/addproduct'}><button className='border px-5 py-1 bg-green-600 hover:bg-green-700 text-white font-bold rounded mb-2 duration-300'>Add+</button> </Link>
          <input type="text" onChange={handlesearch} placeholder='search products .......' className='md:max-w-[600px] w-full border-yellow-400 mx-auto px-4 py-1 mb-2 border outline-none rounded-full' />
          <div className='flex md:gap-3 gap-10'>
            {
              filtered.map((item)=>{
                return(
                  
                  
                   <button onClick={ ()=>filterbutton(item)} className='border px-3 rounded-full bg-gray-400 p-1 hover:bg-gray-500 text-white font-bold'>{item}</button>
                  
                  
                )
              })
            }
          </div>
          </div>
       <div className='mt-3' style={{overflowX:'scroll'}}>
          <table className='w-full p-5' >
            <thead className='w-full'>
              <tr className='border bg-yellow-500 '>
                <th>S.no</th>
                <th>ProductName</th>
                <th>ProductImage</th>
                <th>Category</th>
                <th>Company</th>
                <th>Price</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody className='w-full '>
              {
                data?.map((item,i)=>{
                  return(
                    <tr key={i} className='border'>
                      <td className='text-center'>{i+1}</td>
                <td className='text-center'>{item.productname}</td>
                <td className='items-center flex justify-center'><img className='w-[100px] object-cover rounded h-[40px]' src={item.productimage} alt="" /></td>
                <td className='text-center'>{item.category}</td>
                <td className='text-center'>{item.company}</td>
                <td className='text-center'>{item.price}</td>
                <td className='text-center flex justify-center'>
                 <Link to={`/view/${item._id}`}> <button className='bg-yellow-500 text-white hover:bg-yellow-600 duration-300 rounded border px-2'>view</button> </Link>
                 <Link to={`/edit/${item._id}`}> <button className='border mx-2 bg-green-500 hover:bg-green-600 duration-300 text-white rounded px-2'>edit</button> </Link>
                  <button onClick={()=>deleteProduct(item._id)} className='border bg-red-500 hover:bg-red-600 rounded text-white duration-300 px-2'>delete</button>
                </td>
              </tr>
                  )
                })
              }
              
            </tbody>
          </table>
          </div>
         
           
        </div>
    </div>
  )
}

export default Products