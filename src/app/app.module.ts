import { NgModule, inject } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import{ initializeApp } from 'firebase/app';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireModule } from '@angular/fire/compat'; 

export const firebaseConfig = {
  apiKey: "AIzaSyCP_YJV_iHW1SznaIrtKbbWvGGrBii66SU",
  authDomain: "empleados-a73b2.firebaseapp.com",
  projectId: "empleados-a73b2",
  storageBucket: "empleados-a73b2.appspot.com",
  messagingSenderId: "348371477256",
  appId: "1:348371477256:web:99e22412d206e14a2f82bd"
};


initializeApp(firebaseConfig);


@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule, 
    IonicModule.forRoot({ mode: 'md' }), 
    AppRoutingModule,  
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
 
})
export class AppModule {}
