import react from "react";
import './PublicLandList.css';
import { Link } from "react-router-dom";

const CourseList = () => {
    return ( 
        <div className="entire-contain">
            <div className="courses-title"><h3>Public Land</h3></div>
            <div className="courselist-contr">
                <div className="container-hov">
                    <Link to ="/publicland/fourrivers"><img src ="/images/PI.jpg" className = "course-image" alt = "pi course"/></Link>
                    <div class='middle-over'>
                        <div class='middle-text'>Enter</div>
                    </div>
                    <div className="list-course-title">Shawnee Trail Conservation Area</div>
                </div>
                <div className="container-hov">
                    <Link to ="/publicland/bushwacker"><img src ="/images/SGC.jpg" className = "course-image" alt = "shangrila course"/></Link>
                    <div class='middle-over'>
                        <div class='middle-text'>Enter</div>
                    </div>
                    <div className="list-course-title">BushWacker Conservation Area</div>
                </div>
                <div className="container-hov">
                    <Link to ="/publicland/shawnee"><img src ="/images/ERCC.jpg" className = "course-image" alt = "elkriver course"/></Link>
                    <div class='middle-over'>
                        <div class='middle-text'>Enter</div>
                    </div>
                    <div className="list-course-title">Four Rivers Conservation Area</div>
                </div>
                <div className="container-hov">
                    <Link to ="/publicland/schell"><img src ="/images/NGC.jpg" className = "course-image" alt = "neosho course"/></Link>
                    <div class='middle-over'>
                        <div class='middle-text'>Enter</div>
                    </div>
                    <div className="list-course-title">Shell-Osage Conservation Area </div>
                </div>
            </div>
        </div>
     );
}
 
export default CourseList;