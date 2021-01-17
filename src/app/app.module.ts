import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, routingComponents } from './app-routing.module';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { AddButtonComponent } from '../shared/add-button/add-button.component';
import { FoodCardComponent } from '../shared/food-card/food-card.component';


/*import { AngularFireStorageModule, StorageBucket } from '@angular/fire/storage'; */

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    AddButtonComponent,
    routingComponents,
    FoodCardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
