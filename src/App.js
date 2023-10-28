import React, { Component } from 'react';
import Navbar from './Components/Navbar';
import News from './Components/News';
// import LoadingBar from 'react-top-loading-bar'
import {BrowserRouter,Routes,Route} from "react-router-dom";


export default class App extends Component {
  render() {

   
    return (
      <>
<BrowserRouter>
        <Navbar/>
      
      <Routes>
          <Route exact path="/" element={<News pageSize="18" key="general" category="general" country="in"/>}/>
          <Route exact path="/business" element={<News pageSize="18" key="business" category="business" country="in"/>}/>
          <Route exact path="/entertainment" element={<News pageSize="18" key="entertainment" category="entertainment" country="in"/>}/>    
          <Route exact path="/health" element={<News pageSize="18" key="health" category="health" country="in"/>}/>
          <Route exact path="/science" element={<News pageSize="18" key="science" category="science" country="in"/>}/>
          <Route exact path="/sports" element={<News pageSize="18" key="sports" category="sports" country="in"/>}/>
          <Route exact path="/technology" element={<News pageSize="18" key="technology" category="technology" country="in"/>}/>
        </Routes>
      
      </BrowserRouter>
      </>
    )
  }
}
