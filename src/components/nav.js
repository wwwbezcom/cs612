import React, { Component } from 'react';
import Homepagelink from './Navigation/homepagelink'
import Apipage from './Navigation/apipage';

class Nav extends Component {
  render() {
    return (

       <div className="nav">

            <Homepagelink />

            <Apipage />

        </div>

    );
  }  
}

export default Nav;
