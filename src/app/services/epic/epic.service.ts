import { Injectable } from '@angular/core';
import { ApiService } from '../api/api.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EpicService {

  constructor( private apiService: ApiService ) { }
  private apiKey: string = 'v0e9X5dQVM75rjegAVJDLOxaopkuagLAUSEop0cv'

  getPhotos(year: number, month: number, day: number): Observable<any>{
      return this.apiService.get(`https://api.nasa.gov/EPIC/api/natural/date/${year}-${month>10?month:"0"+month}-${day>10?day:"0"+day}?api_key=${this.apiKey}`)
  }

  getHalfSizePhotoUrl(year: number, month: number, day: number, image: string): string{
    return `https://epic.gsfc.nasa.gov/archive/natural/${year}/${month>10?month:"0"+month}/${day>10?day:"0"+day}/jpg/${image}.jpg?api_key=${this.apiKey}`
  }

  getAvailableDates(): Observable<any>{
    return this.apiService.get(`https://api.nasa.gov/EPIC/api/natural/available?api_key=${this.apiKey}`)
  }
}
