import { Http, Headers, URLSearchParams, Response } from "@angular/http";
import { Observable } from "rxjs/Observable";
import { Subscription } from "rxjs/Subscription";
import { Observer } from "rxjs/Observer";

import { Injectable } from "@angular/core";

@Injectable()
export class CustomerService {

    constructor(private http:Http)
    {

    }

     getNorthWindData()
    {
       return this.http.get("http://northwind.servicestack.net/customers?format=json");
    }

    getCustomerDetail(id:any)
    {
        console.log(id);
        return this.http.get("http://northwind.servicestack.net/customers/"+ id + "?format=json");
    }
}

export interface customers
{
    Address:string;
    City:string;
    CompanyName:string;
    ContactName:string;
    ContactTitle:string;
    Country:string;
    Fax:string;
    Id:string,
    Phone:string;
    PostalCode:string
}