import React, { Component } from 'react';
import Header from './Components/Header';


class App extends Component {
  constructor(props){
    super(props);
    //no se puede llamar en este bloque this.setState()
    this.state = {
      newsResponse:[]
    }
  }

  //recordar: Este método solo se ejecuta justo después de que el componente haya sido montado en el DOM.
  componentWillMount(){
    //llamamos al metodo
    this.checkNews();

  }
  // Creamos una funcion para consultar la api
  checkNews =()=>{
    let url = 'https://newsapi.org/v2/top-headlines?country=co&category=general&apiKey=27c0e34cbbb3476a8b67c4cb2e666a37';
    
    //console.log(url)

    //nota: Con ECMAScript6 tenemos acceso a una nueva función llamada fetch que a través de Promesas nos simplifica y facilita el realizar una petición AJAX de forma nativa.
    fetch(url)
    //recibimos una repuesta del servidor
    .then(response =>{
      //funcion json() para pasar esa respuesta a json
      return response.json();
    })
    //luego recibimos las noticias 
    .then(newsResponse =>{
      
      //esta respuesta(en arreglos) se debe llevar al state
      console.log(newsResponse.articles);
      // mandamos las respuesta de noticias por medio de this.setState()
      this.setState({
        newsResponse: newsResponse.articles
      })

    })
  }


  render() {
    return (
      <div className="App">
        <Header
          title="Noticias"
        />
      </div>
    );
  }
}

export default App;
