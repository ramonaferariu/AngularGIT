import { EventEmitter, Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Recipe } from "./recipe.model";



@Injectable()
export class RecipeService{
  recipeSelected = new EventEmitter<Recipe>();
  private  recipes:Recipe[] = [
        new Recipe('Pizza', 
        'Margherita',
         'https://www.simplyrecipes.com/thmb/YSlSLYrnOBfkzE3rD_uMSnA8dlA=/960x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Simply-Recipes-Homemade-Pizza-LEAD-3-8aa37af554cf4445a1e3e54fdc66e974.jpg',
         [
           new Ingredient('tomato souce /ml', 50),
           new Ingredient('mozzarella /gr', 100)
         ]
         ),
      
         new Recipe('Burger', 
         'This is a test',
          'https://jamilacuisine.ro/wp-content/uploads/2017/11/Burger-de-vita-facut-in-casa-500x478.jpg',
          
            [
              new Ingredient('Burger', 1),
              new Ingredient('Fries', 20)
            ]
          
          )
      ];
      getRecipes(){
          return this.recipes.slice();
      }

      constructor(private slService:ShoppingListService){
        
      }

      addIngredientsToShoppingList(ingredients:Ingredient[]){
          this.slService.addIngredients(ingredients);
      }
}