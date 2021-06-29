import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { Recipe } from '../models/recipe.model';

@Injectable({
  providedIn: 'root'
})

export class FoodRecipesService {

  // From site
  private dbPath = '/Learner';
  

  // From site
  recipleObject: Observable<any>;
  

  constructor(public db: AngularFireDatabase){
    this.recipleObject = db.object(this.dbPath).valueChanges();
   }

    // From site
   getAll(): Observable<any>{
    return this.recipleObject;
   }
}
