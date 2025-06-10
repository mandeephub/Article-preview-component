import { useState } from "react";

import tableimg from "./assets/images/drawers.jpg";

import author from "./assets/images/avatar-michelle.jpg";

import share from "./assets/images/icon-share.svg";

import fb from "./assets/images/icon-facebook.svg";

import pin from "./assets/images/icon-pinterest.svg";

import x from "./assets/images/icon-twitter.svg";

import "./App.css";

function App() {
  const [show, setShow] = useState(false);

  const [showmob, setShowmob] = useState(false);

function handleme(){
  setShow(!show);
  setShowmob(!showmob);
}


  

  return (
    <>
      <div className="body_area">
        <div className="card_box">
          <div className="image"></div>

          <div className="text-area">
            <h2>
              Shift the overall look and feel by adding these wonderful touches
              to furniture in your home
            </h2>

            <p>
              Ever been in a room and felt like something was missing? Perhaps
              it felt slightly bare and uninviting. I’ve got some simple tips to
              help you make any room feel complete
            </p>

            <div className="author_bar">
              <div className="author_line">
                <div className="profilepic">
                  <img src={author} />
                </div>

                <div className="profile_box">
                  <h3>Michelle Appleton</h3>
                  <p>28 Jun 2020</p>
                </div>
              </div>


            <div className="boxed">



              {showmob ? <div className="mobile-view">

                  <div className="box">
                    <span>SHARE</span>
                    <div className="icons">
                      <img src={fb}/>
                      <img src={pin}/>
                      <img src={x}/>
                    </div>
                  </div>

              </div> :""}


              {show ?  <div className="share_box_hover" >

                  <div className="box">
                    <span>SHARE</span>
                    <div className="icons">
                      <img src={fb}/>
                      <img src={pin}/>
                      <img src={x}/>
                    </div>
                  </div>

                </div> :''}

            </div>


              <div className="share_box" onClick={handleme}>
                <img src={share} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
