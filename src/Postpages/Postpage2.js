import React, { Component } from 'react';
import Zion from '../components/Posts/post2.jpg';



class Postpage2 extends Component {
  render() {
    return (
        <div className="main">

        <div className="blog post2">
            <h1 className="header post2">
                Live blog: Former Blue Devil Zion Williamson makes NBA debut with the New Orleans Pelicans
            </h1>
            <p className="date post2">2020-01-22</p>
            <div className="summary post2">
                <img className="post2" src={Zion} alt='Zion Williamson' />
                <p className="text post2">Williamson last played in the preseason but has missed time with a knee injury.</p>
            </div>
            <div className="body post2">Over six months after making his scintillating preseason debut, Zion Williamson will finally appear in an NBA game tonight. Williamson has missed the past six months recovering from a torn meniscus with the rookie having surgery on his knee in October. The Pelicans decided to be overly cautious with his rehab, and he now takes the pro hardwood for the first time.<br/>
                With the Pelicans hosting the Spurs Wednesday night, Williamson will start at the power forward spot as the Pelicans look to make a playoff push. However, that’s a long-term look. Williamson will look to take advantage of a league-average San Antonio defense, one whose starting bigs have nowhere near enough athleticism and size needed to match up with him.<br/>
                Follow along here live during the game for everything you need to know during Williamson's debut:<br/>
                <strong>A warm-up attraction</strong><br/>
                Zion looks pretty spry in his pregame warm-ups, catching lobs and throwing down reverse dunks like he did in Durham.</div>
        </div>

    </div>
    );
  }  
}

export default Postpage2;
