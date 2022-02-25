
import { Ingredient } from "../shared/ingredient.model";
import { Subject } from "rxjs";

export class ShoppingList{
    ingredientsChanged = new Subject<Ingredient[]>();
    private ingredients:Ingredient[] = [
        new Ingredient('Apple',50),
        new Ingredient('Tomatoes',10)
    ];

    getIngredients(){
        return this.ingredients.slice();
    }

    addIngredients(ingredients:Ingredient){
        this.ingredients.push(ingredients);
        this.ingredientsChanged.next(this.ingredients.slice());
    }

    addIngredientToShop(ingredients: Ingredient[]){
        this.ingredients.push(...ingredients);
        this.ingredientsChanged.next(this.ingredients.slice());
    }
}