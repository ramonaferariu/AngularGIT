import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { OrdersComponent } from './orders.component';
import { OrderDetailComponent } from './order-detail/order-detail.component';


const routes: Routes = [
  { path: '', component: OrdersComponent },
  {path: 'orderId', component: OrderDetailComponent}
];

@NgModule({
  declarations: [
    OrdersComponent,
    OrderDetailComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class OrdersModule { }
