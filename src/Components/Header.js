import React from 'react';


//statelees react component
const Header =(props) =>{
    return(
        <nav>
            <div className="nav-wrapper light-blue darken-3">
        <a href="https://github.com" className="brand-logo center">{props.title} </a>
        </div>
        </nav>
    );
};

export default Header;