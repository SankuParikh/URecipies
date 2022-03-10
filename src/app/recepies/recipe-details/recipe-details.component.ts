import { RecipeService } from './../recipe.service';
import { Receipe } from './../recipe.model';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css'],
})
export class RecipeDetailsComponent implements OnInit {
  //@Input() recipe!: Receipe;
  recipe!: Receipe;
  id!: number;
  constructor(
    private recipeService: RecipeService,
    private route: ActivatedRoute,
    private router:Router
  ) {}

  ngOnInit(): void {
    // const id=this.route.snapshot.params['id'];

    this.route.params.subscribe((parms: Params) => {
      this.id = +parms['id'];
      this.recipe=this.recipeService.getRecipe(this.id);
    });
  }
  OnAddtoShoppinglist() {
    this.recipeService.addIngredientsToShoppingList(this.recipe.ingredients);
  }
  onEditRecipe()
  {
    this.router.navigate(['edit'],{relativeTo:this.route})
  }
}
