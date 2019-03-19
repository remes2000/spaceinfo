import { Injectable } from '@angular/core';
import { ApiService } from '../api/api.service' 
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RocketLaunchService {

  constructor( private apiService: ApiService ) { }

  getLaunches(n: number, offset: number): Observable<any>{
    return this.apiService.get(`https://launchlibrary.net/1.3/launch/next/${n}?offset=${offset}`)
  }
}
