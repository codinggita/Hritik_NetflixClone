import { useState } from 'react';
import Rank1 from './assets/Rank - 01.png'
import Rank2 from './assets/Rank - 02.png'
import Rank3 from './assets/Rank - 03.png'
import Rank4 from './assets/Rank - 04.png'
import Rank5 from './assets/Rank - 05.png'
import Rank6 from './assets/Rank - 06.png'

import T1 from './assets/Section 2.1.png'
import T2 from './assets/Section 2.2.png'
import T3 from './assets/Section 2.3.png'
import T4 from './assets/Section 2.4.png'
import T5 from './assets/Section 2.5.png'

import './Body.css';
function Body() {
    const [count, setCount] = useState(0)

    return (
        <>
            <div className="section2">
                <div className="t1">
                    <p>
                        Top 10 in your country
                    </p>
                </div>
                <div className="t2">
                    <div className="card">
                        <div className="img1"><img src={Rank1} alt="" /></div>
                        <div className="img2"><img src={T1} alt="" /></div>
                    </div>
                    <div className="card">
                        <div className="img1"><img src={Rank2} alt="" /></div>
                        <div className="img2"><img src={T2} alt="" /></div>
                    </div>
                    <div className="card">
                        <div className="img1"><img src={Rank3} alt="" /></div>
                        <div className="img2"><img src={T3} alt="" /></div>
                    </div>
                    <div className="card">
                        <div className="img1"><img src={Rank4} alt="" /></div>
                        <div className="img2"><img src={T4} alt="" /></div>
                    </div>
                    <div className="card">
                        <div className="img1"><img src={Rank5} alt="" /></div>
                        <div className="img2"><img src={T5} alt="" /></div>
                    </div>
                    <div className="card">
                        <div className="img1"><img src={Rank6} alt="" /></div>                        
                    </div>
                </div>
            </div>
        </>
    )
}

export default Body