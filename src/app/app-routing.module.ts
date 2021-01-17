import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecipesPageComponent } from '../../src/app/features/pages/recipes-page/recipes-page.component';
import { AppComponent } from './app.component';
import { DessertPageComponent } from './features/pages/dessert-page/dessert-page.component';
import { HomePageComponent } from './features/pages/home-page/home-page.component';
import { PageNotFoundComponent } from './features/pages/page-not-found/page-not-found.component';

const routes: Routes = [
  { path: 'home', component: HomePageComponent },
  { path: 'recipes', component: RecipesPageComponent },
  { path: 'dessert', component: DessertPageComponent },
  { path: '**', component: PageNotFoundComponent },
  { path: '', redirectTo : '/home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [
  AppComponent,
  HomePageComponent,
  RecipesPageComponent,
  PageNotFoundComponent,
  DessertPageComponent
];
