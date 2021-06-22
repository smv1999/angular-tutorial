import { Component } from '@angular/core';
import { TransportationService } from './transportation.service';
import { Car } from '../utilities/car';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular Tutorial';
  colors: string[] = ["Red", "Blue", "Green"];
  
  cars : Car[];
  constructor(private transportationService : TransportationService) {
    this.cars = this.transportationService.getCars();
  }
}
