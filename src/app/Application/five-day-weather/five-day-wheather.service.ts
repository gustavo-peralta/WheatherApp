import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';

@Injectable()
export class FiveDayWheatherService {
    

  constructor(private http: Http) { }

  //Service management error
  private handleError( error: Response | any ) {
      // In a real world app, you might use a remote logging infrastructure
      let errMsg: string;
      if ( error instanceof Response ) {
          const body = error.json() || '';
          const err = body.error || JSON.stringify( body );
          errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
      } else {
          errMsg = error.message ? error.message : error.toString();
      }
      console.error( errMsg );
      return Observable.throw( errMsg );
  }

  public getResults(): Observable<any> {

      return this.http.get("http://api.openweathermap.org/data/2.5/forecast?q=Madrid,es&units=metric&lang=es&appid=f5b8a3b6ed0fdc167af94d2b9925ab55")                
          .map(( response: Response ) => {
    
              let result : any = {};
              let body = response.json();

              if ( body["cod"] != "200" ) 
                  return null;
              else {
                  return response;
              }
          } ).catch( this.handleError );

  }   
  
}


