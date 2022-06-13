import React, { useState, useEffect } from "react";
import './ScramblesList.css';
import axios from "axios";
import useAuth from "../../hooks/useAuth";
import Scrambles from "../PrivateLand/Scrambles";


const ScramblesList = () => {

    const [scrambles, setScrambles] = useState([]);
    const [user, token] = useAuth();

    useEffect(() => { 
        getAllScrambles();
      }, [])


    async function getAllScrambles(){
        let response = await axios.get('http://127.0.0.1:8000/scrambles', {
            headers: {
            Authorization: 'Bearer ' + token
            }
        });
        setScrambles(response.data);
      }


    return ( 
        <div className="entire-contain">
            <div className="scram-title"><h3 className="">Listings</h3></div>
            <div className="scram-contain">
                <div><Scrambles scrambles = {scrambles}/></div>
            </div>
        </div>
     );
}
 
export default ScramblesList