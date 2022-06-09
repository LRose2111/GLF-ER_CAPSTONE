import React from 'react';
import "./SplashBottom.css";
import { useNavigate} from "react-router-dom";
import { BsChevronUp } from "react-icons/bs";
import {Link} from 'react-scroll';

const SplashBottom = () => {

    const navigate = useNavigate();

    return ( 
        <div>
            <div className='about-us-title' id='aboutsite'>ABOUT THE GOLF SITE</div>
            <div className='splash-bottom-contain'>
                <div className='golf-video'>
                    <div className='video-padding'>
                        <iframe id="ytplayer" type="text/html" width="460" height="320"
                            src="https://www.youtube.com/embed/2uHxFADN2rI"
                            frameborder="0">
                        </iframe>
                    </div>
                </div>
                <div className='splash-bottom-text-contain'>
                    <div className='smaller-title-about'>GOLFR | Schedule Golf Scrambles in the Area</div>
                
                    <div className='about-description'>GOLFR was established in 2022 as part of a devCodeCamp capstone project and a
                        site for bringing golf enthusiasts together who want to compete. 
                    </div>
                    <div className='features-header'>
                        Features
                    </div>
                    <div className='features-list'>
                        <medium className = 'features-font'>- Schedule Courses</medium>
                        <medium className = 'features-font'>- Share comments about the Courses</medium>
                        <medium className = 'features-font'>- Watch Golf Videos</medium>
                        <medium className = 'features-font'>- View Scramble Listings</medium>
                        <medium className = 'features-font'>- View Golf News</medium>
                    </div>
                </div>
            </div>
            <div className='register-button-contian'> 
                <button className = 'register-button' onClick={() => navigate("/register")}>Register</button>
            </div>
            <div className='up-arrow-contain'>
            <div className='up-arrow'><Link to = "scramsplash" spy={true} smooth={true} offset={50} duration={500}><BsChevronUp color='black' size='4.5rem'/></Link></div>
            </div>
        </div>
     );
}
 
export default SplashBottom;