import Axios from 'axios';

class DataService {

    //CRUD

    getResearchedRecipe(search,callback){
        //retrieve all foods
      Axios.get(`https://api.spoonacular.com/recipes/search?apiKey=7ac94313c9bf4940828a390f8bd808b2&title=${search}`)
        .then(response => {
            // console.log(response.data)
            callback(null,response.data)
        })
        .catch(error => {
            callback(error.response, null)
        })
    }

    getRecipes(search,callback){
        //retrieve all foods
      Axios.get(`https://api.spoonacular.com/recipes/search?apiKey=7ac94313c9bf4940828a390f8bd808b2&title=`+search)
        .then(response => {
            // console.log(response.data)
            callback(null,response.data)
        })
        .catch(error => {
            callback(error.response, null)
        })
    }

    getOneRecipes(id,callback){
        Axios.get(`https://api.spoonacular.com/recipes/${id}/information?apiKey=7ac94313c9bf4940828a390f8bd808b2&includeNutrition=true.`)
        .then(response => {
            // console.log(response.data)
            callback(null,response.data)
        })
        .catch(error => {
            callback(error.response, null)
        })
    }

    

}

export default new DataService()