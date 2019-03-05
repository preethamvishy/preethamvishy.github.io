import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule }    from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { GoogleAnalyticsModule, GA_TOKEN } from 'angular-ga';
import { ParticlesModule } from 'angular-particle';
 
import { APP_ROUTES } from './app.routes';
import { ExperienceComponent } from './experience/experience.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MglTimelineModule } from 'angular-mgl-timeline';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ExperienceComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    ParticlesModule,
    BrowserAnimationsModule,
    MglTimelineModule,
    APP_ROUTES,
  ],
  providers: [
    { provide: GA_TOKEN, useValue: 'UA-50825364-8' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
