import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Recipe } from '../models/recipe.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {

  recipeCollection: AngularFirestoreCollection<Recipe> | undefined;
  recipes: Observable<Recipe[]> | undefined;

  constructor(private firestore: AngularFirestore) {}

  // Retrieve recipes from the database
  // tslint:disable-next-line: typedef
  getRecipes(){
    return this.firestore.collection('1').snapshotChanges();
  }
  
  // tslint:disable-next-line: typedef
  getRecipeses(){
    return this.firestore.collection('2').valueChanges();
  }

}
