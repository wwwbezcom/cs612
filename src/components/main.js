import React, { Component } from 'react';
import Post1 from './Posts/post1';
import Post2 from './Posts/post2';
import Post3 from './Posts/post3';



class Main extends Component {
  render() {
    return (
      <div className="main">

        <Post1 />
        <Post2 />
        <Post3 />

      </div>
    );
  }  
}

export default Main;
