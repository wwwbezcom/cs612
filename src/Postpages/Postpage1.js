import React, { Component } from 'react';
import DK from '../components/Posts/post1.jpg';



class Postpage1 extends Component {
  render() {
    return (
      <div className="main">

      <div className="blog post1">
          <h1 className="header post1">
              DK Metcalf's big-play ability gives 2019 Seahawks draft class a solid grade
          </h1>
          <p className="date post1">2020-01-08</p>
          <div className="summary post1">
              <img className="post1" src={ DK } alt='DK Metcalf'/>
              <p className="text post1">DK Metcalf hauled in 58 passes for 900 yards and seven touchdowns this season to make an immediate impact as a rookie.</p>
          </div>
          <div className="body post1">DK Metcalf began the regular season with 89 receiving yards in the opener, the most ever by a Seattle Seahawks rookie in his NFL debut.<br/>

              He finished it with 58 catches, tied for second among rookies in 2019 and second most by a rookie in franchise history.<br/>
              
              Metcalf then set a Seahawks playoff record with 160 yards in the wild-card round, which also was an NFL postseason record for a rookie in the Super Bowl era. He had a touchdown in that game, to go along with seven in the regular season.<br/>
              
              Of all the noteworthy numbers he posted during his spectacular rookie campaign, this might be as important as any: 18. Metcalf didn't miss a game, playing in all 16 during the regular season and two more in the playoffs. That alone was an accomplishment after he saw his college career get cut short by a serious neck injury, then needed knee surgery 19 days before the Seahawks' opener.<br/>
              
              The Seahawks couldn’t have expected anything more out of Metcalf in 2019.</div>
      </div>

  </div>
    );
  }  
}

export default Postpage1;
