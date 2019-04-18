import React, {Component} from 'react';
import Onenews from './Onenews';

//componente de noticias
class News extends Component{
    render(){
        return(
            <div className="row">

                {this.props.news.map(allnews =>(
                    //con map hacemos el recorido de las noticias y los pasamos al componente Onenews
                    <Onenews
                    //debemos identificar un key y para esto utilizaremos la url que seria unica en cada noticias
                        key={allnews.url}
                        allnews={allnews}
                    />
                ))}
            </div>
        );
    };
}

export default News;