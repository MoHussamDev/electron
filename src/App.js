import React from 'react';
import logo from './logo.svg';
import './App.css';
import { HashRouter, Route ,Link, Router} from "react-router-dom";
import Home from './screens/home';
import AllProducts from './screens/AllProducts';
import NewProduct from './screens/NewProduct';
import Navigation from './layout/navigation';
import AddProduct from './screens/addProduct';



const App = () => {
  return (

<HashRouter>

<div className="container-fluid">

<div className="row">

<div className="col-md-10">


<Route exact path="/" render={()=>{
  return <Home/>
}} />
<Route path="/allproducts" render={()=>{
  
  return <AllProducts/>
  }}/>

<Route path="/addnewproduct" render={()=>{
  return  <NewProduct/>;
}}/>

<Route path="/addproduct" render = {()=>{
  return <AddProduct/>
}}
/>
</div>
<div className="col-md-2">

<Navigation/>

</div>
</div>
</div>

</HashRouter>
  
  );
}

export default App;
