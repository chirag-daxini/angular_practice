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
var CustomerService_1 = require("../Services/CustomerService");
var CustomertList = (function () {
    function CustomertList(northwindSevice) {
        this.northwindSevice = northwindSevice;
    }
    CustomertList.prototype.ngOnInit = function () {
        var _this = this;
        console.log("oninit called");
        this.northwindSevice.getNorthWindData().subscribe(function (val) { return _this.PrintData(val); });
    };
    CustomertList.prototype.PrintData = function (responseData) {
        this.Customers = responseData.json().Customers;
        console.log(this.Customers);
    };
    CustomertList = __decorate([
        core_1.Component({
            selector: 'my-first-angular2-app',
            templateUrl: './templates/customerlist.html'
        }), 
        __metadata('design:paramtypes', [CustomerService_1.CustomerService])
    ], CustomertList);
    return CustomertList;
}());
exports.CustomertList = CustomertList;
//# sourceMappingURL=customerlist.component.js.map