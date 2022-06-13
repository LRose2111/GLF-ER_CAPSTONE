import react from "react";
import './VideosList.css';

const VideosList = () => {
    return ( 
        <div className="entire-contain">
            <div className="vid-title-contain-trans"><h3 className="videos-title">Hunting Videos</h3></div>
            <div className="videolist-contr">
                <div className="pervideo-container">
                    <iframe className="iframe-border" id="ytplayer" type="text/html" width="410" height="270"
                        src="https://www.youtube.com/embed/8VoMEG1hMH0"
                        frameborder="0">
                    </iframe>
                    <div className="vid-contain">
                        <p className="video-text">What Choke Tubes do you need for Duck and Goose Hunting?</p>
                    </div>
                </div>
                <div className="pervideo-container">
                    <iframe className="iframe-border" id="ytplayer" type="text/html" width="410" height="270"
                        src="https://www.youtube.com/embed/g8-M6-uLPHM"
                        frameborder="0">
                    </iframe>
                    <div className="vid-contain">
                        <p className="video-text">Big Water Diver Duck Hunt with Bonus King Canvasback!!</p>
                    </div>
                </div>
                <div className="pervideo-container">
                    <iframe className="iframe-border" id="ytplayer" type="text/html" width="410" height="270"
                        src="https://www.youtube.com/embed/T8nTYAf1OLg"
                        frameborder="0">
                    </iframe>
                    <div className="vid-contain">
                         <p className="video-text">1000's of Birds Landed in My Decoys But a Very Special One Didn't Make it Out... </p>
                    </div>
                </div>
                <div className="pervideo-container">
                    <iframe className="iframe-border" id="ytplayer" type="text/html" width="410" height="270"
                        src="https://www.youtube.com/embed/asDOC5aseUQ"
                        frameborder="0">
                    </iframe>
                    <div className="vid-contain">
                        <p className="video-text">Shooting Nothing but Beautiful Adult Birds.. I'm Mounting All of Them!!</p>
                    </div>
                </div>
                <div className="pervideo-container">
                    <iframe className="iframe-border" id="ytplayer" type="text/html" width="410" height="270"
                        src="https://www.youtube.com/embed/wVnf_IAUfe8"
                        frameborder="0">
                    </iframe>
                    <div className="vid-contain">
                        <p className="video-text">GHILLIE SUIT GOOSE HUNT CHALLENGE!!</p>
                    </div>
                </div>
                <div className="pervideo-container">
                    <iframe className="iframe-border" id="ytplayer" type="text/html" width="410" height="270"
                        src="https://www.youtube.com/embed/863RwA9BP2Y"
                        frameborder="0">
                    </iframe>
                    <div className="vid-contain">
                        <p className="video-text">A SOLO DUCK HUNT FOR THE BOOKS!</p>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default VideosList;