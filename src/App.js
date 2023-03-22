
import './App.css';
import axios from "axios";
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
import useGetCategory from './hooks/useGetCategory';



function App() {

//   const [category,setCategory] = useState([]);
//   useEffect(()=>{

//     axios.get('http://localhost:1337/api/categories?populate=*').then((res) => {
      
//        setCategory(res.data.data)
//        console.log(res)
//     }).catch((err) =>{console.log(err)});

    
//  },[])
  
 const {data} = useGetCategory(`/api/categories?populate=*`)

  console.log(data.data)
  return (
     <BrowserRouter>
     <AppContext>
      <Header/>
       <Routes>
           <Route path='/' element={<Home/>} />
           <Route path='/' element={<Footer/>} />
           <Route path='/product/:id' element={<SingleProduct/>} />
           <Route path='/category/:id' element={<Category/>} />
           <Route path='/category' element={<CategoryHead category={data.data}/>} />
           <Route path='/products' element={<Products/>} />
           

       </Routes>
       </AppContext>
       
     
     </BrowserRouter>
  )

};


export default App;
