import {Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {WeatherService} from "./services/weather.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnChanges{

  constructor(private weatherService: WeatherService) {
  }

  weatherData?: any;
  cityName: string = 'Kranj';

  ngOnInit():void {
    this.ngOnChanges(this.weatherData);
  }

  onSubmit() {
    this.getWeatherData(this.cityName);
    this.cityName = '';
  }

  private getWeatherData(cityName: string) {
    this.weatherService.getWeatherData(cityName).subscribe({
      next: (response) => {
        this.weatherData = response;
        console.log(response);
      }
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.getWeatherData(this.cityName);
    this.cityName = '';
  }

}
