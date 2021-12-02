import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, Observable } from 'rxjs';
import { normalizeGenFileSuffix } from '@angular/compiler/src/aot/util';

export interface Config {
  heroesUrl: string;
  textfile: string;
  date: any;
}

export class User{
  public id:number;
  public name:string;
  public username: string;
  public email:string;
  public address:string;

  constructor(id:number,name:string, username:string, email:string, address:string){
    this.id=id;
    this.name=name;
    this.username=username;
    this.address=address;
    this.email=email;
  }
}


@Injectable({
  providedIn: 'root'
})
export class SearchUsersService {

  constructor(private http:HttpClient) { }


  configUrl = 'https://jsonplaceholder.typicode.com/users?name=Leanne%20Graham';

  getUsers():Observable<Config>{
    return this.http.get<Config>(this.configUrl )
    .pipe(
     // map( users => {
       // return users;
    //  });
     // catchError(this.handleError)
    );
  }


  private handleError(error: HttpErrorResponse){
    if(error.error instanceof ErrorEvent){
      console.log('An error occured: ',error.error.message);
    }else{
      console.error(`Backend returned code ${error.status},` +
      `body was: ${error.error}`);
    }
  }
}
