import { Component, OnInit } from '@angular/core';
import { FiveDayWheatherService } from './five-day-wheather.service';

@Component({
  selector: 'five-days-weather-five-day-weather',
  templateUrl: './five-day-weather.component.html',
  styleUrls: ['./five-day-weather.component.css']
})
export class FiveDayWeatherComponent implements OnInit {

  constructor(private fiveDayWheatherService: FiveDayWheatherService) { }

  ngOnInit() {
      console.log("INICIANDO");
      
      this.fiveDayWheatherService.getResults()
          .subscribe(result => {
              if ( result === null ) {
                  this.onError(result);
              } else {
                  console.log(result);
                
              }
          });
      
  }
  
  onError(result){ console.log("ERROR"); }

}
