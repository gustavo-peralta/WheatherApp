import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FiveDayWeatherRoutingModule } from './five-day-weather-routing.module';
import { FiveDayWeatherComponent } from './five-day-weather.component';
import { FiveDayWheatherService } from './five-day-wheather.service';

@NgModule({
  imports: [
    CommonModule,
    FiveDayWeatherRoutingModule
  ],
  declarations: [FiveDayWeatherComponent],
  providers: [FiveDayWheatherService]
      
})
export class FiveDayWeatherModule { }
