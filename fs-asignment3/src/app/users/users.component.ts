import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { SearchUsersService } from './search-users.service';
import { HttpClient } from '@angular/common/http';
import { User } from './user.model';
import { Config } from './config.model';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit,OnDestroy {

  searchForm : FormGroup;
  searchInput = new FormControl("",[Validators.minLength(3),Validators.required]);
  searchedUsers:User[] = [];
  config: Config | undefined;

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

   /* const name = this.searchForm.controls["searchInput"].value;
    console.log("input: " + name);
    this.searchService.getUsers(this.configUrl).subscribe(data =>{
      console.log(data);
      this.searchedUsers = data;
    })  */
    this.showConfig();
  }
  showConfig() {
    this.searchService.getConfig()
      .subscribe((data: Config) => this.config = {
          heroesUrl: data.heroesUrl,
          textfile:  data.textfile,
          date: data.date,
      }
      );
   
  }



}
