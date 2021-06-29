import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';

import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { environment } from '../environments/environment';

import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { AddButtonComponent } from '../shared/add-button/add-button.component';
import { FoodCardComponent } from '../shared/food-card/food-card.component';
import { FoodListComponentComponent } from './features/pages/food-list-component/food-list-component.component';

import { RecipesService } from './services/recipes.service';



/*import { AngularFireStorageModule, StorageBucket } from '@angular/fire/storage'; */

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    AddButtonComponent,
    routingComponents,
    FoodCardComponent,
    FoodListComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
  ],
  providers: [RecipesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
