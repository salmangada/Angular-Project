import { EventEmitter, Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingList } from "../shopping-list/shopping-list.service";
import { Recipe } from "./recipe.model";
import { Subject } from "rxjs";

@Injectable()
export class RecipeService{

    recipes: Recipe[] = [
        new Recipe('Tasty Schezwan', 
          'This is simply a test', 
          'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg',
          [
            new Ingredient('Meat',1),
            new Ingredient('Fries',20)
          ]),
        new Recipe('Big burger', 
          'This is simply a test', 
          'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg',
          [
            new Ingredient('Bun',10),
            new Ingredient('Meat',1)
          ])
      ];

    getRecipes(){
        return this.recipes.slice();
    }

    getRecipe(id:number){
      return this.recipes[id];
    }

    constructor(private slService:ShoppingList){

    }

    addRecipeToShoppingList(ingredient:Ingredient[]){
        this.slService.addIngredientToShop(ingredient);
    }
}