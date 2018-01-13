import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';  /*Reactive form Module import*/
import { EmployeeMember } from './app.service';
import { Degreelist } from './app.select.service';

import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [EmployeeMember, Degreelist],
  bootstrap: [AppComponent]
})
export class AppModule { }
