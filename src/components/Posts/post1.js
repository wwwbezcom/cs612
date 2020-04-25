import React, { Component } from 'react';
import Dk from './post1.jpg';
import {Link} from 'react-router-dom';



class Post1 extends Component {
  render() {
    return (
    <div className="blog post1">
        <h1 className="header post1">
            <Link to="/post1">Post1: DK Metcalf's big-play ability gives 2019 Seahawks draft class a solid grade</Link>
        </h1>
        <p className="date post1">2020-01-08</p>
        <div className="summary  post1">
            <img className="post1" src={Dk} alt='DK Metcalf' />
            <p className="text post1">DK Metcalf hauled in 58 passes for 900 yards and seven touchdowns this season to make an immediate impact as a rookie.
            </p>
        </div>
        <div className="body post1">DK Metcalf began the regular season with 89 receiving yards in the opener, the most ever by a Seattle Seahawks rookie in his NFL debut.
        </div>
    </div>
    );
  }  
}

export default Post1;
