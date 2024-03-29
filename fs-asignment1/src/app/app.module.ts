import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StudentsComponent } from './students/students.component';


@NgModule({
  declarations: [
    AppComponent,
    StudentsComponent
  ],
  bootstrap: [ AppComponent ],
  imports: [
    BrowserModule
  ],
  providers: []
})
export class AppModule { }
