import React from 'react';
import '../css/main.css'
import { Link } from "react-router-dom";



class Search extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            currentPage: 1,
            currenRecipes: [],
            totalPages: 0
        }
    }

    pageIncrement = () => {
        var page = this.state.currentPage + 1;
        var recipes = this.props.recipe.slice((page - 1) * 5, ((page - 1) * 5) + 5);
        this.setState({
            currentPage: page,
            currenRecipes: recipes
        })
    }
    pageDescrement = () => {
        var page = this.state.currentPage - 1;
        var recipes = this.props.recipe.slice(((page - 1) * 5), ((page - 1) * 5) + 5);
        this.setState({
            currentPage: page,
            currenRecipes: recipes
        })
    } 

    componentWillMount = () => {
        this.setState({
            currenRecipes: this.props.recipe.slice(0,5),
            totalPages: this.props.recipe.length/5
        })
        
    }

    //I checked lots of individual recipe's results, the Cuisine is a empty array.
    //so that i write this filter function to show able to filter by a certain item.
    //This function will add in as an onClick method for button below.
    // filter = () =>{
    //     this.setState({
    //         currentRecipes : this.props.recipe.filter((a)  => {
    //             console.log(a.servings)
    //             return a.servings > 16
    //         })
    //     })
    // }

    render(){
        return (
            <div className='w-100'>
                {/* <button onClick={this.filter}>filter</button> */}
            {
                this.state.currenRecipes.map((arr,i) => {  
                    return (
                        <div className="col-md-4 mx-auto" key={i} >
                                <div className="card mb-4 box-shadow" >
                                        <img 
                                            className="card-img-top" 
                                            data-src="" 
                                            alt="Recipe Pic" 
                                            style={{height: 225, width: '100%', display: 'block'}}
                                            src={ "https://spoonacular.com/recipeImages/" +arr.image} 
                                            data-holder-rendered="true" />
                                        <div className="card-body">
                                            <p className="card-text"> Name: {arr.title} </p>
                                        <div className="d-flex justify-content-between align-items-center">
                                            
                                        <div className="btn-group">
                                            <Link to={"/details/"+arr.id} type="button btn btn-default btn-sm" className="btn btn-sm btn-warning" >
                                            <span className="glyphicon glyphicon-pencil"></span>Details</Link>
                                        </div>
                                        <small className="text-muted" align="right" name="recipeName">{arr.title}</small>
                                    </div>
                                </div>  
                            </div>
                        </div>
                    )
                })
            }
                <div className='text-center pagination-container'>
                    <button className={this.state.currentPage > 1 ? '' : 'disabled'} onClick={this.state.currentPage > 1 ? this.pageDescrement : null}>Prev</button>
                    <button > {this.state.currentPage} </button>
                    <button className={this.state.currentPage < this.state.totalPages ? '' : 'disabled'} onClick={this.state.currentPage < this.state.totalPages ? this.pageIncrement : null}>Next</button>
                </div>
            </div>
        )
    }
}

export default Search; 