import React from 'react';
import PropTypes from 'prop-types';


//componente que solo mostrara una noticia
const Onenews = (props) =>{
//utilizaremos el destructuring para obtener solo las img title descrip url para cada uno de las noticias
const {urlToImage, url, title, description, source} = props.allnews;

//comprobamos que se esta pasando la info
//console.log(title)
    return(
        
        <div className="col s12 m6 l4">
            <div className="card">
                <div className="card-image">
                    <img src={urlToImage} alt={title}/>
                    <span className="card-title">{source.name}</span>
                </div>
                <div className="card-content">
                    <h3>{title}</h3>
                    <p>{description}</p>
                </div>
                <div className="card-action">
                    <a href={url} className="waves-effects waves-light btn">
                        Leer mas
                    </a>
                </div>
            
            </div>
        </div>
    )
}
//utilizamos un shapes se recomienda por que el objeto es muy extenso
Onenews.propTypes ={
    allnews: PropTypes.shape({
        urlToImage: PropTypes.string,
        url: PropTypes.string,
        title: PropTypes.string,
        description: PropTypes.string,
        source: PropTypes.object
    })
}
export default Onenews;