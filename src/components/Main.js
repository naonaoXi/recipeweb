import React from "react";
import '../css/main.css';
import Axios from 'axios';
import Search from "./Search";

class Main extends React.Component {

  constructor(){
    super();
    this.state = {
      recipe:{},
      searchTerm:"",
      hasResult:false
    }
  }

  handleSubmit = (e) => {
    // initial state
    this.setState({
      recipe:{},
      hasResult:false
    })
    this.searchResult(e.target);
  }

  inputChange = (e) =>{
    this.setState({
      searchTerm: e.target.value
    })
  }

  searchResult = (e) =>{
    Axios.get(`https://api.spoonacular.com/recipes/search?apiKey=7ac94313c9bf4940828a390f8bd808b2&query=${this.state.searchTerm}`)
        .then(response => {
          var matchedRecipes = response.data.results.filter(result => result.title.toLowerCase().includes(this.state.searchTerm));
          this.setState({
            recipe: matchedRecipes,
            hasResult: matchedRecipes.length > 0
          })
      })  
  }

  render(){
    console.log(this.state.recipe)
    return ( 
      <div>
        <section className="jumbotron text-center">
          <div className="container">
            <div className="input-group">
              <input name="searchTerm" type="text" className="form-control" placeholder="Search receipt...." onChange={this.inputChange}/> 
              <div className="input-group-append">
                <button className="btn btn-secondary" type="button" onClick = {(e)=>this.handleSubmit(e)}>
                  <i className="fa fa-search">🔍
                  </i>
                </button>
              </div> 
            </div>
          </div>
        </section>
        <div className="album py-5 bg-light">
          <div className="container" id="container">
            {/* to be selection */}
            {/* <div onClick={this.selectFliter('chatime')}></div> */}
            <div className="row">
                {this.state.hasResult ? <Search recipe={this.state.recipe} searchT={this.state.searchTerm} /> : null}
            </div>
          </div>
        </div>
      </div>
    );
  }

}

export default Main;