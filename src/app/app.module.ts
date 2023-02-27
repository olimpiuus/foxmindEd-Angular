import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { StarRatingModule } from 'angular-star-rating';
// components
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ContactComponent } from './contact/contact.component';
import { MapComponent } from './map/map.component';

// Matherial Design
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';

// Map modules
import { GoogleMapsModule } from '@angular/google-maps';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';
// Services

//Pipes
import { MainModule } from './modules/main/main.module';

//Forms
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { ContactFormComponent } from './contact-form/contact-form.component';

import { AngularFireModule } from '@angular/fire/compat';

import { provideFirebaseApp, getApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { provideDatabase, getDatabase } from '@angular/fire/database';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    ContactComponent,
    MapComponent,
    ContactFormComponent
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
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    StarRatingModule.forRoot()

    // AngularFireModule.initializeApp(environment.firebase),
    // provideDatabase(() => getDatabase())

    // AngularFireModule.initializeApp(environment.firebase),
    // AngularFirestoreModule,
    // AngularFireModule.initializeApp(environment.firebaseConfig),
    // provideFirebaseApp(() => getApp()),
    // provideFirestore(() => getFirestore())
  ],
  bootstrap: [AppComponent],
  exports: [MapComponent]
})
export class AppModule {}
