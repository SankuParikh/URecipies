import { ShopppingListService } from './shopping-list.service';
import { Ingredient } from './../shared/ingredient.model';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  // ingredients: Ingredient[] = [

  //   new Ingredient('apples', 5),
  //   new Ingredient('tomatoes', 10),

  // ];
  ingredients: Ingredient[] = [];

  private igChanged!: Subscription;

  constructor(private shoppinglistService: ShopppingListService) {}

  ngOnDestroy(): void {
    this.igChanged.unsubscribe();
  }

  ngOnInit(): void {
    this.ingredients = this.shoppinglistService.getIngredientsList();
    this.igChanged = this.shoppinglistService.ingredientsChanged.subscribe(
      (ingredients: Ingredient[]) => {
        this.ingredients = ingredients;
      }
    );
  }
  onIngredientAdded(ing: Ingredient) {
    //this.shoppinglistService.IngredientAdded(ing);
    //this.ingredients.push(ing);
  }
}
