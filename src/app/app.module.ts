import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { StarRatingModule } from 'angular-star-rating';

// components
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { ContactComponent } from './components/contact/contact.component';
import { MapComponent } from './components/map/map.component';
import { ContactFormComponent } from './components/contact-form/contact-form.component';

// Matherial Design
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

// Map modules
import { GoogleMapsModule } from '@angular/google-maps';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';

//Pipes
import { MainModule } from './modules/main/main.module';

//Forms
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MainOwnerAdminModule } from './modules/main-owner-admin/main-owner-admin.module';
import { ShoppingItemDetailedComponent } from './components/shopping-item-detailed/shopping-item-detailed.component';
import { BikeDetailedComponent } from './components/bike-detailed/bike-detailed.component';
import { MatSelectModule } from '@angular/material/select';

import { MatDialogModule } from '@angular/material/dialog';
import { LoginModalFormComponent } from './components/login-modal-form/login-modal-form.component';

import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { ModalComponent } from './components/modal/modal.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    ContactComponent,
    MapComponent,
    ContactFormComponent,
    ShoppingItemDetailedComponent,
    BikeDetailedComponent,
    LoginModalFormComponent,
    ModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    CommonModule,
    GoogleMapsModule,
    HttpClientModule,
    HttpClientJsonpModule,
    MatIconModule,
    FormsModule,
    MainModule,
    MainOwnerAdminModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatDialogModule,
    AngularFireAuthModule,
    StarRatingModule.forRoot()
  ],
  bootstrap: [AppComponent],
  exports: [MapComponent],
  providers: []
})
export class AppModule {}
