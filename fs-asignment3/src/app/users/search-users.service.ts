import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SearchUsersService {

  constructor(private http:HttpClient) { }

  getConfig(){
    return this.http.get('https://jsonplaceholder.typicode.com/users');
  }
}
