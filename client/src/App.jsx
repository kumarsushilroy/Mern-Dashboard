import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Register from "./Pages/Register";
import Login from './Pages/Login';
import Products from './Pages/Products';
import Navbar from './Component/Navbar';
import AddProduct from './Pages/AddProduct';
import Viewproduct from './Pages/Viewproduct';
import Editproduct from './Pages/Editproduct';

function App() {
  
  return (
    <div>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Login/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/product' element={<Products/>}/>
      <Route path='/addproduct' element={<AddProduct/>}/>
      <Route path='/view/:id' element={<Viewproduct/>}/>
      <Route path='/edit/:id' element={<Editproduct/>}/>
      
    </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App
