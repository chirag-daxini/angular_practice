import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Router, ActivatedRoute } from '@angular/router';
import { CustomerService,customers } from "./Services/CustomerService";


@Component({
    selector:'my-first-angular2-app',
    templateUrl: './templates/customerdetail.html'
})
export class customerdetail implements OnInit
{
    private customerObj: customers;
    constructor(private route: ActivatedRoute, private customerserice:CustomerService)
        {

        }
    ngOnInit()
    {
        let id : any = this.route.snapshot.params['id'];
        this.getCustomerDetail(id);
    }

    getCustomerDetail(selectedId: any)
    {
        this.customerserice.getCustomerDetail(selectedId).subscribe(val=> { this.extractResponse(val) });;
    }

    extractResponse(respone:any)
    {
        this.customerObj = respone.json().Customer;
        console.log(this.customerObj);
    }
}