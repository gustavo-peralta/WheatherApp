import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboradComponent } from './dashborad.component';
import { RouterModule } from '@angular/router';
import { routes } from './dashboard.routes';
import { FiveDayWeatherComponent } from '../five-day-weather/five-day-weather.component';

import { FiveDayWheatherService } from '../five-day-weather/five-day-wheather.service';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    RouterModule.forChild( routes )
  ],
  declarations: [
    DashboradComponent,
    FiveDayWeatherComponent
  ],
  providers: [
    FiveDayWheatherService
  ]
})
export class DashboardModule {
    public static routes: any = routes;
    
}
