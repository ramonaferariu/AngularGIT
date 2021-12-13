import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from '../user.model';
import { UserService } from '../user.service';



@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  form : FormGroup;
  name = new FormControl("",[Validators.required, Validators.minLength(3),Validators.maxLength(50)] );
  age = new FormControl("", [Validators.required]);
  email = new FormControl("",Validators.email);

  constructor(private userService:UserService) {

    this.form = new FormGroup({
      'name':this.name,
      'age':this.age,
      'email': this.email
    });
   }

  ngOnInit(): void {
  }

  onAddUser(){
    const name = this.form.controls['name'].value;
    const age = this.form.controls['age'].value;
    const email = this.form.controls['email'].value;


    const newUser = new User(name,age,email);

    this.userService.addUser(newUser);
    this.form.reset();

  }


}
