import React, { useState, useEffect } from "react";
import './NewsList.css';
import axios from "axios";
import News from "../News/News";

const NewsList = () => {
    const [articles, setArticles] = useState([]);

    useEffect(() => { 
        getArticles();
      }, [])


      async function getArticles(){
        let response = await axios.get('https://newsapi.org/v2/everything?q=golf&sortBy=relevancyAt&pagesize=6&apiKey=4d1e7352fad2431a82995bd41bc85e37');
        setArticles(response.data.articles);
      }

    return ( 
        <div className='entire-contain'>
            <div className="news-title"><h3 className="">Golf News</h3></div>
            <div>
                <News articles = {articles}/>
            </div>
        </div>
     );
}
 
export default NewsList;