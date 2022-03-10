import { RecipeService } from './../recipe.service';
import { Receipe } from './../recipe.model';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  recipes: Receipe[] = [];

  @Output() recipeWasSelected = new EventEmitter<Receipe>();

  constructor(
    private receipeService: RecipeService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.recipes = this.receipeService.getRecipes();
  }

  ngOnInit(): void {}

  // onRecipeSelected(recipe: Receipe) {
  //   this.recipeWasSelected.emit(recipe);
  // }

  onNewRecipe() {
    this.router.navigate(['new'],{relativeTo:this.route});
  }
}
