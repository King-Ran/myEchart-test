import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { QuicklyStartComponent } from './quickly-start/quickly-start.component';
import { PieComponent } from './pie/pie.component';
import { AsyncDataComponent } from './async-data/async-data.component';
import { ChinaPeopleComponent } from './china-people/china-people.component';
import { ChinaPeoplePieComponent } from './china-people-pie/china-people-pie.component';


@NgModule({
  declarations: [
    AppComponent,
    QuicklyStartComponent,
    PieComponent,
    AsyncDataComponent,
    ChinaPeopleComponent,
    ChinaPeoplePieComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
