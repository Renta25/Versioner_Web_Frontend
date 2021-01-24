import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RestService {
  constructor(private http: HttpClient) { }

  auth = {
    /**
     * authorization request
     * @param email
     * @param password
     * 
     * @returns Header Authorization 
     */
    authorization: (
      email: string,
      password: string
    ): Observable<HttpResponse<any>> =>{
      return this.http.post<any>(`${environment.endpoint}/login`,{
        email: email,
        password: password
      }, {observe: 'response'})
    }
  }
}
