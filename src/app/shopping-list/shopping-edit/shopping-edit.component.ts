import { ShopppingListService } from './../shopping-list.service';
import { Ingredient } from './../../shared/ingredient.model';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @Output() ingredientAdded = new EventEmitter<Ingredient>();

  constructor(private slService: ShopppingListService) { }

  ngOnInit(): void {
  }
  onItemAdd(name: HTMLInputElement, amount: HTMLInputElement) {
    //console.log(name.value + '' + amount.value)
    const newIngredient = new Ingredient(name.value, Number(amount.value));
    //this.ingredientAdded.emit(newIngredient);
    this.slService.IngredientAdded(newIngredient);
  }

}
