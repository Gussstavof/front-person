import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Person} from "./person";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  private url = "http://localhost:8080/person"
  constructor(private httpClient: HttpClient) { }

  create(person: Person): Observable<Person>{


    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      })
    };

    return this.httpClient.post<Person>(this.url, person, httpOptions)
  }
}
