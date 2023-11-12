import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Editproduct = () => {

    const navigate = useNavigate();
    const params = useParams();
    const paramsId = params.id;

    const [productname, setproductname] = useState();
    const [productimage, setproductimage] = useState();
    const [category, setcategory] = useState();
    const [company, setcompany] = useState();
    const [price, setprice] = useState();

    const updatedObj = {productname, productimage, category, company, price}
    useEffect(()=>{
       const fetchSingle = async ()=>{
        let getSingle = await fetch(`http://localhost:4000/get/single/product/${paramsId}`, {
            method:'get',
            headers:{
                'Content-Type':'application/json'
            }
        });
        getSingle = await getSingle.json();
        console.log(getSingle.getSinglePrdct)
        setproductname(getSingle.getSinglePrdct.productname);
        setproductimage(getSingle.getSinglePrdct.productimage);
        setcategory(getSingle.getSinglePrdct.category);
        setcompany(getSingle.getSinglePrdct.company);
        setprice(getSingle.getSinglePrdct.price);
       };
       fetchSingle();

    },[])

    const handleSubmit = async(e)=>{
       e.preventDefault();
       let update = await fetch(`http://localhost:4000/update/product/${paramsId}`, {
        method:'put',
        body:JSON.stringify(updatedObj),
        headers:{
            'Content-Type':'application/json'
        }
       });
       update = await update.json();
       alert('updated successfully');
       navigate('/product');
    }
  return (
    <div className='w-full'>
        <div className="md:w-[700px] mt-20 mx-auto p-2 shadow-lg border m-2">
       <Link to={'/product'}> <button className="border py-1 px-5 rounded bg-purple-500 hover:bg-purple-600 duration-300 text-white">←Back</button> </Link>
        <form onSubmit={handleSubmit} className="p-3">
            <h1 className="text-center py-5 text-xl font-bold">Edit Product</h1>
          <div className="flex justify-between gap-3">
            <div className="w-full">
              <label className="block" htmlFor="">
                Product Name
              </label>
              <input value={productname} onChange={(e)=>setproductname(e.target.value)} type="text" className="outline-none border w-full p-1 rounded" />
            </div>

            <div className="w-full">
              <label className="block" htmlFor="">
                Company
              </label>
              <select value={company} onChange={(e)=>setcompany(e.target.value)} className="w-full border p-1 rounded outline-none">
                <option className="w-full" value="">
                  select
                </option>
                <option className="w-full" value="nestle">
                  Nestle
                </option>
                <option className="w-full" value="oppo">
                  Oppo
                </option>
                <option className="w-full" value="reymond">
                  Reymond
                </option>
                <option className="w-full" value="tata">
                  Tata
                </option>
              </select>
            </div>
          </div>

          <div className="flex justify-between gap-3 mt-8">
            <div className="w-full">
              <label className="block" htmlFor="">
                Price
              </label>
              <input value={price} onChange={(e)=>setprice(e.target.value)} type="number" className="outline-none border w-full p-1 rounded" />
            </div>

            <div className="w-full">
               <label htmlFor="" className="block">Image</label>
               <input value={productimage} onChange={(e)=>setproductimage(e.target.value)} type="text" className="w-full outline-none border p-1 rounded" />
            </div>

            <div className="w-full">
              <label className="block" htmlFor="">
                Category
              </label>
              <select value={category} onChange={(e)=>setcategory(e.target.value)} className="w-full border p-1 rounded outline-none">
                <option className="w-full" value="">
                  select
                </option>
                <option className="w-full" value="grocery">
                  Grocery
                </option>
                <option className="w-full" value="cloth">
                  Cloth
                </option>
                <option className="w-full" value="electronics">
                  Electronics
                </option>
                <option className="w-full" value="toys">
                  Toys
                </option>
              </select>
            </div>
          </div>

          <div>
            <button className="border px-5 rounded py-1 bg-green-500 text-white font-bold mt-3 hover:bg-green-600 duration-300">Update</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Editproduct