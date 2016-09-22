import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AngularFireModule } from 'angularfire2';
import { FirebaseService } from './services/firebase.service';
import { AppComponent } from './app.component';

export const firebaseConfig = {
  apiKey: "AIzaSyBspQvDxQwVFWtMf7hQTJFIUWlSGQM8lrE",
    authDomain: "businesscontacts-7917b.firebaseapp.com",
    databaseURL: "https://businesscontacts-7917b.firebaseio.com",
    storageBucket: "businesscontacts-7917b.appspot.com",
    messagingSenderId: "84313793006"
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [FirebaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
