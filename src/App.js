import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import Header from './components/header';
import Main from './components/main';
import Nav from './components/nav';
import Footer from './components/footer';
import Postpage1 from './Postpages/Postpage1';
import Postpage2 from './Postpages/Postpage2';
import Postpage3 from './Postpages/Postpage3';


import './index.css'


class App extends Component {
  render() {
    return (

      <Router>
      <div className="container">

        <Header />

        <Route exact path='/' component={Main} />
        <Route exact path='/post1' component={Postpage1} />
        <Route exact path='/post2' component={Postpage2} />
        <Route exact path='/post3' component={Postpage3} />


        <Nav />

        <Footer />

      </div>
      </Router>

    );
  }  
}

export default App;
