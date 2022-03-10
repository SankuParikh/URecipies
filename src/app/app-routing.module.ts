import { ReceipeEditComponent } from './recepies/receipe-edit/receipe-edit.component';
import { RecipeDetailsComponent } from './recepies/recipe-details/recipe-details.component';
import { RecepieStartComponent } from './recepies/recepie-start/recepie-start.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { RecepiesComponent } from './recepies/recepies.component';
import { NgModule } from '@angular/core';
import { Route, RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  { path: '', redirectTo: '/recipes', pathMatch: 'full' },
  {
    path: 'recipes',
    component: RecepiesComponent,
    children: [
      { path: '', component: RecepieStartComponent },
      { path: 'new', component: ReceipeEditComponent },
      { path: ':id', component: RecipeDetailsComponent },
      { path: ':id/edit', component: ReceipeEditComponent },
    ],
  },
  { path: 'shopping-list', component: ShoppingListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
