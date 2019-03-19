import { Injectable } from '@angular/core';
import { ApiService } from '../api/api.service'
import { Observable } from 'rxjs'
import { IssPosition } from '../../models/issPosition.model'
import { IssCrew } from 'src/app/models/issCrew.model';

@Injectable({
  providedIn: 'root'
})
export class IssService {

  constructor( private apiService: ApiService ) { }

  getIssPosition(): Observable<IssPosition>{
    return this.apiService
      .get('http://api.open-notify.org/iss-now.json')
  }

  getIssCrew(): Observable<IssCrew>{
    return this.apiService
      .get('http://api.open-notify.org/astros.json')
  }

  getIssFlights(lat: number, lon: number, n: number): Observable<any>{
    return this.apiService
      .get(`http://api.open-notify.org/iss-pass.json?lat=${lat}&lon=${lon}&alt=20&n=${n}`)
  }
}
