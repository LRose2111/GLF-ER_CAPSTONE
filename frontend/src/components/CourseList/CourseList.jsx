import react from "react";
import './CourseList.css';
import { Link } from "react-router-dom";

const CourseList = () => {
    return ( 
        <div className="entire-contain">
            <div className="courses-title"><h3>Courses</h3></div>
            <div className="courselist-contr">
                <div className="container-hov">
                    <Link to ="/course/patricaisland"><img src ="/images/PI.jpg" className = "course-image" alt = "pi course"/></Link>
                    <div class='middle-over'>
                        <div class='middle-text'>Enter</div>
                    </div>
                    <div className="list-course-title">Patricia Island Golf Club</div>
                </div>
                <div className="container-hov">
                    <Link to ="/course/shangrila"><img src ="/images/SGC.jpg" className = "course-image" alt = "shangrila course"/></Link>
                    <div class='middle-over'>
                        <div class='middle-text'>Enter</div>
                    </div>
                    <div className="list-course-title">Shangri-La Golf Club</div>
                </div>
                <div className="container-hov">
                    <Link to ="/course/elkriver"><img src ="/images/ERCC.jpg" className = "course-image" alt = "elkriver course"/></Link>
                    <div class='middle-over'>
                        <div class='middle-text'>Enter</div>
                    </div>
                    <div className="list-course-title">Elk River Country Club</div>
                </div>
                <div className="container-hov">
                    <Link to ="/course/neosho"><img src ="/images/NGC.jpg" className = "course-image" alt = "neosho course"/></Link>
                    <div class='middle-over'>
                        <div class='middle-text'>Enter</div>
                    </div>
                    <div className="list-course-title">Neosho Golf Course</div>
                </div>
            </div>
        </div>
     );
}
 
export default CourseList;