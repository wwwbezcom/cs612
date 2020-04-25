import React, { Component } from 'react';
import Zion from './post2.jpg';
import {Link} from 'react-router-dom';


class Post2 extends Component {
  render() {
    return (
        <div className="blog post2">
        <h1 className="header post2">
            <Link to="/post2">Post2: Live blog: Former Blue Devil Zion Williamson makes NBA debut with the New Orleans Pelicans</Link>
        </h1>
        <p className="date post2">2020-01-22</p>
        <div className="summary  post2">
            <img className="post2" src={Zion} alt='Zion Williamson'/>
            <p className="text  post2">Williamson last played in the preseason but has missed time with a knee injury.</p>
        </div>
        <div className="body post2">Over six months after making his scintillating preseason debut, Zion Williamson will finally appear in an NBA game tonight. Williamson has missed the past six months recovering from a torn meniscus with the rookie having surgery on his knee in October. The Pelicans decided to be overly cautious with his rehab, and he now takes the pro hardwood for the first time.</div>
    </div>
    );
  }  
}

export default Post2;
