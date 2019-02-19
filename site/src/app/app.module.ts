import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule }    from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { GoogleAnalyticsModule, GA_TOKEN } from 'angular-ga';

import { APP_ROUTES } from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    APP_ROUTES,
  ],
  providers: [
    { provide: GA_TOKEN, useValue: 'UA-50825364-8' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
