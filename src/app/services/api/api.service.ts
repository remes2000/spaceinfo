import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private http: HttpClient
  ) { }

  private formatErrors(error: any) {
    return  throwError(error.error);
  }

  get(url: string, params: HttpParams = new HttpParams()): Observable<any> {
    return this.http.get(url, { params })
      .pipe(catchError(this.formatErrors))
  }
}
