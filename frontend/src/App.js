import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from './components/NavBar';
import Home from "./components/Home.js";
import AddProduct from "./components/AddProduct.js"
import AddStatus from './components/AddStatus';
import Tracking from './components/Tracking';



function App() {

  return (

    <div className="app">

      <div id="routes">
      <BrowserRouter>
      <NavBar/>
      
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/หน้าหลัก" element={<Home/>} />
          <Route path="/เพิ่มวัคซีน" element={<AddProduct/>} />
          <Route path="/เพิ่มสถานะ" element={<AddStatus/>} />
          <Route path="/ติดตามวัคซีน" element={<Tracking/>} />


        </Routes>
      </BrowserRouter>
      </div>
    </div>
  );
}

export default App;