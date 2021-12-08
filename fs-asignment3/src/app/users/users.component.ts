import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Config, SearchUsersService } from './search-users.service';
import { HttpClient } from '@angular/common/http';
import { map,switchMap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit,OnDestroy {

  config: Config | undefined;
  searchForm : FormGroup;
  searchInput = new FormControl("",[Validators.minLength(3),Validators.required]);
  searchedUsers:any;

  constructor(private searchService:SearchUsersService,private http:HttpClient) { 
    this.searchForm = new FormGroup({
      "searchInput" : this.searchInput
    });
  }

  ngOnInit(): void {
  }

  ngOnDestroy():void{

  }

  onSearch(){
    const name = this.searchForm.controls["searchInput"].value;
    console.log("input: " + name);
    this.showConfig(name);
   


  }

  showConfig(name:string) {
     this.http.get<{ [key: string]: Observable<any> }>('https://jsonplaceholder.typicode.com/users')
     .pipe(
      /* switchMap(responseData => {
         console.log(responseData);
         return responseData;
       }*/
      
      
       map((responseData) => {
      
      
     const usersArray = [];
       console.log('respondeData '+responseData);
       for(const key in responseData){
         if(responseData[key])
         if(responseData.hasOwnProperty(key)){
            usersArray.push({...responseData[key],id:key})
         }
       }
       this.searchedUsers = usersArray;}
       
     ))
       .subscribe(res => {
         // this.searchedUsers = res;
       //  console.log('searchedUsers: '+ this.searchedUsers);
       console.log(`users: ${res}`);
       });
   }



  showConfig2(name:string) {
   /* this.searchService.getUsers()
      .subscribe((data: Config) => this.config = {
          heroesUrl: data.heroesUrl,
          textfile:  data.textfile,
          date: data.date,
      });

      console.log(this.config);*/

    //  this.http.get('https://jsonplaceholder.typicode.com/users?name=' + name)
    this.http.get('https://jsonplaceholder.typicode.com/users')
      .pipe(map(res => res
        
        
       /* {
        const users = [];
       for(const key in responseData){
         // if(responseData.hasOwnProperty(key)) {
             users.push({ ...responseData});
        //}
        }
        users.push({ ...responseData});
        return users;
      }*/
      
      ))
      .subscribe(res => {
        //  console.log(users);
         this.searchedUsers = res;
         console.log( this.searchedUsers);
      });
  }

}
