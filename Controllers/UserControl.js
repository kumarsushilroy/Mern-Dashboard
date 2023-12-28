
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const userModel = require('../Models/UserModel');

//CREATE USER...............
const createUser = async(req,res)=>{
  try {
    const {username, email, password} = req.body;
     if(!username || !email || !password){
        return res.status(401).send({
            success:false,
            msg:'all fields require !'
        })
     }

     const existingUser = await userModel.findOne({email});
     if(existingUser){
        return res.status(401).send({
            success:false,
            msg:'user already exists !'
        })
     }


     // Password Hashing
    const salt = await bcrypt.genSalt(10)
    const hashPass = await bcrypt.hash(password, salt);

     const user = new userModel({username, email, password:hashPass});
     const newUser = await user.save();

    //  return res.status(201).send({
    //     success:true,
    //     msg:'Register Successfull',
    //     newUser 
    //  })

    const token = jwt.sign({id:user._id}, process.env.SECRET_KEY, {expiresIn:'1d'}, (error, token)=>{
        if(error){
            res.status(401).send({
               success:false,
               msg:'error while generating token',
               error
            })
        }else{
            return res.status(201).send({
                success:true,
                msg:'Register success',
                newUser,
                Token:token
            })
        }
     })

  } catch (error) {
    console.log(error),
    res.status(404).status({
        success:false,
        msg:'something went wrong !',
        error
    })
  }
}



const getAllUser = async(req,res)=>{
  try {
    const users = await userModel.find({});
    res.status(201).send({
        success:false,
        msg:'got all users',
        users
    });
  } catch (error) {
    console.log(error);
    res.status(404).send({
        success:false,
        msg:'something went wrong !'
    })
  }
}

//Login User..............
const loginUser = async(req,res)=>{
   try {
    const {email , password} = req.body;
    if(!email, !password){
        return res.status(401).send({
            success:false,
            msg:'all fields require !'
        })
    }

    const user = await userModel.findOne({email});
    if(!user){
        return res.status(401).send({
            success:false,
            msg:'user not exists !'
        })
    }

    const validPassword = await bcrypt.compare(password, user.password);
    if(!validPassword){
        return res.status(401).send({
            success:false,
            msg:'please enter valid password !',
        })
    }

     const token = jwt.sign({id:user._id}, process.env.SECRET_KEY, {expiresIn:'1d'}, (error, token)=>{
        if(error){
            res.status(401).send({
               success:false,
               msg:'error while generating token',
               error
            })
        }else{
            return res.status(201).send({
                success:true,
                msg:'login success',
                user,
                Token:token
            })
        }
     })
     
       
    



   } catch (error) {
    console.log(error);
    res.status({
        success:false,
        msg:'something went wrong !',
        error
    })
   }
}


module.exports = {createUser, getAllUser, loginUser};