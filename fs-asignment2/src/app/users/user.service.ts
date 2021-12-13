import { EventEmitter, Injectable } from '@angular/core';
import { User } from './user.model';
import { Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  users:User[]=[];
  usersUpdate = new Subject<User[]>();

  addUser(user:User){
    this.users.push(user);
    this.usersUpdate.next(this.users.slice());
    localStorage.setItem("users", JSON.stringify(this.users));
  }

  getUsers(){
    let usersData =localStorage.getItem("users");
    if(usersData){
      this.users = JSON.parse(usersData);
    }
    return this.users.slice();

   /* this.users= (JSON.parse(localStorage.getItem("users"))) ?? []; 
   //Argument of type 'string | null' is not assignable to parameter of type 'string'.*/

}

}
