import {HttpClient, HttpHeaders} from '@angular/common/http'
import {catchError, map, tap} from 'rxjs/operators';
import {Observable, of, ObservableLike} from 'rxjs'
import { Injectable } from '@angular/core';
import { Badge } from './Badge';
import { stringify } from 'querystring';

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

  createBadge(badge: Badge) : Observable<Badge>{

    return this.http.post<Badge>(this.badgeUrl, badge)
  }

  uploadBadgeImage(imageFile: File, badge: Badge):  string {

    let formData = new FormData(); 
    var returnString: string; 
    formData.append("imageFile", imageFile)
    formData.append("badge", JSON.stringify(badge))

    this.http.post(this.badgeUrl + '/badgeImage', formData)
      .subscribe((response)=>{
        returnString = response.toString();
      })
    return returnString;

  }

  deleteBadge(badge: Badge): Observable<{}> {

    const url = `${this.badgeUrl}/${badge.id}`
    return this.http.delete(url)
    .pipe(
      catchError(this.handleError('delete badge'))
    )
  }

  updateBadge(badge: Badge): Observable<Badge>{

    const url = `${this.badgeUrl}/${badge.id}`;
    return this.http.patch<Badge>(url, badge)

  }

  private handleError<T> (operation = 'operation', result?:T){
    return (error: any): Observable<T> => {

      console.log(error); 

      

      return of(result as T)
    }
  }
}
