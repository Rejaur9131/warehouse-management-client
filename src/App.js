import { Route, Routes } from 'react-router-dom';
import './App.css';

import Home from './Pages/Home/Home/Home';
import About from './Pages/About/About';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import Header from './Pages/Shared/Header/Header';
import RequireAuth from './Pages/Login/RequireAuth/RequireAuth';
import Footer from './Pages/Shared/Footer/Footer';
import Blogs from './Pages/Blogs/Blogs';
import ManageInventories from './Pages/ManageInventories/ManageInventories';
import InventoryItemDetails from './Pages/InventoryItemDetails/InventoryItemDetails';

function App() {
  return (
    <div className="App">
      <Header></Header>
      {/* <h1 className="text-3xl mt-2 text-slate-600 font-bold">Welcome to My Furniture Warehouse</h1> */}
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/blogs" element={<Blogs></Blogs>}></Route>
        <Route path="/inventoryitems" element={<ManageInventories></ManageInventories>}></Route>
        <Route path="/inventoryitems/:itemsId" element={<InventoryItemDetails></InventoryItemDetails>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
      </Routes>

      <Footer></Footer>
    </div>
  );
}

export default App;
