import { Component, OnInit } from '@angular/core';
import { CustomerService,customers } from "../Services/CustomerService";
import { Observable } from "rxjs/Observable";
import {Router, RouterLink} from '@angular/router';

@Component({
    selector:'my-first-angular2-app',
    templateUrl: './templates/customerlist.html'
})
export class CustomertList implements OnInit
{
    private Customers:Observable<customers>;
    constructor(private northwindSevice:CustomerService)
    {
  
    }

    ngOnInit() {
        console.log("oninit called");
        this.northwindSevice.getNorthWindData().subscribe(val=> this.PrintData(val));

    }

    private PrintData(responseData : any)
    {
      this.Customers = responseData.json().Customers;
      console.log(this.Customers);
    }
}