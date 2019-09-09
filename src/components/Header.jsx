import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/cnfLogo.png'

function Header(){
  return (
    <div>
      <div className="header">
      <h3>$3 Pint Late Night Happy Hour 9-11 pm</h3>
      </div>
      <style jsx>{`
          .header {
            background-color: #7A9CBF;
            text-align: center;
            width: 100%;
            top: 0;
            left: 0;
            position: absolute;
          }
          `}</style>
        <div className="logo">
          <img src={logo}/>
        </div>
        <style jsx>{`
            .logo {
              padding-top: 80px;
              display: block;
              margin-left: auto;
              margin-right: auto;
              width: 40%;
            }
            `}</style>
          <div className="link-bar">
          <Link to ="/">HOME</Link> | <Link to="/newbeer">ADD A BEER</Link> | <Link to="/aboutUs"> ABOUT US</Link> | <Link to="/taplist"> LIVE TAP LIST</Link> | <Link to="/events"> UPCOMING EVENTS</Link> | <Link to="/recommend"> RECOMMEND!</Link> | <Link to="/kegSales"> KEG SALES</Link>
            <style jsx>{`
                .link-bar {
                  text-align: center;
                }
                `}</style>
          </div>
    </div>
  );
}

export default Header;
