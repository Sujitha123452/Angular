import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'http://localhost:5039/api';

  constructor(private http: HttpClient) { }

  signUp(data: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/Users/SignUp`, data);
  }

  login(data: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/Users/Login`, data);
  }

  getUser(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/Users/${id}`);
  }
}
