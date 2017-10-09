import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule }    from '@angular/http';
import { AppComponent } from './app.component';
import { CustomerService } from "./Services/CustomerService";
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule, RoutingConst } from './app.routing';


@NgModule({
    imports:      [ BrowserModule, HttpModule, AppRoutingModule  ],
    declarations: [ AppComponent ],
    bootstrap:    [ AppComponent ],
    providers: [ CustomerService ]
  })

  export class AppMainModule{

  }