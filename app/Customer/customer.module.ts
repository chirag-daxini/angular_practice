import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule }    from '@angular/http';
import { CustomerRoutingModule } from '../Customer/customer.routing.module';
import { CustomerService } from '../Services/CustomerService';

@NgModule({
    imports:      [ BrowserModule, HttpModule, CustomerRoutingModule  ],
    providers: [ CustomerService ]
  })

  export class CustomerModule{

  }