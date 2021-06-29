import { Component, OnInit } from '@angular/core';
import { FoodRecipesService } from 'src/app/services/food-recipes.service';
import { Recipe } from 'src/app/models/recipe.model';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-food-list-component',
  templateUrl: './food-list-component.component.html',
  styleUrls: ['./food-list-component.component.scss']
})
export class FoodListComponentComponent implements OnInit {

  recipe?: Recipe[];
  currentRecipe?: Recipe;
  currentIndex = -1;
  title = '';


  constructor(private foodService: FoodRecipesService) { }

  ngOnInit(): void {
  this.foodService.getAll().subscribe(item => {
    console.log(item);
  });
  }
}
