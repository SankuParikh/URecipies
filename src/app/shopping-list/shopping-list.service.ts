import { EventEmitter, Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Ingredient } from "../shared/ingredient.model";
@Injectable()
export class ShopppingListService {

    //ingredientsChanged = new EventEmitter<Ingredient[]>();
    ingredientsChanged = new Subject<Ingredient[]>();

    private ingredients: Ingredient[] = [

        new Ingredient('apples', 5),
        new Ingredient('tomatoes', 10),

    ];


    IngredientAdded(ing: Ingredient) {
        this.ingredients.push(ing);
        this.ingredientsChanged.next(this.ingredients.slice());
    }
    getIngredientsList() {
        return this.ingredients.slice();
    }
    addIngredients(ingredients: Ingredient[]) {
        // for (let ing of ingredients) {
        //    this.addIngredients(ing);

        // }

        this.ingredients.push(...ingredients);
        this.ingredientsChanged.next(this.ingredients.slice());
    }
}