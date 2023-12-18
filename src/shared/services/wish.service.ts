import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WishService {

  constructor(private http:HttpClient) { }

  getWishes(){
    return this.http.get('assets/wishes.json');
  }
}
