import { useState } from 'react'
import Netflix from './assets/NetflixLogoSvg.png'
import Search from './assets/Search.png'
import GiftBox from './assets/GiftBox.png'
import NotificationBell from './assets/NotificationBell.png'
import ProfileIMG from './assets/ProfileIMG.png'
import DownArrow from './assets/DownArrow.png'
import NetflixSymbol from './assets/Netflix_Symbol_RGB 1.png'
import Play from './assets/Play.png'
import Detail from './assets/Detail.png'
import ArrowRight from './assets/ArrowRight.png'
import see1 from './assets/section 1.1.png'
import see2 from './assets/section 1.2.png'
import see3 from './assets/section 1.3.png'
import see4 from './assets/section 1.4.png'
import see5 from './assets/section 1.5.png'



import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="header">
        <div className="nav-bar">
          <div className="nav-bar-left">
            <ul>
              <li><img src={Netflix} alt="" /></li>
              <li>Start</li>
              <li>Shows</li>
              <li>Movies</li>
              <li>New</li>
              <li>MyList</li>
            </ul>
          </div>
          <div className="nav-bar-right">
            <ul>
              <li><img src={Search} alt="" /></li>
              <li><img src={GiftBox} alt="" /></li>
              <li><img src={NotificationBell} alt="" /></li>
              <li><img src={ProfileIMG} alt="" /></li>
              <li><img src={DownArrow} alt="" /></li>
            </ul>
          </div>
        </div>
        <div className="header-content">
          <div className="netflix">
            <div className="img-netflix">
              <img src={NetflixSymbol} alt="" />
            </div>
            <div className="show">
              <p>SHOW</p>
            </div>
          </div>
          <div className="maid">
            <p>MAID</p>
          </div>
          <div className="btn">
            <button id="play"><img src={Play} alt="" />Play</button>
            <button id="more"><img src={Detail} alt="" />More Info</button>
          </div>
        </div>
      </div>
      <div className="see">
        <div className="see-1">
          <div className="see-para">
            See again 
          </div>
          <div className="see-arrow">
            <img src={ArrowRight} alt="" />
          </div>
        </div>
        <div className="see-2">
          <div className="see-img"><img src={see1} alt="" /></div>
          <div className="see-img"><img src={see2} alt="" /></div>
          <div className="see-img"><img src={see3} alt="" /></div>
          <div className="see-img"><img src={see4} alt="" /></div>
          <div className="see-img"><img src={see5} alt="" /></div>
        </div>
      </div>
    </>
  )
}

export default App
