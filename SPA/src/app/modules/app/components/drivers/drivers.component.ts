import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Driver } from 'src/app/shared/interfaces/driver';
import { DriversService } from 'src/app/shared/services/drivers.service';

@Component({
  selector: 'app-drivers',
  templateUrl: './drivers.component.html',
  styleUrls: ['./drivers.component.css']
})
export class DriversComponent implements OnInit {
  drivers: Driver[] = [];

  constructor(public driverService: DriversService) { }

  ngOnInit(): void {
    this.driverService.getAllDrivers()
      .subscribe(driverData => {
        this.drivers = driverData;
      })
  }

}
