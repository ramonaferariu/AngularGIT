import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Config, SearchUsersService } from './search-users.service';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit,OnDestroy {

  config: Config | undefined;
  searchForm : FormGroup;
  searchInput = new FormControl("",[Validators.minLength(3),Validators.required]);
  searchedUsers = [];

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
    this.showConfig();
   
  }


  showConfig() {
   /* this.searchService.getUsers()
      .subscribe((data: Config) => this.config = {
          heroesUrl: data.heroesUrl,
          textfile:  data.textfile,
          date: data.date,
      });

      console.log(this.config);*/

      this.http.get('https://jsonplaceholder.typicode.com/users?name=Leanne%20Graham')
      .pipe(map(responseData =>{
        const users = [];
        for(const key in responseData){
         // if(responseData.hasOwnProperty(key)) {
             users.push({ ...responseData});
        //}
        }
        return users;
      }))

      .subscribe(users => {
        //  console.log(users);
         this.searchedUsers = users;
         console.log( this.searchedUsers);
      });
  }

}
