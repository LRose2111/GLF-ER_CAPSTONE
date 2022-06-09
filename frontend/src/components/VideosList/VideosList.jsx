import react from "react";
import './VideosList.css';

const VideosList = () => {
    return ( 
        <div className="entire-contain">
            <div className="vid-title-contain-trans"><h3 className="videos-title">Golf Videos</h3></div>
            <div className="videolist-contr">
                <div className="pervideo-container">
                    <iframe className="iframe-border" id="ytplayer" type="text/html" width="410" height="270"
                        src="https://www.youtube.com/embed/2uHxFADN2rI"
                        frameborder="0">
                    </iframe>
                    <div className="vid-contain">
                        <p className="video-text">We Challenged Top D1 Commits To A Golf Match… Who Wins?</p>
                    </div>
                </div>
                <div className="pervideo-container">
                    <iframe className="iframe-border" id="ytplayer" type="text/html" width="410" height="270"
                        src="https://www.youtube.com/embed/PbNa9V7MwK0"
                        frameborder="0">
                    </iframe>
                    <div className="vid-contain">
                        <p className="video-text">3v3 18 Hole Scramble | Tiger Woods Course Payne's Valley | Part 1</p>
                    </div>
                </div>
                <div className="pervideo-container">
                    <iframe className="iframe-border" id="ytplayer" type="text/html" width="410" height="270"
                        src="https://www.youtube.com/embed/PhzSfTS942k"
                        frameborder="0">
                    </iframe>
                    <div className="vid-contain">
                         <p className="video-text">Rickie Fowler on Playing for Saudi League, Tiger Woods, His Game Going Downhill | FULL SEND </p>
                    </div>
                </div>
                <div className="pervideo-container">
                    <iframe className="iframe-border" id="ytplayer" type="text/html" width="410" height="270"
                        src="https://www.youtube.com/embed/10j5LpGguy4"
                        frameborder="0">
                    </iframe>
                    <div className="vid-contain">
                        <p className="video-text">Rick Shiels own golf clubs Vs Tour Pro package set</p>
                    </div>
                </div>
                <div className="pervideo-container">
                    <iframe className="iframe-border" id="ytplayer" type="text/html" width="410" height="270"
                        src="https://www.youtube.com/embed/BgK37qPqV50"
                        frameborder="0">
                    </iframe>
                    <div className="vid-contain">
                        <p className="video-text">What Does a $250,000 Golf Membership Look Like? Exclusive Florida Course</p>
                    </div>
                </div>
                <div className="pervideo-container">
                    <iframe className="iframe-border" id="ytplayer" type="text/html" width="410" height="270"
                        src="https://www.youtube.com/embed/wKShcCJzM8o"
                        frameborder="0">
                    </iframe>
                    <div className="vid-contain">
                        <p className="video-text">HOW TO ARRANGE YOUR GOLF BAG the Right Way</p>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default VideosList;