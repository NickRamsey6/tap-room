import React from 'react';
import home from '../assets/images/home.jpg';




function Home(){
  return (
    <div className="home">
      <div className="home-pic">
        <img src={home}/>
          <style jsx>{`
              .home-pic {
                padding-top: 20px;
                display: block;
                margin-left: auto;
                margin-right: auto;
                width: 70%;
                padding-bottom: 50px;
              }
              `}</style>
      </div>
      <h2>Welcome to North Portland's premier Growler shop featuring 30 rotating taps of craft beer, wine, cider and kombucha!</h2>
      <h4>In addition, we have an extensive selection of hard to find and local bottled beer, wine and ciders!</h4>
      <br/>
      <h4>Located on N lombard, close to St. Johns in the University District, we offer a full digital menu, open seating, and two flat screens!</h4>
      <br/>
      <h4>ChillNFill is the spot in NOPO to try, tase, sip, drink, chill and fill your growler!</h4>
      <br/>
      <h4>Big Sip Wednesday.</h4>
      <br/>
      <h4>All 64oz Growler fills are just $10 every Wednesday</h4>
        <style jsx>{`
            .home {
              text-align: center;
            }
            `}</style>
    </div>
  );
}

export default Home;
