import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  private profilesUrl = 'api/profiles'; // Assuming you have an API endpoint for profiles

  constructor(private http: HttpClient) { }

  addProfile(profile: any): Observable<any> {
    return this.http.post<any>(this.profilesUrl, profile);
  }

  getProfile(id: string): Observable<any> {
    const url = `${this.profilesUrl}/${id}`;
    return this.http.get<any>(url);
  }
}
