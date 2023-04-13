import Headphone from "./views/Headphone"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./views/Home";
import Register from "./views/Register";
import Login from "./views/Login";
import Bill from "./views/Bill";
import Cart from "./views/Cart";

function App() {


  return (
    <div className="App flex flex-col">
      <BrowserRouter>
     
        <Routes>
        <Route exact path="/" element={<Home/>}></Route>
        <Route exact path="/product/:id" element={<Headphone/>}></Route>
        <Route exact path="/register" element={<Register/>}></Route>
        <Route exact path="/login" element={<Login/>}></Route>
        <Route exact path="/bill" element={<Bill/>}></Route>
        <Route exact path="/cart" element={<Cart/>}></Route>
        
       
       </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
