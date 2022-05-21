// App JS Added


import logo from './logo.svg';
import './App.css';
import Header from './Components/Shared/Headers/Header';
import Footer from './Components/Shared/Footer/Footer';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/AllPages/Home/Home';
import Login from './Components/Authentication/Login';
import Register from './Components/Authentication/Register/Register';
import Products from './Components/Products/Products';
import AddNewProduct from './Components/AddNewProduct/AddNewProduct';
import Inventory from './Components/Inventory/Inventory';
import ManageInventory from './Components/ManageInventory/ManageInventory';
import RequireAuth from './Components/RequireAuth/RequireAuth';
import MyItems from './Components/MyItems/MyItems';
import NotFound from './Components/NotFound/NotFound';
import Blog from './Components/Blog/Blog';
import About from './Components/About/About';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/products' element={<Products></Products>}></Route>
        <Route path='addproduct' element={<AddNewProduct></AddNewProduct>}></Route>
        <Route path='/myitems' element={<MyItems></MyItems>}></Route>
        <Route path='/product/:productId' element={
          <RequireAuth>
            <Inventory></Inventory>
          </RequireAuth>
        }></Route>

        <Route path='manageinventory' element={
          <RequireAuth>
            <ManageInventory>
            </ManageInventory>
          </RequireAuth>
        }> </Route>

        <Route path='/blog' element={
          <RequireAuth>
            <Blog></Blog>
          </RequireAuth>
        }>
        </Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/*' element={<NotFound></NotFound>}></Route>

      </Routes>

      <Footer></Footer>
    </div>
  );
}

export default App;
