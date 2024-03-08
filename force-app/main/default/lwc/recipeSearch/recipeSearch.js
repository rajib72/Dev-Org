import { LightningElement } from 'lwc';
import getRandomRecipe from "@salesforce/apex/spoonacularRecipe.getRandomReceipe";
import getRecipeByIngredients from "@salesforce/apex/spoonacularRecipe.getReceipeByIngredient";

export default class RecipeSearch extends LightningElement {
    recipes = [];
  fetchRandomRecipe() {
    getRandomRecipe()
      .then((data) => {
        this.recipes =
          JSON.parse(data) && JSON.parse(data).recipes
            ? JSON.parse(data).recipes
            : [];
      })
      .catch((error) => {
        console.error(error);
      });
  }

  fetchRecipesByIngredients() {
    const ingredients = this.template.querySelector(".ingredient-input").value;
    getRecipeByIngredients({ ingredients : ingredients})
      .then((data) => {
        this.recipes = JSON.parse(data);
        console.log("search",data);
      })
      .catch((error) => {
        console.error(error);
      });
  }
}