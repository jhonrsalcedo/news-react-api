import React, {Component} from 'react';
import Onenews from './Onenews';
import PropTypes from 'prop-types';
import {TransitionGroup, CSSTransition} from 'react-transition-group';


//componente de noticias
class News extends Component{
    render(){
        return(
            <div className="row">
            <TransitionGroup>
                {this.props.news.map(allnews =>(
//con map hacemos el recorido de las noticias y los pasamos al componente Onenews
                    <CSSTransition 
                    key={allnews.url}
                    classNames="fade"
                    timeout={500}
                    >
                    
                    <Onenews
                    //debemos identificar un key y para esto utilizaremos la url que seria unica en cada noticias
                       
                        allnews={allnews}
                    />
                    </CSSTransition>
                ))}
                </TransitionGroup>
            </div>
        );
    };
}
News.propTypes = {
    news: PropTypes.array.isRequired
}
export default News;