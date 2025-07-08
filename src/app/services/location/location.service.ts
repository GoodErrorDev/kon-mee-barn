// src/app/services/location.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { Observable } from 'rxjs';
import { District, Province, Subdistrict } from '../../models/location.mode';

@Injectable({
  providedIn: 'root'
})
export class LocationService {
  private basePath = 'assets/location';

  constructor(private http: HttpClient) {}

  getProvinces(): Observable<Province[]> {
    return this.http.get<Province[]>(`${this.basePath}/provinces.json`);
  }

  getDistricts(): Observable<District[]> {
    return this.http.get<District[]>(`${this.basePath}/districts.json`);
  }

  getSubdistricts(): Observable<Subdistrict[]> {
    return this.http.get<Subdistrict[]>(`${this.basePath}/subdistricts.json`);
  }
}
