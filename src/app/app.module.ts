import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoadingSpinnerComponent } from './components/loading-spinner/loading-spinner.component';
import { LoginComponent } from './pages/login/login.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './pages/home/home.component';
import { AuthService } from './services/auth.service';
import { RequestService } from './services/request.service';
import { PeopleService } from './services/people.service';
import {APP_BASE_HREF} from '@angular/common';
import { ContadorService } from './services/contador.service';
import { CounterComponent } from './components/counter/counter.component';
import { ChuckComponent } from './pages/chuck/chuck.component';
@NgModule({
  declarations: [
    AppComponent,
    LoadingSpinnerComponent,
    LoginComponent,
    HomeComponent,
    CounterComponent,
    ChuckComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [AuthService,RequestService,PeopleService,{provide:APP_BASE_HREF,useValue:'/src/app'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
