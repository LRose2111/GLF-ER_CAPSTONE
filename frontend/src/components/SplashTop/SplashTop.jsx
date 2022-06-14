import React from 'react';
import "./SplashTop.css";
import { BsChevronDown } from "react-icons/bs";
import {Link} from 'react-scroll';

const SplashTop = () => {
    return ( 
        <div className='splash-top-contain'>
            <div className='splash-title' id='leasesplash'>
                Hunts in the SW Missouri
                <div className='down-arrow'><Link to = "aboutsite" spy={true} smooth={true} offset={50} duration={500}><BsChevronDown color='red' size='10rem'/></Link></div>
            </div>

        </div>
     );
}
 
export default SplashTop;