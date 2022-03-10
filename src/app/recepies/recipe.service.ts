import { ShopppingListService } from './../shopping-list/shopping-list.service';
import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { Receipe } from "./recipe.model";
@Injectable()
export class RecipeService {

    constructor(private slService: ShopppingListService) { }

    //recipeSelected = new EventEmitter<Receipe>();


    private recipes: Receipe[] = [
        new Receipe('a test recipe', 'test', 'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&resize=556,505', [new Ingredient('meat', 1), new Ingredient('french fries', 10)]),
        new Receipe('another test recipe', 'test2', 'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&resize=556,505', [new Ingredient('french ', 10)])
    ];


    getRecipes() {
        return this.recipes.slice();
    }
    addIngredientsToShoppingList(ingridents: Ingredient[]) {
        this.slService.addIngredients(ingridents);
    }
    getRecipe(index:number)
    {

        return this.recipes[index];
    }
}