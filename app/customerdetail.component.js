"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var CustomerService_1 = require("./Services/CustomerService");
var customerdetail = (function () {
    function customerdetail(route, customerserice) {
        this.route = route;
        this.customerserice = customerserice;
    }
    customerdetail.prototype.ngOnInit = function () {
        var id = this.route.snapshot.params['id'];
        this.getCustomerDetail(id);
    };
    customerdetail.prototype.getCustomerDetail = function (selectedId) {
        var _this = this;
        this.customerserice.getCustomerDetail(selectedId).subscribe(function (val) { _this.extractResponse(val); });
        ;
    };
    customerdetail.prototype.extractResponse = function (respone) {
        this.customerObj = respone.json().Customer;
        console.log(this.customerObj);
    };
    customerdetail = __decorate([
        core_1.Component({
            selector: 'my-first-angular2-app',
            templateUrl: './templates/customerdetail.html'
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, CustomerService_1.CustomerService])
    ], customerdetail);
    return customerdetail;
}());
exports.customerdetail = customerdetail;
//# sourceMappingURL=customerdetail.component.js.map