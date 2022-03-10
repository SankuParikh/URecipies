import { RecipeService } from './../../recipe.service';
import { Receipe } from './../../recipe.model';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {

   @Input() recipe!: Receipe;
   @Input() index!:number;
  //@Output() recipeSelected = new EventEmitter<void>();
  
  // constructor(private recipeService:RecipeService) {

  //  }

  ngOnInit(): void {
  }
  // onSelected() {
  //   this.recipeService.recipeSelected.emit(this.recipe)
  //  // this.recipeSelected.emit();
  // }

}
