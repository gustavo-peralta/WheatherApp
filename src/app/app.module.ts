import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SharedModule } from './core/shared/shared.module';
import { HttpModule, Http } from  '@angular/http';
import { AppComponent } from './app.component';
import { ConfigModule, ConfigLoader } from "ngx-config";
import { configFactory } from "./core/config/config.loader.factory";
import { DashboardComponent } from './Application/dashboard/dashboard.component';
import { AppRoutingModule } from "./app.routes";
import {Routes, RouterModule} from '@angular/router';

import { FiveDayWeatherComponent } from './Application/five-day-weather/five-day-weather.component';
import { FiveDayWheatherService } from './Application/five-day-weather/five-day-wheather.service'

  @NgModule({
  declarations: [
    AppComponent,
    FiveDayWeatherComponent,
    DashboardComponent
    
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule,
    /*
    ConfigModule.forRoot({
        provide: ConfigLoader,
        useFactory: (configFactory),
        deps: [Http]
    }),
    */
    SharedModule,
    AppRoutingModule
  ],
  exports: [],
  providers: [FiveDayWheatherService],
  bootstrap: [AppComponent]
})
export class AppModule { }
