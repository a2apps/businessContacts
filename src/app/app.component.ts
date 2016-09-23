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
  appState: string;
  activeKey: string;
  Activecompany:string;
  Activecategory:string;
  Activeyears_in_business:string;
  Activedescription:string;
  Activephone:string;     
  Activeemail:string;     
  Activestreet_address:string;
  Activecity:string;    
  Activestate:string;     
  Activezipcode:string;  
  constructor(private _firebaseService: FirebaseService) { }
  ngOnInit(){
    this.appState='default';
  this._firebaseService.getBusinesses().subscribe(businesses =>{
    this.businesses=businesses;
  });
  this._firebaseService.getCategories().subscribe(categories =>{
    this.categories=categories;
  });
}
  filterCategory(category:string){
    if(category!="0"){
      this._firebaseService.getBusinesses(category).subscribe(businesses =>{
      this.businesses=businesses;
    });
    }else{
      this._firebaseService.getBusinesses().subscribe(businesses =>{
      this.businesses=businesses;
    });
    }
  }
  addBusiness(
      company:string,
      category:string,
      years_in_business:string,
      description:string,
      phone:string,
      email:string,
      street_address:string,
      city:string,
      state:string,
      zipcode:string
  ){
    var created_at = new Date().toString();
    var newBusiness={
      Company:company,
      category:category,
      years_in_business:years_in_business,
      description:description,
      phone:phone,
      email:email,
      street_address:street_address,
      city:city,
      state:state,
      zipcode:zipcode
    }
    
    this._firebaseService.addBusiness(newBusiness);
    this.changeState('default');
  }
  showEdit(business){
      this.changeState('edit', business.$key);
      this.Activecompany=business.Company;
      this.Activecategory=business.category;
      this.Activeyears_in_business=business.years_in_business;
      this.Activedescription=business.description;
      this.Activephone=business.phone;
      this.Activeemail=business.email;
      this.Activestreet_address=business.street_address;
      this.Activecity=business.city;
      this.Activestate=business.state;
      this.Activezipcode=business.zipcode;
  }
  updateBusiness(){
    var updBusiness={
      category : this.Activecategory,
      city:   this.Activecity,
      Company :   this.Activecompany,
      description:   this.Activedescription,
      email:   this.Activeemail,
      phone:   this.Activephone,
      state:   this.Activestate,
      street_address:   this.Activestreet_address,
      years_in_business:   this.Activeyears_in_business,
      zipcode:   this.Activezipcode
    }
    this._firebaseService.updateBusiness(this.activeKey, updBusiness);
    this.changeState('default');
  }
  deleteBusiness(key){
    this._firebaseService.deleteBusiness(key);
    this.changeState('default');
  }
  changeState(state, key=null){    
    if (key){
      this.activeKey=key;
    }
    this.appState=state;
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
