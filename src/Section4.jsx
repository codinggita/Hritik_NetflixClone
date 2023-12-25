import { useState } from 'react';
import ArrowRight from './assets/ArrowRight.png'
import sect1 from './assets/section 4.1.png'
import sect2 from './assets/section 4.2.png'
import sect3 from './assets/section 4.3.png'
import sect4 from './assets/section 4.4.png'
import sect5 from './assets/section 4.5.png'

import './Section4.css';

function Section4() {
    const [count, setCount] = useState(0)

    return (
        <>
            <div className="section3">
                <div className="s1">
                    <p class="trending">
                        Sci-fi shows
                    </p>
                    <div className="img3">
                        <img src={ArrowRight} alt="" />
                    </div>
                </div>
                <div className="s2">
                    <div className="card">
                        <div className="imgTrend">
                            <img src={sect1} alt="" />
                        </div>
                    </div>
                    <div className="card">
                        <div className="imgTrend">
                            <img src={sect2} alt="" />
                        </div>
                    </div>
                    <div className="card">
                        <div className="imgTrend">
                            <img src={sect3} alt="" />
                        </div>
                    </div>
                    <div className="card">
                        <div className="imgTrend">
                            <img src={sect4} alt="" />
                        </div>
                    </div>
                    <div className="card">
                        <div className="imgTrend">
                            <img src={sect5} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Section4