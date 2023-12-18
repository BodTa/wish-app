import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class WishService {

  constructor(private http:HttpClient) { }

  getWishes(){
    return this.http.get('assets/wishes.json').pipe(catchError(this.handleErrors))
  }

  handleErrors(error:HttpErrorResponse){
    return error.message || "Server Error";
  }

  private getDefaultOptions():any{
    return {
      headers: new HttpHeaders({
        'Content-Type':'application/json',
        // 'Authorization':'Bearer token-string'
      })
    }
  } 
}
