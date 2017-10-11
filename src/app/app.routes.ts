import { Routes, RouterModule } from "@angular/router";
import { DashboardComponent } from './Application/dashboard/dashboard.component';
import { NgModule } from "@angular/core";
import { FiveDayWeatherComponent } from './Application/five-day-weather/five-day-weather.component';

export const routes:Routes = [

    {
        path: 'DashBoard',  
        data: {
        title: 'DashBoard'
        },
        component: DashboardComponent
    },
    {
        path: 'DashBoard/FiveDaysWeather',  
        data: {
        title: 'Five day weather'
        },
        component: FiveDayWeatherComponent
    },
    {
        data: [''],
        path: '**',
        redirectTo: 'DashBoard',
    },

];
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}


