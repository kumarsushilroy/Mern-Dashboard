import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from 'axios';

const AddProduct = () => {

    const navigate = useNavigate();

    const [productname , setproductname] = useState();
    const [productimage , setproductimage] = useState();
    const [category , setcategory] = useState();
    const [company , setcompany] = useState();
    const [price , setprice] = useState();

    const obj = {productname, productimage, category, company, price}
    const photo = {productimage}

 const handleSubmit = async(e)=>{
    e.preventDefault();
   let addProduct = await fetch('http://localhost:4000/create/product', {
    method:'post',
    body:JSON.stringify(obj),
    headers:{
        'Content-Type':'application/json'
    }
   });
   addProduct = await addProduct.json();
   alert('product added successfully');
   navigate('/product')

  // const formData = new FormData();
  // formData.append('image', productimage)
  // const result = await axios.post('http://localhost:4000/create/product',
  // formData,
  // {
  //   headers:{'Content-Type' : 'multipart/form-data'}
  // }
  // )
 }

  return (
    <div>
      <div className="md:w-[700px] mt-20 mx-auto p-2 shadow-lg border m-2">
       <Link to={'/product'}> <button className="border py-1 px-5 rounded bg-purple-500 hover:bg-purple-600 duration-300 text-white">←Back</button> </Link>
        <form onSubmit={handleSubmit} className="p-3">
            <h1 className="text-center py-5 text-xl font-bold">Add Product</h1>
          <div className="flex justify-between gap-3">
            <div className="w-full">
              <label className="block" htmlFor="">
                Product Name
              </label>
              <input onChange={(e)=>setproductname(e.target.value)} type="text" className="outline-none border w-full p-1 rounded" />
            </div>

            <div className="w-full">
              <label className="block" htmlFor="">
                Company
              </label>
              <select onChange={(e)=>setcompany(e.target.value)} className="w-full border p-1 rounded outline-none">
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
              <input onChange={(e)=>setprice(e.target.value)} type="number" className="outline-none border w-full p-1 rounded" />
            </div>

            <div className="w-full">
               <label htmlFor="" className="block">Image</label>
               {/* <input  onChange={(e)=>setproductimage(e.target.files[0])} type="file" className="w-full outline-none border p-1 rounded" /> */}
               <input placeholder="enter url" className="border w-full outline-none p-1 rounded" onChange={(e)=>setproductimage(e.target.value)} type="text" />
            </div>

            <div className="w-full">
              <label className="block" htmlFor=""> 
                Category
              </label>
              <select onChange={(e)=>setcategory(e.target.value)} className="w-full border p-1 rounded outline-none">
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
            <button className="border px-5 rounded py-1 bg-green-500 text-white font-bold mt-3 hover:bg-green-600 duration-300">Add product</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
