import React, {Component} from 'react';


//componente que solo mostrara una noticia
const Onenews = (props) =>{
//utilizaremos el destructuring para obtener solo las img title descrip url para cada uno de las noticias
const {urlToImage, url, title, description, source} = props.allnews;

//comprobamos que se esta pasando la info
//console.log(title)
    return(
        
        <div>desde Onenews

        </div>
    )
}

export default Onenews;