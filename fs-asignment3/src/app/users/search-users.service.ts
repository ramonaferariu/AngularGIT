import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, Observable } from 'rxjs';
import { normalizeGenFileSuffix } from '@angular/compiler/src/aot/util';
import { User } from './user.model';
import { Config } from './config.model';

@Injectable({
  providedIn: 'root'
})
export class SearchUsersService {

  constructor(private http:HttpClient) { }


 
  users:User[] = [];
  configUrl = 'https://jsonplaceholder.typicode.com/users';
  getConfig() {
    return this.http.get<Config>(this.configUrl);
  }

 

  public getUsers(configUrl:string){
    return this.http.get(configUrl);
  }

}
