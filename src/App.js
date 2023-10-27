import React, { Component } from 'react';
import Navbar from './Components/Navbar';
import News from './Components/News';
// import LoadingBar from 'react-top-loading-bar'
import {BrowserRouter,Routes,Route} from "react-router-dom";


export default class App extends Component {
  render() {

   
    return (
      <>

        <Navbar/>
        <News pageSize="18" key="sports" category="general" country="in"/>
{/* <BrowserRouter>
      
      <Routes>
          <Route exact path="/"><News pageSize={this.pageSize} key="general" category="general" country={this.country}/> </Route>
          <Route exact path="/general" ><News pageSize={this.pageSize} key="general" category="general" country={this.country}/></Route>
          <Route exact path="/business" ><News pageSize={this.pageSize} key="business" category="business" country={this.country}/></Route>
          <Route exact path="/entertainment" ><News pageSize={this.pageSize} key="entertainment" category="entertainment" country={this.country}/></Route>    
          <Route exact path="/health" ><News pageSize={this.pageSize} key="health" category="health" country={this.country}/></Route>
          <Route exact path="/science" ><News pageSize={this.pageSize} key="science" category="science" country={this.country}/></Route>
          <Route exact path="/sports" ><News pageSize={this.pageSize} key="sports" category="sports" country={this.country}/></Route>
          <Route exact path="/technology"><News pageSize={this.pageSize} key="technology" category="technology" country={this.country}/></Route>
        </Routes>
      
      </BrowserRouter> */}
      </>
    )
  }
}
