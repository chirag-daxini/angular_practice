import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { CustomertList } from './customerlist.component';
import { customerdetail } from './customerdetail.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'customer' },
  { path: 'customer', component: CustomertList },
  { path: 'customerdetail/:id', component: customerdetail }
];

@NgModule({
  imports: [RouterModule.forRoot(routes), BrowserModule ],
  exports: [RouterModule],
})
export class AppRoutingModule { }

export const RoutingConst = [ CustomertList, customerdetail ];