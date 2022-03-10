import { Receipe } from './recipe.model';
import { Component, OnInit } from '@angular/core';
import { RecipeService } from './recipe.service';

@Component({
  selector: 'app-recepies',
  templateUrl: './recepies.component.html',
  styleUrls: ['./recepies.component.css'],
  providers:[RecipeService]
})
export class RecepiesComponent implements OnInit {

  selectedRecipe!:Receipe
  constructor(private recipeService:RecipeService) { }

  ngOnInit(): void {
   // this.recipeService.recipeSelected.subscribe((recipe:Receipe)=>{this.selectedRecipe=recipe;})
  }

}
