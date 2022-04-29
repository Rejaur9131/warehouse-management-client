import { Route, Routes } from 'react-router-dom';
import './App.css';

import Home from './Pages/Home/Home/Home';
import About from './Pages/About/About';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import ShowUsers from './Pages/ShowUser/ShowUsers';

function App() {
  return (
    <div className="App">
      <h1>Welcome to my wareHouse</h1>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/user" element={<ShowUsers></ShowUsers>}></Route>
      </Routes>
    </div>
  );
}

export default App;
