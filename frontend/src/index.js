import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Home from '../src/page/Home';
import About from '../src/page/About';
import Contact from '../src/page/Contact';
import Menu from '../src/page/Menu';
import Login from '../src/page/Login';
import Newproduct from '../src/page/Newproduct';
import Signup  from '../src/page/Signup';
import { store } from './redux/index';
import {Provider} from 'react-redux'
import Cart from './page/Cart';
import Success from './page/Success';
import Cancel from './page/cancel'


import { createBrowserRouter,createRoutesFromElements,Route,RouterProvider, Routes } from "react-router-dom";

const router=createBrowserRouter(
  createRoutesFromElements(
  <Route path='/' element={<App/>}>
    <Route index element ={<Home/>}/>
    {/* <Route path="menu" element={<Menu/>} /> */}
    <Route path="menu/:filterby" element={<Menu/>} />

    <Route path="about" element={<About/>} />
    <Route path="contact" element={<Contact/>} />
    <Route path="newproduct" element={<Newproduct />} />
    <Route path="signup" element={<Signup/>} />
    <Route path="login" element={<Login/>} />
  <Route path="cart" element={<Cart/>}/>

<Route path="success" element={<Success/>}/>

<Route path="cancel" element={<Cancel/>}/>





  </Route>
  )
)

const root=ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
 <RouterProvider router={router}></RouterProvider>
 </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
