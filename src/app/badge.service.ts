import {HttpClient, HttpHeaders} from '@angular/common/http'
import {catchError, map, tap} from 'rxjs/operators';
import {Observable, of} from 'rxjs'
import { Injectable } from '@angular/core';
import { Badge } from './Badge';

@Injectable({
  providedIn: 'root'
})
export class BadgeService {

 private badgeUrl = 'http://localhost:3000/badge'

  constructor(private http: HttpClient) { }

  getBadges() : Observable<Badge[]> {

    return this.http.get<Badge[]>(this.badgeUrl)
  }

  getBadgeFromName( badgeName: string) : Observable<Badge>{

    const url = `${this.badgeUrl}/${badgeName}`;
    return this.http.get<Badge>(url);
  }

  private handleError<T> (operation = 'operation', result?:T){
    return (error: any): Observable<T> => {

      console.log(error); 

      

      return of(result as T)
    }
  }
}
