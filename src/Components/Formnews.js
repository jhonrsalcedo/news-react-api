import React, {Component} from 'react';

class Formnews extends Component{
    constructor(props){
        super(props);
        this.state={
            categoryValue:''
        }
    }


    handleCategory = (e) => {
        e.preventDefault();
        const selectCategory = this.state.categoryValue

        //console.log(selectCategory.categoryValue);

        //enviar por props a App
        this.props.checkNews(selectCategory)

    }
    handleChange =(e) =>{
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    render(){
        return(
           <div className="buscador row">
                <div className="col s12 m8 offset-m2">
                    <form onSubmit={this.handleCategory}>
                        <h2>Noticias por Categoria</h2>
                        <div className="input-field col s12 m8">
                            <select name="categoryValue" onChange={this.handleChange} value={this.state.categoryValue}>
                                <option value="general" defaultValue >General</option>
                                <option value="business">Negocios</option>
                                <option value="entertainment">Entretenimiento</option>
                                <option value="health">Salud</option>
                                <option value="science">Ciencia</option>
                                <option value="sports">Deporte</option>
                                <option value="technology">Tecnologia</option>
                             
                            </select>
                        </div>
                        <div className="input-field col s12 m4 enviar">
                            <input type="submit" className="btn amber darken-2" value="Buscar"/>
                        </div>
                    </form>
                </div>
           </div>

        );
    };
}

export default Formnews;