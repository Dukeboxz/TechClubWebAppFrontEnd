import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import {catchError, map, tap} from 'rxjs/operators';
import {Observable, of} from 'rxjs'
import {Member} from './member'
@Injectable({
  providedIn: 'root'
})
export class MemberService {

  private memberUrl = "localhost:3000/members";
  private testURl = "https://postman-echo.com/post";
  private httpOptions = {
    //headers: new HttpHeaders({'Content-Type':'application/json'})
  }

  constructor(private http: HttpClient) { }

  getmembers(): Observable<Member[]>{
    console.log('In get members')
     return this.http.get<Member[]>('http://localhost:3000/members')
    
    //.pipe(catchError(this.handleError<Member[]>('get members', [])));
  }

  addMember(member:Member): Observable<Member>{
    return this.http.post<Member>(this.memberUrl, JSON.stringify( member), this.httpOptions)
    .pipe(
      
      catchError(this.handleError<Member>('Add Member'))
    )
  }
  


  private handleError<T> (operation = 'operation', result?:T){
    return (error: any): Observable<T> => {

      console.log(error); 

      

      return of(result as T)
    }
  }
}
