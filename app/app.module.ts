import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule }    from '@angular/http';
import { AppComponent } from './app.component';
import { CustomerService } from "./Services/CustomerService";
import { RouterModule, Routes } from '@angular/router';
import { CustomerRoutingModule } from './Customer/customer.routing.module';
import { CustomerModule } from './Customer/customer.module';


@NgModule({
    imports:      [ BrowserModule, HttpModule, CustomerModule, CustomerRoutingModule ],
    declarations: [ AppComponent ],
    bootstrap:    [ AppComponent ],
    providers: [ CustomerService ]
  })

  export class AppMainModule{

  }