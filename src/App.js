
import './App.css';
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Header from './Components/Header';
import Footer from './Components/Footer';
import Home from './Components/Home';
import SingleProduct from './Components/SingleProduct';
import Category from './Components/Category/Category';
import React from "react";
import AppContext from './utils/Context';
import Products from './Components/Products';
import CategoryHead from './Components/Category';


function App() {
  return (
     <BrowserRouter>
     <AppContext>
      <Header/>
       <Routes>
           <Route path='/' element={<Home/>} />
           <Route path='/' element={<Footer/>} />
           <Route path='/product/:id' element={<SingleProduct/>} />
           <Route path='/category/:id' element={<Category/>} />
           <Route path='/category' element={<Category/>} />
           <Route path='/products' element={<Products/>} />
           

       </Routes>
       </AppContext>
       
     
     </BrowserRouter>
  )

};


export default App;
