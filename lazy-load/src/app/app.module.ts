import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes = [{
  path: 'customers', 
  loadChildren: () => import('./customers/customers.module').then(m => m.CustomersModule)
  
},
  { path: 'orders', 
    loadChildren: () => import('./orders/orders.module').then(m => m.OrdersModule) },
  {
    path:'',
    redirectTo: '/customers',
    pathMatch:'full'
  },
  {
    path:'**',
    component:NotFoundComponent
  }
  ]

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
