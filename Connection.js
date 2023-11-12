
const mongoose = require('mongoose');

const connect = ()=>{
     mongoose.connect(process.env.mongo_url).then(()=>{
        console.log('connection successfull')
     }).catch((err)=>{
        console.log(err)
     })
};

module.exports = connect