import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('f') signupForm : NgForm;
  defaultSubscription = "advanced";
  submitted = false;
 // form = {
    xemail = 'aa';
    xsubscription = '';
    xpassword = 's';
//}

  
  onSubmit(){
    this.submitted = true;
    this.xemail = this.signupForm.value.email;
    this.xsubscription = this.signupForm.value.subscription;
    this.xpassword = this.signupForm.value.password;

  
      console.log('Email:' + this.signupForm.value.email +
      ' Subscription: '+this.signupForm.value.subscription +
      ' Password: ' + this.signupForm.value.password);

      this.signupForm.reset();
  }
}
