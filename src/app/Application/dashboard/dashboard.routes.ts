import { Routes, RouterModule } from "@angular/router";
import { FiveDayWeatherComponent } from '../five-day-weather/five-day-weather.component';
import { NgModule } from "@angular/core";

export const routes:Routes = [

    {
        path: 'five-days-weather',  
        component: FiveDayWeatherComponent
    }

];

