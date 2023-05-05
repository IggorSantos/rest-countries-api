import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'


@Injectable({
  providedIn: 'root'
})
export class HomeServiceService {
  baseUrl = "https://restcountries.com/v3.1"

  constructor(private http: HttpClient) { }

  getCountries(){
    return this.http.get(`${this.baseUrl}/all`)
  }

  getCountry(name: string){
    return this.http.get(`${this.baseUrl}/alpha?codes=${name}`)
  }

  getCountriesByRegion(name: string){
    return this.http.get(`${this.baseUrl}/region/${name}`)
  }

  getSearchCountry(search: string){
    return this.http.get(`${this.baseUrl}/name/${search}`)
  }
}
