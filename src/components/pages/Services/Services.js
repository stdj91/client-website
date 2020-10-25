import React  from 'react';
import HeroSection from '../../HeroSection';
import { homeObjThree } from './Data';
import Pricing from '../../Pricing';

function Home() {
    return (
        <div>
            <Pricing />
            <HeroSection {...homeObjThree} />
        </div>
    )
};



export default Home;
