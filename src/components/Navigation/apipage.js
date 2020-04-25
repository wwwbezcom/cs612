import React, { Component } from 'react';

const API_URL = 'https://newsapi.org/v2/top-headlines?country=us&pageSize=6&apiKey=acb9b87ad5934ff4ac8f4bac448cc509';

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
        // setInterval(this.getAPI,5000);
        this.getAPI();
        if (this.state.articles){
            return (
                <div className="thridPartyApi">
                    {this.state.articles.map((article)=>{

                        var d = new Date(article.publishedAt)
                        
                        return <div className="APIcontent" key={article.url}>
                                    <h3>{article.title}</h3>
                                    <p><strong>{article.description}</strong></p>
                                    <p className="source_name">{article.source.name}</p>
                                    <p>{d.toLocaleDateString()}</p>
                                    <p>{article.content}</p>
                                    <p>{article.url}</p>
                                </div>
                        })}
                </div>
            );
        } else {
            return (
                <div className="thridPartyApi">API http request denied possibly because of reach request limitation</div>
            )
        }
    }  
}

export default Apipage;
