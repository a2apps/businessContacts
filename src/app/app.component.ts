import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { FirebaseService } from './services/firebase.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title="Firebase App";
  businesses: Business[];
  categories: Categories[];
  constructor(private _firebaseService: FirebaseService) { }
  ngOnInit(){
  this._firebaseService.getBusinesses().subscribe(businesses =>{
    this.businesses=businesses;
  });
  this._firebaseService.getCategories().subscribe(categories =>{
    this.categories=categories;
  });
}
}


export interface Business{
  $key?:string;
  category:string; 
  city: string; 
  Company?: string; 
  description?: string; 
  email?: string;
  phone?: string;
  state?: string;
  street_address?: string;
  years_in_business?: number;
  zipcode?: string;
}

export interface Categories{
  $key?: string;
  name?:string;
}
