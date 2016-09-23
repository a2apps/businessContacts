import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import 'rxjs/add/operator/map';
@Injectable()

export class FirebaseService {
  businesses: FirebaseListObservable<Business[]>;
  categories: FirebaseListObservable<Categories[]>;
  constructor(private af: AngularFire) { 
  }
  getBusinesses(category: string=null){
    if (category!=null){
      this.businesses = this.af.database.list("businesses", {
        query:{
          orderByChild: 'category',
          equalTo: category
        }
      }) as FirebaseListObservable<Business[]>;
    }else{
      this.businesses = this.af.database.list("businesses") as FirebaseListObservable<Business[]>;
    }
      return this.businesses;
  }
  getCategories(){
    this.categories = this.af.database.list("categories") as FirebaseListObservable<Categories[]>;
    return this.categories;
  }
  addBusiness(newBusiness){
    return this.businesses.push(newBusiness);
  }
  updateBusiness(key, updBusiness){
    return this.businesses.update(key, updBusiness);
  }
  deleteBusiness(key){
    this.businesses.remove(key);
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