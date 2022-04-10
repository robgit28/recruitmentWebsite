import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Vacancy } from '../models/vacancy';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  searchOption = [];
  public postsData: Vacancy[];
  vacancyUrl: string = "https://jsonplaceholder.typicode.com/posts";

  constructor(
    private http: HttpClient
  ) { }

  getVacancies(): Observable<Vacancy[]> {
    return this.http.get<Vacancy[]>(this.vacancyUrl);
  }



}


       
   
      

