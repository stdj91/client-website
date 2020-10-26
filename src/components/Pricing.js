import React from 'react';
import './Pricing.css';
import  { homeObjOne } from '../components/pages/HomePage/Data';


function Pricing( ) {
    return(
        <div>
            <div className="containerrrr">
                <div className="card-pad">
                    <div className="card">
                        <div className="card-header-img"><img src={homeObjOne.img1} alt="error"  /></div>
                        <div className="description"><h3>Lorem Lorem</h3><p>Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.</p></div>
                    </div>
                </div>
                <div className="card-pad">
                    <div className="card">
                        <div className="card-header-img"><img alt="" src={homeObjOne.img1} /></div>
                        <div className="description"><h3>Lorem Lorem</h3><p>Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.</p></div>
                    </div>
                </div>
                <div className="card-pad">
                    <div className="card">
                        <div className="card-header-img"><img alt="" src={homeObjOne.img1} /></div>
                        <div className="description"><h3>Lorem Lorem</h3><p>Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.</p></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Pricing;