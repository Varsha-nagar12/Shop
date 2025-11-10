import { Route, Routes } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import About from "./About";
import Chocolate from "./Chocolate";
import Contact from "./Contact";

export default function App()
{
  return <>
     <Header/>
   
<Routes>
  <Route path="/" element={<Home/>}></Route>
  <Route path="/about" element={<About/>}></Route>
  <Route path="/chocolte" element={<Chocolate/>}></Route>
  <Route path="/contact" element={<Contact/>}></Route>
</Routes>
  </>
}
