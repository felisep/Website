import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {

  constructor(private firestore: AngularFirestore) {
    console.log(this.firestore);
  }

  // Retrieve recipes from the database
  // tslint:disable-next-line: typedef
  getRecipes(){
    return this.firestore.collection('0').snapshotChanges;
  }

}
