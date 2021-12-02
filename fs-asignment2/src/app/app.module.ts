import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { UsersModule } from './users/users.module';

const routes = [{
  path:'users',
  loadChildren: () => import('./users/users.module').then(m=>m.UsersModule)
},
  {path:'**',
  component:NotFoundComponent
  }
]


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    //AppRoutingModule,
    UsersModule,
    RouterModule.forRoot(routes),
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
