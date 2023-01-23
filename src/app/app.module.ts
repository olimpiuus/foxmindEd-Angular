import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ShoppingItemComponent } from './shopping-item/shopping-item.component';
import { MainPageComponent } from './main-page/main-page.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ContactComponent } from './contact/contact.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Matherial Design 
import {MatToolbarModule} from '@angular/material/toolbar'
import {MatCardModule} from '@angular/material/card';

@NgModule({
  declarations: [
    AppComponent,
    ShoppingItemComponent,
    MainPageComponent,
    NavBarComponent,
    ContactComponent
  ],
  imports: [BrowserModule, AppRoutingModule, NgbModule, BrowserAnimationsModule,MatToolbarModule,MatCardModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
