
const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors')
dotenv.config();

// Routes
const userRoute = require('./Routes/UserRoute');
const productRoute = require('./Routes/ProductRoute');

const app = express();

// For Connection
const connect = require('./Connection');

//Middle Ware
app.use(express.json());
app.use(cors());

//Route
app.use(userRoute);
app.use(productRoute);



const PORT = process.env.PORT || 4000



// app.get('/get',(req,res)=>{
//     res.send({msg:'true'})
// })

app.listen(PORT, ()=>{
    console.log(`server is running on port ${PORT}`)
    connect();
})