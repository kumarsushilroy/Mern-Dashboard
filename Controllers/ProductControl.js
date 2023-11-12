const productModel = require('../Models/ProductModel') 

const createProduct = async (req,res)=>{
    try {
        const {productname, productimage, category, price, company} = req.body;
        if(!productname || !productimage || !category || !price || !company){
            return res.status(401).send({
                success:false,
                msg:'all fields require !'
            })
        }
        const makeProduct = new productModel({productname, productimage, category, price, company});
        const newProduct = await makeProduct.save();
        return res.status(201).send({
            success:true,
            msg:'product created !',
            newProduct
        });

    } catch (error) {
        console.log(error);
        res.status(404).send({
            success:false,
            msg:'something went wrong !',
            error
        })
    }
};

// Get AllProducts
const getallProducts = async (req,res)=>{
    try {
        const getAllProducts = await productModel.find({});
        return res.status(201).send({
            success:true,
            msg:'got all products !',
            getAllProducts
        })
    } catch (error) {
        console.log(error);
       res.status({
        success:false,
        msg:'somthing went wrong !',
        error
       })
    }

}

// Get single Product
const getsingleProduct = async (req,res)=>{
  try {
    const id = req.params.id;
    const getSinglePrdct = await productModel.findById(id);
    res.status(201).send({
        success:true,
        msg:'got single product !',
        getSinglePrdct
    })

  } catch (error) {
    console.log(error);
    res.status(404).send({
        success:false,
        msg:'something went wrong !',
        error
    })
  }
};


// update product
const updateProduct = async (req,res)=>{
  try {
    const id = req.params.id;
    const editProduct = await productModel.findByIdAndUpdate({_id:id}, req.body, {new:true});
    return res.status(201).send({
        success:false,
        msg:'updated success !',
        editProduct
    });
  } catch (error) {
    console.log(error);
    res.status(404).send({
        success:false,
        msg:'something went wrong !',
        error
    })
  }
}

// Delete product
const deleteProduct = async (req,res)=>{
   try {
    const id = req.params.id;
      const deleteproducts = await productModel.findByIdAndDelete(id);
      return res.status(201).send({
        success:true,
        msg:'product deleted !',
        deleteproducts
      })
   } catch (error) {
     console.log(error);
     res.status(401).send({ 
        success:false,
        msg:'something went wrong !',
        error
     })
   }
}


module.exports = {createProduct, getallProducts, getsingleProduct, updateProduct, deleteProduct};