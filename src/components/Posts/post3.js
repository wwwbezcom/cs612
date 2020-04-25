import React, { Component } from 'react';
import Cloud from './post3.jpg';
import {Link} from 'react-router-dom';


class Post3 extends Component {
  render() {
    return (
    <div className="blog  post3">
        <h1 className="header post3">
            <Link to="/post3">Post3: The Making of FINAL FANTASY VII REMAKE</Link>
        </h1>
        <p className="date post3">2020-04-17</p>
        <div className="summary post3">
            <img className="post3" src={Cloud} alt='Cloud' />
            <p className="text post3">Here’s a question you may have had after playing the recent FINAL FANTASY VII REMAKE demo: how did they do all this?</p>
        </div>
        <div className="body  post3">Now you can find out directly from the creators themselves in a video documentary series: Inside FINAL FANTASY VII REMAKE. The multi-part series features interviews with many of the key figures behind FINAL FANTASY VII REMAKE, including:</div>
    </div>
    );
  }  
}

export default Post3;
