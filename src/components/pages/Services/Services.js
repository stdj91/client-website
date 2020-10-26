import React  from 'react';
import HeroSection from '../../HeroSection';
import { homeObjThree, homeObjOne } from './Data';
import Pricing from '../../Pricing';

function Home() {
    return (
        <div>
            <Pricing {...homeObjOne}/>
            <HeroSection {...homeObjThree} />
        </div>
    )
};



export default Home;
