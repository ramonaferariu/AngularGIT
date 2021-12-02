import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { SearchUsersService } from './search-users.service';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  searchForm : FormGroup;
  searchInput = new FormControl("",[Validators.minLength(3),Validators.required]);

  constructor(fb:FormBuilder,private searchService:SearchUsersService) { 
    this.searchForm = new FormGroup({
      "searchInput" : this.searchInput
    });
  }

  ngOnInit(): void {
  }

  onSearch(){
    const name = this.searchForm.controls["name"].value;
    
  }

}
