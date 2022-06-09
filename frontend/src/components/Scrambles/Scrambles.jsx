import { useState } from "react";
import React from "react";
import './Scrambles.css';

const Scrambles = (props) => {

    const [searchTerm, setSearchTerm] = useState('');

    return ( 
    <div className = 'scram-container'>
        <div className="scram-big-img-contain">
            <img src ="/images/WWGL.jpg" className = "scram-logo" alt = "scram"/>
        </div>
        <div className="scram-table-container">
            <div className='table-title'>
                <div className ='scram-title-contain'>
                    <div className='scram-title'>
                        
                    </div>
                    <div>
                        <label className='search-label'>Filter Scrambles:</label>
                        <input type='text' className='custom-input' placeholder="Search..." onChange={(event) => setSearchTerm(event.target.value)}/>
                    </div> 
                </div>
            </div>
            <table className='scram-table table'>
            <thead>
                <tr className = 'scram-header-row'>
                    <th>Date</th>
                    <th>Scramble</th>
                    <th>Location</th>            
                    <th>Get Entered</th>
                </tr>
            </thead>
        <tbody>
            {props.scrambles.filter((scrambles) =>{
                if (searchTerm == ''){
                    return scrambles;
                }
                else if (scrambles.date.toLowerCase().includes(searchTerm.toLocaleLowerCase()) || scrambles.scramble.toLowerCase().includes(searchTerm.toLocaleLowerCase()) || scrambles.location.toLowerCase().includes(searchTerm.toLocaleLowerCase())){
                return scrambles;
                }
            })
            .map((scrambles, index) => { 
            return (
                <tr key= {index} className = 'scram-display-rows'>
                    <td>{scrambles.date}</td>
                    <td>{scrambles.scramble}</td>
                    <td>{scrambles.location}</td>
                    <td><a href="https://scramblehunter.com/find-a-scramble/" target="_blank"><img src ="/images/WWGL.jpg" className = "WWGL-img" alt = "wwgl"/></a></td>
                </tr>
            )
            })}
        </tbody>
        </table>
        </div>
    </div>     
     );
}
 
export default Scrambles;