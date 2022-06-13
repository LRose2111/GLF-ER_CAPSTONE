import react from "react";
import './Scrambles.css';
import { Link } from "react-router-dom";

const PrivateLand = () => {
    return ( 
        <div className="entire-contain">
            <div className="courses-title"><h3>Local Listings</h3></div>
            <div className="courselist-contr">
                <div className="container-hov">
                    <Link to ="/listing/mwm"><img src ="/images/MWM.jpg" className = "course-image" alt = "pi course"/></Link>
                    <div class='middle-over'>
                        <div class='middle-text'>Enter</div>
                    </div>
                    <div className="list-course-title">Missouri WaterFowl Marsh</div>
                </div>
                <div className="container-hov">
                    <Link to ="/listing/whp"><img src ="/images/WHP.jpg" className = "course-image" alt = "shangrila course"/></Link>
                    <div class='middle-over'>
                        <div class='middle-text'>Enter</div>
                    </div>
                    <div className="list-course-title">Waterfowl Hunting Property</div>
                </div>
                <div className="container-hov">
                    <Link to ="/listing/wt"><img src ="/images/WT.jpg" className = "course-image" alt = "elkriver course"/></Link>
                    <div class='middle-over'>
                        <div class='middle-text'>Enter</div>
                    </div>
                    <div className="list-course-title">WhiteTail Hunting Land</div>
                </div>
                <div className="container-hov">
                    <Link to ="/listing/swmo"><img src ="/images/SWMO.jpg" className = "course-image" alt = "neosho course"/></Link>
                    <div class='middle-over'>
                        <div class='middle-text'>Enter</div>
                    </div>
                    <div className="list-course-title">SW MO Hunting Land </div>
                </div>
            </div>
        </div>
     );
}
 
export default PrivateLand;