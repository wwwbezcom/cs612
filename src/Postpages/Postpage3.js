import React, { Component } from 'react';
import Cloud from '../components/Posts/post3.jpg';



class Postpage3 extends Component {
  render() {
    return (
        <div className="main">

        <div className="blog post3">
            <h1 className="header post3">
                The Making of FINAL FANTASY VII REMAKE
            </h1>
            <p className="date post3">2020-04-17</p>
            <div className="summary post3">
                <img className="post3" src={Cloud} alt='Cloud' />
                <p className="text post3">Here’s a question you may have had after playing the recent FINAL FANTASY VII REMAKE demo: how did they do all this?</p>
            </div>
            <div className="body post3">Now you can find out directly from the creators themselves in a video documentary series: Inside FINAL FANTASY VII REMAKE. The multi-part series features interviews with many of the key figures behind FINAL FANTASY VII REMAKE, including:<br/>
                Yoshinori Kitase (Producer)
                Tetsuya Nomura (Director &amp; Concept Design)<br/>
                Kazushige Nojima (Story &amp; Scenario)<br/>
                Naoki Hamaguchi (Co-Director – Game Design / Programming)<br/>
                Motomu Toriyama (Co-Director – Scenario Design)<br/>
                Over the course of each episode, they’ll reveal a treasure trove of behind the scenes information about the game, including the development of the story, characters, combat, action, music and much more.</div>
        </div>

    </div>
    );
  }  
}

export default Postpage3;
