import { EventEmitter, Injectable } from '@angular/core';
import { User } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

 // private users:User[] = [];
  users:User[]=[];
  usersUpdate = new EventEmitter<User[]>();

  addUser(user:User){
    this.users.push(user);
    this.usersUpdate.emit(this.users.slice());
    
    localStorage.setItem("users", JSON.stringify(this.users));

    // To remove a value/item from localStorage
   // localStorage.removeItem("users");
  }

  getUsers(){
    let usersData =localStorage.getItem("users");
    if(usersData){
      this.users = JSON.parse(usersData);
    }
    return this.users.slice();
}

}
