import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Driver } from '../interfaces/driver';

@Injectable({
  providedIn: 'root'
})
export class DriversService {
  private baseUrl = 'http://localhost:3000/api/';

  constructor(private http: HttpClient) { }

  getAllDrivers(): Observable<Driver[]> {
    return this.http.get<Driver[]>(this.baseUrl + 'drivers/2021')
      .pipe(
        catchError(err => {
          console.log('err', err);
          return throwError('Something went wrong, please try again later')
        })
      )
  }
}
