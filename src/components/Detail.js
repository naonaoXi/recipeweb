import React from "react";
import { Link } from "react-router-dom";
import Axios from 'axios';

class Detail extends React.Component {
    constructor(){
        super();
        this.state = {
          detailRecipe:{},
        }
      }

    componentWillMount= ()=>{ 
        const url = window.location.href; 
        const id = url.split('details/')[1]; 
        console.log(id); 
        Axios.get(`https://api.spoonacular.com/recipes/${id}/information?apiKey=7ac94313c9bf4940828a390f8bd808b2&includeNutrition=true.`) 
            .then(response => { 
                console.log(123) 
                console.log(response.data) 
                this.setState({ detailRecipe: response.data }) 
                console.log(this.state.detailRecipe); 
            }) 
    }   

    render(){
        var ingredients=[]
        console.log(this.state.detailRecipe);
        if (this.state.detailRecipe.extendedIngredients) {
            ingredients = this.state.detailRecipe.extendedIngredients;
        }
        return (
                
                <form className="form-signin">
                    <div className="h3 mb-3 font-weight-normal text-center " >
                        <img 
                            className="card-img-top text-center" 
                            data-src="" 
                            alt="Recipe Pic" 
                            style={{width:300}}
                            src={this.state.detailRecipe.image} 
                            data-holder-rendered="true" />
                        <div className="h3 mb-3 font-weight-normal text-center">
                            <p className="card-text" style={{fontStyle:"italic", color: "blue"}}> Name: <br /></p>
                                <span>{this.state.detailRecipe.title} </span>
                            <p className="card-text" style={{fontStyle:"italic", color: "blue"}}> <br />Health information: <br /></p>
                                <span>Vegan: {this.state.detailRecipe.vagen ? '✔️' : '❌'}</span><br />
                                <span>GlutenFree: {this.state.detailRecipe.glutenFree ? '✔️' : '❌'}</span><br />
                                <span>DairyFree: {this.state.detailRecipe.dairyFree ? '✔️' : '❌'}</span><br />
                                <span>VeryHealthy: {this.state.detailRecipe.veryHealthy ? '✔️' : '❌'}</span><br />
                            
                            <p className="card-text" style={{fontStyle:"italic", color: "blue"}}> <br />List of Ingredients: <br /></p>
                                <span>
                                    <ul>
                                        { ingredients.length > 0 ? ingredients.map((ingredient, i) => {
                                            return <li key={i}>
                                                        Ingredient: {ingredient.name}
                                                        <ol>
                                                            <li >measures -- us: {ingredient.measures.us.amount}</li>
                                                            <li >metric: {ingredient.measures.metric.amount}</li>
                                                        </ol>
                                                    </li>}) : null}
                                    </ul>
                                </span>
                            <p className="card-text" style={{fontStyle:"italic", color: "blue"}}> <br />Cooking Instructions:</p>
                            <div dangerouslySetInnerHTML={{ __html: this.state.detailRecipe.instructions }}></div><hr />                            
                            <div className="btn-group font-weight-normal text-center ">
                                <Link to="/" className="btn btn-lg btn-primary btn-block btn-center">Back to Home</Link>
                            </div>
                        </div> 
                    </div>
                
            </form>        
        )
    }
 
}
export default Detail;