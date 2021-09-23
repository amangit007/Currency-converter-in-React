import logo from './logo.svg';
import './App.css';
import Header from './MyComponents/Header';
import { Footer } from './MyComponents/Footer';
import React from 'react';
import { Menu } from './MyComponents/Menu';
import Currency from './MyComponents/Currency';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { Conversion } from './MyComponents/Conversion';



function App() {
  return (
    <>
      <Router>

        <Switch>
          <Route exact path="/" render={() => {
             return (
              <>
                <Header  search={false}  currlink='nav-link active' />
                <Currency/>
              </>
            )
          }}>

          </Route>
          
       

          <Route exact path="/currency" render={() => {
            return (
              <>
                <Header  search={false}  currlink='nav-link active' />
                <Currency/>
              </>
            )
          }}>

          </Route>

        
          


        </Switch>



        <Footer />
      </Router>
    </>
  );
}
export default App;
