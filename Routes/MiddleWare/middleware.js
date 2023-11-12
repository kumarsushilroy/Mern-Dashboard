
const jwt = require('jsonwebtoken')
module.exports = (req,res,next)=>{
    const token = req.headers['authorization'].split(' ')[1];
    jwt.verify(token, process.env.SECRET_KEY, (error, decode)=>{
        if(error){
          return res.status(401).send({
            success:false,
            msg:'error while verifying token',
            error
           })
        }else{
             req.body.userId = decode.id;
            // next();
        }
    })
}