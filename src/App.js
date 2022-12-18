import React, { Component, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Sidebar from './app/components/Sidebar';
import Header from './app/components/Header';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import Home from './app/pages/Home';
import Dashboard from './app/pages/Dashboard';
import Inbox from './app/pages/Inbox';
import Admin from './app/pages/Admin';
import Product from './app/pages/Product';

const App=()=> {
  const [showsidebar,setshowsidebar]=useState(false);
    return (
      <div>
          
      <Router>
        <div className=" bg-primary">
          <Sidebar  showsidebar={showsidebar}/>

          <div className={`bg-white maincontainer h-100 ${showsidebar && "ContainerWidth"}`}>
            <Header showsidebar={showsidebar} setshowsidebar={setshowsidebar} />
            <div className='bg-skyblue h-100 px-md-3 p-1 container-fluid'>
            <Routes>
              <Route path={'acme-dashboard/home'} element={<Home/>} />
              <Route path={'acme-dashboard/'} element={<Dashboard/>} />
              <Route path={'acme-dashboard/inbox'} element={<Inbox/>} />
              <Route path={'acme-dashboard/products'} element={<Admin/>} />
              <Route path={'acme-dashboard/admin'} element={<Product/>} />
            </Routes>
            </div>
          </div>
          
        </div>
      </Router>
      </div>
 
    );
  
}

export default App;
