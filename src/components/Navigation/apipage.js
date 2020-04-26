import React, { Component } from 'react';

const API_KEY = 'bbaa5b3d1a634fe38beca404c864ff89';
const country ='us';

const API_URL = `https://newsapi.org/v2/top-headlines?country=${country}&pageSize=6&apiKey=${API_KEY}`;

class Apipage extends Component {

    state = {
        articles:[]
    }

    getAPI= async () => {
         try{const api_call = await fetch(API_URL);
         const data = await api_call.json();
         console.log(data);
         this.setState({
            articles:data.articles
         });
        }
        catch(e){console.log("attempt to fetch failed")}
    }

    

    render() {
        setInterval(this.getAPI,15000);
        if (this.state.articles){
            return (
                <div className="thridPartyApi">
                    {this.state.articles.map((article)=>{

                        var d = new Date(article.publishedAt)
                        
                        return <div className="APIcontent" key={article.url}>
                                    <h3>{article.title}</h3>
                                    <p className="source_des"><strong>{article.description}</strong></p>
                                    <p className="source_name">{article.source.name}</p>
                                    <p>{d.toLocaleDateString()}</p>
                                    <p className="source_content">{article.content}</p>
                                    <p className="source_url"><a target="_blank" href={article.url}>{article.url}</a></p>
                                </div>
                        })}
                </div>
            );
        } else {
            return (
                <div className="thridPartyApi">API http request denied possibly because of reaching request limitation</div>
            )
        }
    }  
}

export default Apipage;
