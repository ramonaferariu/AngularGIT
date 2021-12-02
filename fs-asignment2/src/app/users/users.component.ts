import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { User } from './user.model';
import { UserService } from './user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  @Output() clear:EventEmitter<void>= new EventEmitter<void>();
  users:User[]=[] ;

  constructor( private userService:UserService) { }

  ngOnInit(): void {
    this.users = this.userService.getUsers();
    console.log(this.users);

    this.userService.usersUpdate.subscribe(
      (users:User[]) =>{
        this.users = users;
      }
    )
  }

  clearUsersList(){
    this.users = [];
    //localStorage.clear();
    localStorage.removeItem('users');
  }

}
