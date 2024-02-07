import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {catchError, Observable, throwError} from "rxjs";
import {Pet} from "./pet";

@Injectable({
  providedIn: 'root'
})
export class PetService {

  private url: string = "https://localhost:5001/api/pets"

  constructor(private http: HttpClient) {  }

  getAllPets(): Observable<Pet[]> {
    return this.http.get<Pet[]>(this.url).pipe(
      catchError((error) => {
          let errorMsg: string;
          return throwError(() => errorMsg);
        }
      ))
  };

  postPet(pet: Pet): Observable<Pet> {
    return this.http.post<Pet>(this.url, pet, this.httpOptions).pipe(
      catchError((error) => {
          let errorMsg: string;
          return throwError(() => errorMsg);
        }
      ))
  };

  httpOptions = {
    //a special header for http save requests
    // headers let the client and server pass additional info with an http request or response
    headers: new HttpHeaders({  'Content-Type': 'application/json'})
  };

}
