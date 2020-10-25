import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import Home from './components/pages/HomePage/Home';
import Services from './components/pages/Services/Services';
import Products from './components/pages/Products/Products';
import Footer from './components/pages/Footer/Footer';
import  ScrollToTop from  './ScrollToTop';


function App() {
  return ( 
    <Router>
      <ScrollToTop>
        <Navbar />
        <Switch >
          <Route path = '/' exact component={Home} />
          <Route path ='/service' component={Services} />
          <Route path ='/products' component={Products} />
        </Switch> 
        <Footer />
      </ScrollToTop>
    </Router >
  );
}

export default App;