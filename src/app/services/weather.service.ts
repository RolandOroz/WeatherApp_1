import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private hhtp: HttpClient) { }

  getWeatherData(cityName: string): Observable<any> {
    return this.hhtp.get<any>(environment.weatherApiBaseUrl, {
      headers: new HttpHeaders()
        .set(environment.XRapidAPIHostHeaderName, environment.
          XRapidAPIHostHeaderValue)
        .set(environment.XRapidAPIKeyHeaderName, environment.
          XRapidAPIKeyHeaderValue),
      params: new HttpParams()
        .set('q', cityName )
    })
  }
}
