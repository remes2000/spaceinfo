import { Injectable } from '@angular/core';
import { ApiService } from '../api/api.service'
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class GeocodingService {

  constructor( private apiService: ApiService ) { }

  geocode(name: string): Observable<any>{
    const apiKey = '3d795bc67dc06a'
    return this.apiService.get(`https://eu1.locationiq.com/v1/search.php?key=${apiKey}&q=${name}&format=json`)
  }
}
