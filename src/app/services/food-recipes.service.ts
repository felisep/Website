import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/database';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FoodRecipesService {

  private dbPath = 'test';

  test!: AngularFireObject<any>;
  learningRef!: AngularFireList<any>;

  constructor(db: AngularFireDatabase) {
    this.test = db.object('/');
    this.learningRef = db.list(this.dbPath);
    console.log(db);
    console.log(this.learningRef);
   }

   getAll(): AngularFireList<any>{
    return this.learningRef;
   }
}
